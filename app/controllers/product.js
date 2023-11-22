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

    async update (req, res) {
        const id = req.params.id;
      
        await productModel.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Product was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating product with id=" + id
            });
          });
      },
};