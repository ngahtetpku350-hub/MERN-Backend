import Post from "./post.model.js";

export const getAllPosts = async () => {
  return await Post.find().sort({ createdAt: -1 }).populate("category");
};

export const getPostById = async (id) => {
  return await Post.findById(id).populate("category");
};

export const createPost = async (data) => {
  return await Post.create(data);
};

export const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};
