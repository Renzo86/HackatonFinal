const controller = require("../controllers/sale");
module.exports = function(app) {
  app.get("/api/sale/:id", controller.findOne);
};