const db = require("../models");
const Sale = db.sale;

exports.findOne = async (req, res) => {
  const { id } = req.params;
    Sale.findOne({
      where: {
          id
      },
      attributes: ['id', 'idUser','mtoTotal','tokenCulqiUser','tokenCulqiOrder','createdAt'],
      include: [
        { model: sale_detail, as: 'detail',
          attributes: ['id', 'nombre','idProduct','quantity','valTotal'] 
        }
    ]
  }).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving sale."
      });
    });
};