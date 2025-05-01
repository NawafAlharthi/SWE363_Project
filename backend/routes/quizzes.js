const router = require("express").Router();
const Quiz = require("../models/Quiz");

// GET all quizzes
router.route("/").get((req, res) => {
  Quiz.find()
    .then(quizzes => res.json(quizzes))
    .catch(err => res.status(400).json("Error: " + err));
});

// ADD a new quiz
router.route("/add").post((req, res) => {
  const { title, description, questions } = req.body;
  const newQuiz = new Quiz({ title, description, questions });

  newQuiz.save()
    .then((savedQuiz) => res.json(savedQuiz))
    .catch(err => res.status(400).json("Error: " + err));
});

// GET a specific quiz by ID
router.route("/:id").get((req, res) => {
  Quiz.findById(req.params.id)
    .then(quiz => res.json(quiz))
    .catch(err => res.status(400).json("Error: " + err));
});

// DELETE a quiz by ID
router.route("/:id").delete((req, res) => {
  Quiz.findByIdAndDelete(req.params.id)
    .then(() => res.json("Quiz deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// UPDATE a quiz by ID
router.route("/:id").put((req, res) => {
  Quiz.findById(req.params.id)
    .then(quiz => {
      if (req.body.title !== undefined) quiz.title = req.body.title;
      if (req.body.description !== undefined) quiz.description = req.body.description;
      if (req.body.questions !== undefined) quiz.questions = req.body.questions;

      quiz.save()
        .then((updatedQuiz) => res.json(updatedQuiz))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

