import Products from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json({ error: null, data: products });
  } catch (error) {
    res.json({ error: error.message, data: null });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await Products.create({
      name: name,
      description: description,
      price: price,
    });
    res.json({ error: null, data: product });
  } catch (error) {
    res.json({ error: error.message, data: null });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.query.id);
    if (!product) res.json({ error: "Product not found", data: null });
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    await product.save();
    res.json({ error: null, data: product });
  } catch (error) {
    res.json({ error: error.message, data: null });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const isDeleted = await Products.deleteOne({ _id: req.query.id });
    res.json({ error: null, data: "Data deleted." });
  } catch (error) {
    res.json({ error: error.message, data: null });
  }
};
