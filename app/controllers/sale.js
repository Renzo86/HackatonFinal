const db = require("../models");
const Sale = db.sale;
const Detail = db.saleDetail;
const User = db.user;
const Product = db.product;

const { Op } = require("sequelize");

// Todas las compras del usuario
exports.findAll = async (req, res) => {
  const { id } = req.params;
  Sale.findAll({
    where: {
      idUser: id
    }
}
  ).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error ocurred while retrieving sales."
    });
  });
};

// consulta de la compra
exports.saleCab = async (req, res) => {
  const { id } = req.params;
  Sale.findOne({
    where: {
        id,
    },
    attributes: ['id', 'idUser','mtoTotal','tokenCulqiUser','tokenCulqiOrder','createdAt']
}
  ).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error ocurred while retrieving sales."
    });
  });
};

// consulta compras pendientes
exports.saleCabPendiente = async (req, res) => {
  const { id } = req.params;
  Sale.findAll({
    where: {
      idUser: id,
      tokenCulqiUser: null
    },
    attributes: ['id', 'idUser','mtoTotal','tokenCulqiUser','tokenCulqiOrder','createdAt']
}
  ).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error ocurred while retrieving sales."
    });
  });
};

// consulta compras completadas
exports.saleCabCompletado = async (req, res) => {
  const { id } = req.params;
  Sale.findAll({
    where: {
      idUser: id,
        tokenCulqiUser: {
          [Op.not]: null
        }
    },
    attributes: ['id', 'idUser','mtoTotal','tokenCulqiUser','tokenCulqiOrder','createdAt']
}
  ).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error ocurred while retrieving sales."
    });
  });
};

// consulta detalle compras
exports.saleDet = async (req, res) => {
  const { id } = req.params;
  Detail.findAll({
    include: [
      { model: Product,
        attributes: ['id','idCategory','description'] 
      }
  ],
    where: {
      idSale: id
    }
}
  ).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error ocurred while retrieving sales det."
    });
  });
};