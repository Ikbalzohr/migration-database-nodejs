import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const newUser = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: String,

    phone: Number,

    photo: String,

    bio: String,

    blogId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
    commentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    id_old: String,
  },
  {
    timestamps: true,
  }
);

export default models.newUser || model("newUser", newUser);
