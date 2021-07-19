import express from "express";
import useCases from "../../useCases/index.js";
const router = express.Router();

router.get("", async (req, res) => {
	const { error, value } = await useCases.ProductsService.getProductsList();
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.post("", async (req, res) => {
  let { error, value } = await useCases.ProductsService.createProduct(
    req.body.id,
    req.body.productName,
    req.body.productPrice,
    req.body.productManufacturer
  );
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

export default router;
