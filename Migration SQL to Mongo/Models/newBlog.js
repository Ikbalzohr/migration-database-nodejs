import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const Blog = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageBlog: {
      type: String,
    },

    mainPost: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    commentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    slug: {
      type: String,
      lowercase: true,
    },
    old_userId: String,
  },
  {
    timestamps: true,
  }
);

//"Blog" juga merupakan nama collections
export default models.Blog || model("Blog", Blog);
