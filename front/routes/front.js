const frontController = require("../controllers/front");
module.exports = function(app) {
    app.get("/", frontController.index);
    app.get("/cart", frontController.cart);
    app.get("/checkout", frontController.checkout);
    app.get("/success", frontController.success);
};
