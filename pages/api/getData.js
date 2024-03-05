import dbConnect from "@/lib/dbConnect";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (req.query?.id) {
          const product = await Product.findById(req.query.id);
          if (!product) {
            return res
              .status(404)
              .json({ success: false, message: "Product not found" });
          }
          return res.status(200).json({ success: true, data: product });
        } else {
          const products = await Product.find({});
          res.status(200).json({ success: true, data: products });
        }
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      break;
  }
}
