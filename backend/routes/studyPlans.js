const router = require("express").Router();
const StudyPlan = require("../models/StudyPlan");

// GET the current study plan (assuming only one plan exists for simplicity)
router.route("/").get((req, res) => {
  StudyPlan.findOne() // Find the first plan found
    .then(plan => res.json(plan))
    .catch(err => res.status(400).json("Error: " + err));
});

// CREATE or REPLACE the study plan
router.route("/update").post(async (req, res) => {
  const { subjects } = req.body;
  try {
    // Remove existing plan if it exists
    await StudyPlan.deleteMany({});
    // Create a new plan
    const newPlan = new StudyPlan({ subjects });
    await newPlan.save();
    res.json("Study plan updated!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;

