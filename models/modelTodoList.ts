import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const TodoListModel = mongoose.model('TodoList', schema);