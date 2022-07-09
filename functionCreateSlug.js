// Alur
// req.body.title -> Function Slugify = slugTitle
//
// const filterDataBase = mongooseModel.find({
//     slug: {
//         $regex : slugTitle,
//     }
// })
// slugAlready = filterDataBase.blog // return objext of array
//
// Jalankan function filtering(slugAlready, slugTitle)

//
export const Slugify = (title) => {
  return title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

// dummy data
const slugTitle = "halo-saya-geby";
const slugAlready = [
  {
    slug: "halo-saya-geby",
  },
  {
    slug: "halo-saya-geby-2",
  },
  // {
  //   slug: "halo-saya-geby-3",
  // },
  {
    slug: "halo-saya-geby-4",
  },
  {
    slug: "halo-saya-geby-5",
  },
];

// filtering(slugAlready, slugTitle);
// const Hasil = filtering(slugAlready, slugTitle);
// console.log(Hasil);

export const filtering = (slugAlready, slugTitle) => {
  const slugy = slugAlready.map((item, index) => {
    const split = item.slug.split(`${slugTitle}` == item.slug ? `${slugTitle}` : `${slugTitle}-`)[1];

    return split;
  });
  if (slugy[0] !== "") {
    return slugTitle;
  }

  if (slugy[0] == "") {
    slugy[0] = "1";
    const find = slugy.find((item, index) => {
      console.log(item, index + 1);
      if (index + 1 != item) {
        return index;
      }
    });
    if (find == undefined) {
      return `${slugTitle}-${slugy.length + 1}`;
    } else {
      const newInt = parseInt(find) - 1;
      return `${slugTitle}-${newInt}`;
    }
  }
};
