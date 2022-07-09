import dataBase from "./Database/dbPogogulBackUp.js";
import { getUsers, getUserandUpdate } from "./createUserCollections.js";
import getArticles from "./createBlogCollections.js";
import addId from "./createRelations.js";

dataBase();

export default function app() {
  //* jalankan satu persatu
  //* step-1 "Model User Awal"
  //   getUsers();
  //* step-2 "Model Blog"
  //   getArticles();
  //* step-3 "Add id di dlm model Blog"
  //   addId();
  //* step-4 "many to many "
  //   getUserandUpdate();
}
