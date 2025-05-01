const router = require("express").Router();
const Task = require("../models/Task");

// GET all tasks
router.route("/").get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json("Error: " + err));
});

// ADD a new task
router.route("/add").post((req, res) => {
  const { title, description, dueDate, priority, completed } = req.body;

  const newTask = new Task({
    title,
    description,
    dueDate,
    priority,
    completed: completed || false,
  });

  newTask.save()
    .then((savedTask) => res.json(savedTask))
    .catch(err => res.status(400).json("Error: " + err));
});

// GET a specific task by ID
router.route("/:id").get((req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json("Error: " + err));
});

// DELETE a task by ID
router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// UPDATE a task by ID
router.route("/:id").put((req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      // Update only provided fields
      if (req.body.title !== undefined) task.title = req.body.title;
      if (req.body.description !== undefined) task.description = req.body.description;
      if (req.body.dueDate !== undefined) task.dueDate = req.body.dueDate;
      if (req.body.priority !== undefined) task.priority = req.body.priority;
      if (req.body.completed !== undefined) task.completed = req.body.completed;

      task.save()
        .then((updatedTask) => res.json(updatedTask))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

