const frontController = require("../controllers/front");
module.exports = function(app) {
    app.get("/", frontController.index);
    app.get("/login", frontController.login);
    app.get("/cart", frontController.cart);
    app.get("/checkout", frontController.checkout);
    app.get("/success", frontController.success);
    app.get("/signup", frontController.signup);
};
