import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    course: { type: String, ref: "CourseModel" },
    title: String,
    description: String,
    assigned_to: String,
    type: String,
    points: Number,
    assignment_group: String,
    shuffle_answers: Boolean,
    time_limit: Number,
    multiple_attempts: Boolean,
    number_of_attempts: Number,
    show_answers: Boolean,
    access_code: String,
    one_at_a_time: Boolean,
    webcam: Boolean,
    lock__after_answering: Boolean,
    due: String,
    available: String,
    until: String,
    published: Boolean,
    number_of_questions: Number,
    show_responses: Boolean,
    lock_answers: Boolean,
  },
  { collection: "quizzes" }
);

export default quizSchema;