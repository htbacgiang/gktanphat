import connectDB from "../../../lib/dbConnect";
import Products from "../../../models/Product";
import auth from "../../../middleware/auth";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
    case "POST":
      await createProduct(req, res);
      break;
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Products.find();

    res.json({
      status: "success",
      result: products.length,
      products,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await auth(req, res);
    if (result.role !== "admin")
      return res.status(400).json({ err: "Authentication is not valid." });

    const {
      product_id,
      title,
      description,
      meta,
      slug,
      content,
      category,
      images,
      loaike,
      chieucao,
      chieudai,
      dorongmam,
      sotang,
      mausac,
    } = req.body;

    if (
      !product_id ||
      !title ||
      !price ||
      !meta ||
      !slug ||
      !description ||
      !content ||
      category === "all" ||
      !loaike ||
      !chieucao ||
      !chieudai ||
      !dorongmam ||
      !sotang ||
      !mausac ||
      images.length === 0
    )
      return res.status(400).json({ err: "Please add all the fields." });

    const product = await Products.findOne({ product_id });
    if (product) return res.status(400).json({ err: "Sản phẩm đã tồn tại" });

    const newProduct = new Products({
      title: title.toLowerCase(),
      description,
      slug,
      meta,
      content,
      category,
      images,
      loaike,
      chieucao,
      chieudai,
      dorongmam,
      sotang,
      mausac,
    });

    await newProduct.save();

    res.json({ msg: "Success! Created a new product" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
