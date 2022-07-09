import oldBlog from "./Models/oldBlog.js";
import Blog from "./Models/newBlog.js";
import { Slugify } from "../functionCreateSlug.js";

export default async function getArticles() {
  const res = await oldBlog.find();

  const { data } = res[0];
  data.map((item, index) => {
    if (item.category_id == 1) {
      const category = Slugify("Coin News");
      newBlog(category);
    } else if (item.category_id == 2) {
      const category = Slugify("Coin News");
      newBlog(category);
    } else if (item.category_id == 3) {
      const category = Slugify("Press Releases");
      newBlog(category);
    } else if (item.category_id == 4) {
      const category = Slugify("Press Releases");
      newBlog(category);
    } else {
      const category = Slugify("Press Releases");
      newBlog(category);
    }

    function newBlog(category) {
      const blog = new Blog({
        title: item.title,
        imageBlog: item.image,
        mainPost: item.content,
        category: category,
        old_userId: item.user_id,
        slug: item.slug,
        createdAt: item.created_at,
        updatedAt: item.updated_at,
      });
      blog.save();
    }
  });
}
