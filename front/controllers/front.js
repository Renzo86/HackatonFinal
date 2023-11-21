var path = require('path');
module.exports = {
    
    async index(req,res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'index.html') );
    },

    async login(req,res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'login.html') );        
    },

    async cart(req,res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'cart.html') );
    },

    async checkout(req, res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'checkout.html') );
    },

    async success(req, res) {
        res.sendFile(path.resolve(__dirname,'..', 'views', 'success.html') );
    }
}