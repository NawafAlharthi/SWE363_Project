const mongoose = require("mongoose");

const studyPlanSchema = new mongoose.Schema({
  subjects: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      topics: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
          },
          allocatedTime: { // Time in minutes
            type: Number,
            required: true,
            min: 0,
          },
          day: {
            type: String,
            required: true,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          },
          priority: {
            type: String,
            required: true,
            enum: ['Low', 'Medium', 'High'],
          },
          completed: {
            type: Boolean,
            default: false,
          },
        }
      ],
      totalAllocatedTime: { // Time in minutes
        type: Number,
        required: true,
        min: 0,
      },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("StudyPlan", studyPlanSchema);
