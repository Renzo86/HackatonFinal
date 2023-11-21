const path = require('path');
const categoryModel      = require('../models').category;
module.exports = {

    async insert(req, res) {
        return await categoryModel
            .create(req.body)
            .then(categoryModel => res.status(200).send(categoryModel))
            .catch(error => res.status(400).send(error))
    },
    
    async get(req, res) {
        try{            
            const id = req.params.id      
            const categories = id == 'all' ? await categoryModel.findAll({}) : await categoryModel.findAll({ where: {id: id}})             
            
            res.status(200).json({
                success: true,
                message: "Categorias cargadas correctamente.",
                data: categories
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