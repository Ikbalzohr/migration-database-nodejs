import dataBase from "./dataBase.js";
import User from "./model.js";
import Userdua from "./model22.js";

dataBase();

// user2();
async function user2() {
  try {
    const user2dua = new Userdua({
      name: "Ikbal 22",
      city: "buol",
      brother: ["62a0af585a74bad8f2b3144c", "62a1b3ad935c1af92d0007b0"],
    });
    // user2dua.brother = ["62a0af585a74bad8f2b3144c", "62a1b3ad935c1af92d0007b0"];
    await user2dua.save();
    console.log(user2dua);
  } catch (e) {}
}

// run();
async function run() {
  try {
    const user = new User({
      name: "ikbal4",
      age: 26,
      address: {
        street: "kali",
        city: "Buol",
      },
      category: {
        name: "Coin",
        slug: "slug123",
      },
      userChild: {
        nama: "ikbal_kcl",
        umur: 2,
      },
    });
    await user.save();
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

// find();
async function find() {
  try {
    const user = await Userdua.findById("62a33f725b3bb1cfb70ddf57").populate("brother");
    console.log(user);
  } catch (e) {}
}
