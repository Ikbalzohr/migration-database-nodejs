import oldUser from "./Models/oldUser.js";
import User from "./Models/newUser.js";
import Blog from "./Models/newBlog.js";

export const getUsers = async () => {
  const res = await oldUser.find();
  const { data } = res[0];

  data.map((item, index) => {
    const newUser = new User({
      name: item.name,
      email: item.email,
      password: item.password,
      token: item.remember_token,
      id_old: item.id,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
    });
    newUser.save();
  });
};

export const getUserandUpdate = async () => {
  const resUser = await User.find().select("_id");

  resUser.map(async ({ _id }) => {
    const idUser = _id;
    const resBlog = await Blog.find({
      userId: idUser,
    }).select("userId");
    const idBlogArray = resBlog.map((item) => item._id);
    const newUser = await User.findById(idUser);
    newUser.blogId = idBlogArray;
    await newUser.save();
  });
};
