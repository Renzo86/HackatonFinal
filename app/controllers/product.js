const path = require('path');
const productModel      = require('../models').product;
module.exports = {

    async insert(req, res) {
        return await productModel
            .create(req.body)
            .then(productModel => res.status(200).send(productModel))
            .catch(error => res.status(400).send(error))
    },
    
    async get(req, res) {
        try{            
            const id = req.params.id      
            const products = id == 'all' ? await productModel.findAll({}) : await productModel.findAll({ where: {id: id}})             
            
            res.status(200).json({
                success: true,
                message: "Productos cargados correctamente.",
                data: products
            })

        }catch(error){            
            res.status(500).json({
                success: false,
                message: error,
                data: {}
            })
        }
    },
};