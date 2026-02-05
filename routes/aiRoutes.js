const express = require("express");
const router = express.Router();

const generateText1 = require("../controllers/textController1");
const generateText2 = require("../controllers/textController2");
const generateHealthPlan = require("../controllers/textController3");


// Text generation routes
router.post("/generate-text1", generateText1);
router.post("/generate-text2", generateText2);
router.post("/generate-health-plan", generateHealthPlan);
module.exports = router;
