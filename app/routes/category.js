const controller = require("../controllers/category");
module.exports = function(app) {
  app.post("/api/category/insert", controller.insert);
  app.get("/api/category/get/:id", controller.get);
};