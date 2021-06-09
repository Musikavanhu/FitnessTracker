const mongoose = require("mongoose");
const schema = mongoose.schema;
const WorkoutSchema = new schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
        },
        name: {
          type: String,
          trim: true,
        },
        duration: Number,
        weight: {
          type: Number,
          default: 0
        },
        reps: {
          type: Number,
          default: 0
        },
        sets: {
          type: Number,
          default: 0
        },
        distance: {
          type: Number,
          default: 0
        }
      }
    ],
    totalDuration: {
      type: Number,
      default: 0,
    }
  
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;
  