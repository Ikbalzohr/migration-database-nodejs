import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const User2 = new Schema(
  {
    name: String,
    city: String,
    brother: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // createdAt: {
    //   type: Date,
    //   default: () => Date.now(),
    // },
    // updatedAt: {
    //   type: Date,
    //   default: () => Date.now(),
    // },
  },
  {
    timestamps: true,
  }
);

//"User" juga merupakan nama collections
export default model("User2", User2);
