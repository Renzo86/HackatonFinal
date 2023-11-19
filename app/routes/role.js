const controller = require("../controllers/role");
module.exports = function(app) {
  app.post("/api/register/role", controller.create);
  app.get("/api/findAll/role", controller.findAll);
};