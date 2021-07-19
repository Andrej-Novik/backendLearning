import ProductsService from "./productsService/index.js";

class UseCases {
  ProductsService;
  constructor() {
    this.ProductsService = ProductsService;
  }
}

export default new UseCases();
