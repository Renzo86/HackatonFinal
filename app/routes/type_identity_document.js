const controller = require("../controllers/type_identity_document");
module.exports = function(app) {
  app.post("/api/register/type_id_document", controller.create);
  app.get("/api/findAll/type_id_document", controller.findAll);
};