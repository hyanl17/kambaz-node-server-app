import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    quiz: { type: String, ref: "QuizModel" },
    type: String,
    title: String,
    points: Number,
    question: String,
    answer: String,
    choices: [String],

  },
  { collection: "questions" }
);

export default schema;