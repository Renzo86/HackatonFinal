const controller = require("../controllers/product");
module.exports = function(app) {
  app.post("/api/product/insert", controller.insert);
  app.get("/api/product/get/:id", controller.get);
  app.post("/api/product/update/:id", controller.update);
};