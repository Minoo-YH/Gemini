const model = require("../config/gemini");

// POST request to /generate-text2 with the following JSON payload:
// {
// "fitnessType": "strength training",
// "frequency": "4",
// "experience": "beginner",
// "goal": "build muscle and increase overall strength"
// }

const generateText2 = async (req, res) => {
  const { fitnessType, frequency, experience, goal } = req.body; //|| {};

  if (!fitnessType || !frequency || !experience || !goal) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const prompt = `
You are a professional fitness coach.

I am a ${experience} individual focusing on ${fitnessType}.
My main goal is to ${goal}.
I can train ${frequency} times per week.

Please return the response in Markdown format with the following structure:

## Weekly Training Plan
- Number of training days
- Workout split

## Exercise Recommendations
- Example exercises per session

## Workout Duration
- Estimated duration per workout

## Nutrition Tips
- Basic diet suggestions
`;

  try {
    const result = await model(prompt);
    res.json({
      success: true,
      output: result.text,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = generateText2;
