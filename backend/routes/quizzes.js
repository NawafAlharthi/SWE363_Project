const router = require("express").Router();
const Quiz = require("../models/Quiz");
const OpenAI = require("openai");

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


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


// NEW AI GENERATION ENDPOINT
router.post("/generate", async (req, res) => {
  try {
    const { title, topic, numQuestions } = req.body;

    const prompt = `Generate a quiz with ${numQuestions} multiple choice questions about ${topic}.
      Each question must have 4 options and 1 correct answer. Format response as:
      {
        "questions": [
          {
            "question": "text",
            "options": ["1", "2", "3", "4"],
            "correctAnswer": 0
          }
        ]
      }`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const content = JSON.parse(completion.choices[0].message.content);
    
    if (!content.questions) {
      throw new Error("Invalid quiz format from AI");
    }

    const newQuiz = new Quiz({
      title,
      description: `AI-generated quiz about ${topic}`,
      questions: content.questions
    });

    const savedQuiz = await newQuiz.save();
    res.json(savedQuiz);
  } catch (err) {
    console.error("AI Generation Error:", err);
    res.status(500).json("Error: " + err.message);
  }
});

module.exports = router;


