const controller = require("../controllers/home");
module.exports = function(app) {
  app.get("/api/home/category", controller.findCategory); // Lista categorias
  app.get("/api/home/product", controller.findProduct); // Buscar categorias
  app.get("/api/home/product/:id", controller.findProductCat); // Lista productos
  app.get("/api/home/search/category/:data", controller.searchCategory); // Lista productos por categoria
  app.get("/api/home/search/product/:data", controller.searchProduct); // Buscar productos por descripcion
  app.get("/api/home/search/price/hight/:data", controller.priceProductMay); // Precio Mayor e igual productos
  app.get("/api/home/search/price/low/:data", controller.priceProductMen); // Precio Menor e igual productos
  app.get("/api/home/search/price/:num/:nom", controller.priceProductBet); // productos Entre 2 Precios 
};