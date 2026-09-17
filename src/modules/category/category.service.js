import Category from "./category.model.js";

const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const getAllCategories = async () => {
  return await Category.find().sort({ createdAt: -1 });
};

export const getCategoryById = async (id) => {
  return await Category.findById(id);
};

export const createCategory = async (data) => {
  const { name } = data;
  const existingCategory = Category.findOne({ name });
  if (!existingCategory) {
    throw new Error("Category already exists!");
  }
  const slug = generateSlug(name);
  return await Category.create({
    name,
    slug,
  });
};

export const updateCategory = async (id, data) => {
  const { name } = data;
  const slug = generateSlug(name);
  return await Category.findByIdAndUpdate(
    id,
    { name, slug },
    {
      new: true,
      runValidators: true,
    },
  );
};

export const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};
