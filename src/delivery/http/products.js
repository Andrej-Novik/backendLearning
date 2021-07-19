import express from "express";
const router = express.Router();

let error = "";
const value = [
  {
    id: 1,
    productName: "iphone 5",
    productPrice: 25,
    productManufacturer: "Apple",
  },
  {
    id: 2,
    productName: "samsung a50",
    productPrice: 15,
    productManufacturer: "Samsung ",
  },
  {
    id: 3,
    productName: "xiaomi redmi note 9",
    productPrice: 30,
    productManufacturer: "Xiaomi",
  },
];

router.get("", async (req, res) => {
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.post("", async (req, res) => {
  if (
    typeof req.body.id === "number" &&
    typeof req.body.productName === "string" &&
    typeof req.body.productPrice === "number" &&
    typeof req.body.productManufacturer === "string"
  ) {
    value.push(req.body);
  } else {
    if (typeof req.body.id !== "number") {
      if (error) {
        error += ", id(the id must be a number)";
      }
      error = "Unvalid id(the id must be a number)";
    }
    if (typeof req.body.productName !== "string") {
      if (error) {
        error += ", product name(the name must be a string)";
      } else error = "Unvalid product name(the name must be a string)";
    }
    if (typeof req.body.productPrice !== "number") {
      if (error) {
        error += ", product price(the price must be a number)";
      } else error = "Unvalid product price(the price must be a number)";
    }
    if (typeof req.body.productManufacturer !== "string") {
      if (error) {
        error += ", product manufacturer(the manufacturer must be a string)";
      } else
        error =
          "Unvalid product manufacturer(the manufacturer must be a string)";
    }
  }

  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

export default router;
