const controller = require("../controllers/type_document");
module.exports = function(app) {
  app.post("/api/register/type_document", controller.create);
  app.get("/api/findAll/type_document", controller.findAll);
};