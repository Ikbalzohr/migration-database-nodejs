import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const users = new Schema({
  data: Array,
});

//"User" juga merupakan nama collections
export default models.users || model("users", users);
