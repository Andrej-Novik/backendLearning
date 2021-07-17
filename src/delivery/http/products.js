import express from "express";
const router = express.Router();

let error = undefined
const value = [
	{
		id: 1,
		productName: "iphone 5",
		productPrice: 25,
		productManufacturer : "Apple"
	},
	{
		id: 2,
		productName: "samsung a50",
		productPrice: 15,
		productManufacturer : "Samsung "
	},
	{
		id: 3,
		productName: "xiaomi redmi note 9",
		productPrice: 30,
		productManufacturer : "Xiaomi"
	}
]

router.get("", async (req, res) => {
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});


router.post("", async (req, res) => {
	if (Number(req.body.id) && String(req.body.productName) && Number(req.body.productPrice) && String(req.body.productManufacturer)) {
		value.push(req.body)
	}
	else {
		error = "Unvalid data"
	}

  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

export default router;