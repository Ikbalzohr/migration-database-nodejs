import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const Address = new Schema({
  street: String,
  city: String,
});

const Category = new Schema({
  name: String,
  slug: String,
});

const UserChild = new Schema({
  nama: String,
  umur: Number,
});

const User = new Schema({
  name: String,
  age: {
    type: Number,
    min: 19,
  },
  brother: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  address: Address,
  category: Category,
  userChild: UserChild,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

//"User" juga merupakan nama collections
export default models.User || model("User", User);
