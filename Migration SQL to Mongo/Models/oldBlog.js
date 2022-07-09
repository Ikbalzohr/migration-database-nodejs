import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const articles = new Schema({
  data: Array,
});

//"User" juga merupakan nama collections
export default models.articles || model("articles", articles);
