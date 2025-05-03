const router = require("express").Router();
const StudyPlan = require("../models/StudyPlan");

// GET all subjects in the study plan
router.get('/', async (req, res) => {
  try {
    const studyPlan = await StudyPlan.findOne();
    res.json({ subjects: studyPlan ? studyPlan.subjects : [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD a new subject
router.post('/add', async (req, res) => {
  try {
    const { subject } = req.body;
    if (!subject || !subject.name || !Array.isArray(subject.topics)) {
      return res.status(400).json({ error: 'Invalid subject data' });
    }
    // Calculate totalAllocatedTime
    subject.totalAllocatedTime = subject.topics.reduce((sum, t) => sum + Number(t.allocatedTime || 0), 0);
    let studyPlan = await StudyPlan.findOne();
    if (!studyPlan) {
      studyPlan = new StudyPlan({ subjects: [subject] });
    } else {
      studyPlan.subjects.push(subject);
    }
    await studyPlan.save();
    res.json(subject);
  } catch (err) {
    console.error('Add subject error:', err);
    res.status(400).json({ error: err.message });
  }
});

// EDIT a subject
router.put('/:id', async (req, res) => {
  try {
    const { subject } = req.body;
    if (!subject || !subject.name || !Array.isArray(subject.topics)) {
      return res.status(400).json({ error: 'Invalid subject data' });
    }
    subject.totalAllocatedTime = subject.topics.reduce((sum, t) => sum + Number(t.allocatedTime || 0), 0);
    const studyPlan = await StudyPlan.findOne();
    if (!studyPlan) return res.status(404).json({ error: 'Study plan not found' });
    const idx = studyPlan.subjects.findIndex(s => s._id.toString() === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Subject not found' });
    studyPlan.subjects[idx] = { ...subject, _id: studyPlan.subjects[idx]._id };
    await studyPlan.save();
    res.json(studyPlan.subjects[idx]);
  } catch (err) {
    console.error('Edit subject error:', err);
    res.status(400).json({ error: err.message });
  }
});

// DELETE a subject
router.delete('/:id', async (req, res) => {
  try {
    const studyPlan = await StudyPlan.findOne();
    if (!studyPlan) return res.status(404).json({ error: 'Study plan not found' });
    const idx = studyPlan.subjects.findIndex(s => s._id.toString() === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Subject not found' });
    studyPlan.subjects.splice(idx, 1);
    await studyPlan.save();
    res.json({ message: 'Subject deleted' });
  } catch (err) {
    console.error('Delete subject error:', err);
    res.status(400).json({ error: err.message });
  }
});

// TOGGLE subject active status
router.patch('/:id/toggle', async (req, res) => {
  try {
    const studyPlan = await StudyPlan.findOne();
    if (!studyPlan) return res.status(404).json({ error: 'Study plan not found' });
    const subject = studyPlan.subjects.id(req.params.id);
    if (!subject) return res.status(404).json({ error: 'Subject not found' });
    subject.active = !subject.active;
    await studyPlan.save();
    res.json(subject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// CREATE or REPLACE the study plan
router.route("/update").post(async (req, res) => {
  const { subjects } = req.body;
  try {
    await StudyPlan.deleteMany({});
    const newPlan = new StudyPlan({ subjects });
    await newPlan.save();
    res.json({ subjects: newPlan.subjects });
  } catch (err) {
    console.error('StudyPlan update error:', err);
    res.status(400).json({ error: err.message, details: err });
  }
});

// PATCH: Toggle completed for a topic (session)
router.patch('/:subjectId/topics/:topicId/toggle', async (req, res) => {
  try {
    const studyPlan = await StudyPlan.findOne();
    if (!studyPlan) return res.status(404).json({ error: 'Study plan not found' });
    const subject = studyPlan.subjects.id(req.params.subjectId);
    if (!subject) return res.status(404).json({ error: 'Subject not found' });
    const topic = subject.topics.id(req.params.topicId);
    if (!topic) return res.status(404).json({ error: 'Topic not found' });
    topic.completed = !topic.completed;
    await studyPlan.save();
    res.json(topic);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
