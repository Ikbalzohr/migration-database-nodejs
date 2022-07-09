import mongoose from "mongoose";

const PORT = process.env.PORT || 4000;
const dbName = "MongooseBuilder";
const mongoAtlasUri = `mongodb+srv://ikbalzohr:atlas@cluster0.f4kio.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export default async function dataBase() {
  try {
    // connect to the MongoDb cluster
    mongoose.connect(
      mongoAtlasUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("Midleware mongoose telah koneksi...")
    );
  } catch (e) {
    console.log("could not connect...");
  }

  const db = mongoose.connection;
  db.on("error", (err) => console.log(`Koneksi error. rincian : ${err}`));
  db.once("open", () => console.log("Terkoneksi dengan DataBase!"));
}
