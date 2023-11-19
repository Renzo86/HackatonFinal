const culquiController = require("../controllers/culqi");
module.exports = function(app) {   
    app.post("/api/culqi/test", culquiController.test);        
};