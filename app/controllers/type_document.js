
const db = require("../models");
const Type_document = db.typeDocument;

// Create and Save a new Type document
exports.create = (req, res) => {
    // Validate request
    if (!req.body.description) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Role
    const type_document = {
      description: req.body.description,
      abbreviation: req.body.abbreviation,
    };

    // Save Role in the database
    Type_document.create(type_document)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Type document."
        });
      });
};

exports.findAll = (req, res) => {

    Type_document.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving type document."
      });
    });
};