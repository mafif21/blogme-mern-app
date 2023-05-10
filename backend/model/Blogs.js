const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title must filled"],
    },
    image: {
      type: String,
      default: "default.jpg",
    },
    category: {
      type: String,
      required: [true, "Category must filled"],
    },
    author: String,
    content: String,
  },
  { timestamps: true }
);

blogsSchema.statics.all = async function () {
  try {
    const datas = await this.find({}).sort({ createdAt: -1 });
    return datas;
  } catch (error) {
    return new Error(error.message);
  }
};

const Blog = mongoose.model("Blog", blogsSchema);
module.exports = Blog;
