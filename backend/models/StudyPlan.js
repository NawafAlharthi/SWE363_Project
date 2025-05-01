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

