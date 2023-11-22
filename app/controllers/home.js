const db = require("../models");
const Product = db.product;
const Category = db.category;

const { Op } = require("sequelize");

// Lista categorias
exports.findCategory = async (req, res) => {
    Category.findAll({
        attributes: ['id', 'description']
  }
    ).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving Category."
      });
    });
  };

  // Buscar categorias
exports.searchCategory = async (req, res) => {
    const { data } = req.params;
    Category.findAll({
        where: {
            description: {
                [Op.substring]: data
              }
            },
        attributes: ['id', 'description']
  }
    ).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving Category."
      });
    });
  };

  // Lista productos
exports.findProduct= async (req, res) => {
    Product.findAll({
        attributes: ['id','idCategory','description','price','image']
  }
    ).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving Product."
      });
    });
  };

  // Lista productos por categoria
  exports.findProductCat= async (req, res) => {
    const { id } = req.params;
    Product.findAll({
        where: {
            idCategory: id,
        },
        attributes: ['id','idCategory','description','price','image']
  }
    ).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving Product."
      });
    });
  };

    // Buscar productos
    exports.searchProduct= async (req, res) => {
        const { data } = req.params;
        Product.findAll({
            where: {
            description: {
                [Op.substring]: data
              }
            },
            attributes: ['id','idCategory','description','price','image']
      }
        ).then(data => {
          res.send(data);
        }).catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error ocurred while retrieving Product."
          });
        });
      };

    // Precio Mayor productos
    exports.priceProductMay= async (req, res) => {
        const { data } = req.params;
        Product.findAll({
            where: {
                price: {
                [Op.gte]: data
              }
            },
            attributes: ['id','idCategory','description','price','image']
      }
        ).then(data => {
          res.send(data);
        }).catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error ocurred while retrieving Product."
          });
        });
      };

    // Precio Menor productos
    exports.priceProductMen= async (req, res) => {
        const { data } = req.params;
        Product.findAll({
            where: {
                price: {
                [Op.lte]: data
              }
            },
            attributes: ['id','idCategory','description','price','image']
      }
        ).then(data => {
          res.send(data);
        }).catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error ocurred while retrieving Product."
          });
        });
      };

    // Entre Precio  productos
    exports.priceProductBet= async (req, res) => {
        const { num } = req.params;
        const { nom } = req.params;
        Product.findAll({
            where: {
                price: {
                [Op.between]: [num,nom]
              }
            },
            attributes: ['id','idCategory','description','price','image']
      }
        ).then(data => {
          res.send(data);
        }).catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error ocurred while retrieving Product."
          });
        });
      };