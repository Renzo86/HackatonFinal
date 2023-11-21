const controller = require("../controllers/sale");
module.exports = function(app) {
  app.get("/api/sale/:id", controller.findAll);
  app.get("/api/sale/:id/complete", controller.saleCabCompletado);
  app.get("/api/sale/:id/incomplete", controller.saleCabPendiente);
  app.get("/api/sale/head/:id", controller.saleCab);
  app.get("/api/sale/head/:id/detail", controller.saleDet);
};