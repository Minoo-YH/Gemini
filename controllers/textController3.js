const model = require("../config/gemini");

const generateHealthPlan = async (req, res) => {
  const { age, gender, healthGoal, dietPreference, workoutDays } = req.body;

  if (!age || !gender || !healthGoal || !dietPreference || !workoutDays) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });
}

const prompt = `
I am a ${age}-year-old ${gender}.
My health goal is to ${healthGoal}.
My diet preference is ${dietPreference}.
I can work out ${workoutDays} days per week.

Please create a personalized weekly health and fitness plan.
Include exercise types, workout duration, and meal suggestions.
`;

res.json({
  success: true,
  receivedData: {
    age,
    gender,
    healthGoal,
    dietPreference,
    workoutDays,
  },
});




};

module.exports = generateHealthPlan;
