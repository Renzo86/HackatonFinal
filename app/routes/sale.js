const controller = require("../controllers/sale");
module.exports = function(app) {
  app.get("/api/sale/:id", controller.findAll); // Todas las compras del usuario
  app.get("/api/sale/:id/complete", controller.saleCabCompletado); // consulta de la compra
  app.get("/api/sale/:id/incomplete", controller.saleCabPendiente); // consulta compras pendientes
  app.get("/api/sale/head/:id", controller.saleCab); // consulta compras completadas
  app.get("/api/sale/head/:id/detail", controller.saleDet); // consulta detalle compras
};