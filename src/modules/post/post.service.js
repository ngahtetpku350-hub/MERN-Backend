import Post from "./post.model.js";

export const getAllPosts = async (search="") => {
  return await Post.find({
    $or: [
      {title: {$regex:search, $options: "i"}},
      {author: {$regex:search, $options: "i"}},
      {description: {$regex:search, $options: "i"}},
    ]
  }).sort({ createdAt: -1 }).populate("category").populate("username");
};
// .populate("username") for to show created user name
export const getPostById = async (id) => {
  return await Post.findById(id).populate("category").populate("username");
};

export const createPost = async (data) => {
  const { title, description,category,username } = data;

  return await Post.create(
    {title,
    description,
    username,
    category,
}
  )
};

// export const createPost = async (req, res) => {
//   try {
//     const { title, description, category } = req.body || {};

//     if (!title || !description || !category) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required"
//       });
//     }

//     // 1. Wrap fields inside an object {} for Mongoose
//     const post = await Post.create({
//       title,
//       description,
//       // category
//     });

//     // 2. Send a success response back to the client
//     return res.status(201).json({
//       success: true,
//       message: "Post created successfully",
//       post: post
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

export const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};
