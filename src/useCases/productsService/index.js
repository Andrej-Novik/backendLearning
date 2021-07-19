class ProductsService {
  res = {
    error: "",
    value: [
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
    ],
	};
	
  getProductsList = async () => {
    if (this.res.error) return { error: this.res.error };
    return { value: this.res.value };
	};
	
  createProduct = async (
    id,
    productName,
    productPrice,
    productManufacturer
  ) => {
    if (
      typeof id === "number" &&
      typeof productName === "string" &&
      typeof productPrice === "number" &&
      typeof productManufacturer === "string"
    ) {
      this.res.value.push({
        id,
        productName,
        productPrice,
        productManufacturer,
      });
    } else {
      if (typeof id !== "number") {
        if (this.res.error) {
          this.res.error += ", id(the id must be a number)";
        }
        this.res.error = "Unvalid id(the id must be a number)";
      }
      if (typeof productName !== "string") {
        if (this.res.error) {
          this.res.error += ", product name(the name must be a string)";
        } else
          this.res.error = "Unvalid product name(the name must be a string)";
      }
      if (typeof productPrice !== "number") {
        if (this.res.error) {
          this.res.error += ", product price(the price must be a number)";
        } else
          this.res.error = "Unvalid product price(the price must be a number)";
      }
      if (typeof productManufacturer !== "string") {
        if (this.res.error) {
          this.res.error +=
            ", product manufacturer(the manufacturer must be a string)";
        } else
          this.res.error =
            "Unvalid product manufacturer(the manufacturer must be a string)";
      }
    }

    if (this.res.error) return { error: this.res.error };
    return { value: this.res.value };
  };
}

export default new ProductsService();
