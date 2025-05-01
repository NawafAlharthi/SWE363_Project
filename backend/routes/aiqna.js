const router = require("express").Router();
const AIQnA = require("../models/AIQnA");
const { generateAIResponse } = require("../config/openai");
const rateLimiterMiddleware = require("../config/rateLimiter");

// Apply rate limiting to all routes
router.use(rateLimiterMiddleware);

// GET all AI QnA pairs
router.route("/").get(async (req, res) => {
  console.log("GET /api/aiqna - Fetching all QnAs");
  try {
    const qnas = await AIQnA.find()
      .sort({ createdAt: -1 })
      .limit(50);
    console.log(`Found ${qnas.length} QnAs`);
    res.json(qnas);
  } catch (err) {
    console.error("Error in GET /api/aiqna:", err);
    res.status(400).json({ error: "Error fetching QnAs: " + err.message });
  }
});

// ADD a new AI QnA pair
router.route("/add").post(async (req, res) => {
  console.log("POST /api/aiqna/add - Request body:", req.body);
  try {
    const { question, subject } = req.body;
    
    if (!question) {
      console.log("Question is missing in request");
      return res.status(400).json({ error: "Question is required" });
    }

    console.log("Generating AI response for question:", question);
    // Generate AI response
    const answer = await generateAIResponse(question);
    console.log("AI response generated:", answer);

    const newQnA = new AIQnA({
      question,
      answer,
      subject
    });

    await newQnA.save();
    console.log("New QnA saved successfully");
    res.json(newQnA);
  } catch (err) {
    console.error("Error in POST /api/aiqna/add:", err);
    res.status(400).json({ error: "Error adding QnA: " + err.message });
  }
});

// Update feedback for a QnA
router.route("/:id/feedback").post(async (req, res) => {
  console.log("POST /api/aiqna/:id/feedback - Request:", { id: req.params.id, body: req.body });
  try {
    const { isHelpful } = req.body;
    const qna = await AIQnA.findById(req.params.id);

    if (!qna) {
      console.log("QnA not found with id:", req.params.id);
      return res.status(404).json({ error: "QnA not found" });
    }

    if (isHelpful) {
      qna.feedback.helpful += 1;
    } else {
      qna.feedback.notHelpful += 1;
    }

    await qna.save();
    console.log("Feedback updated successfully");
    res.json(qna);
  } catch (err) {
    console.error("Error in POST /api/aiqna/:id/feedback:", err);
    res.status(400).json({ error: "Error updating feedback: " + err.message });
  }
});

// Delete a QnA
router.route("/:id").delete(async (req, res) => {
  console.log("DELETE /api/aiqna/:id - Request:", { id: req.params.id });
  try {
    const qna = await AIQnA.findById(req.params.id);
    
    if (!qna) {
      console.log("QnA not found with id:", req.params.id);
      return res.status(404).json({ error: "QnA not found" });
    }

    await qna.deleteOne();
    console.log("QnA deleted successfully");
    res.json({ message: "QnA deleted successfully" });
  } catch (err) {
    console.error("Error in DELETE /api/aiqna/:id:", err);
    res.status(400).json({ error: "Error deleting QnA: " + err.message });
  }
});

module.exports = router;

