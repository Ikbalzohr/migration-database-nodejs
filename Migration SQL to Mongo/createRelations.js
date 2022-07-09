import Blog from "./Models/newBlog.js";
import User from "./Models/newUser.js";

export default async function addId() {
  const oldUser = await User.find().select("_id id_old");
  const resFilt = oldUser.filter(async ({ _id, id_old }) => {
    const resBlog = await Blog.find({
      old_userId: id_old,
    });

    resBlog.map((item, index) => {
      item.userId = _id;
      item.save();
    });
  });
}
