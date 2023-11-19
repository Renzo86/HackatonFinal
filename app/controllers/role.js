
const db = require("../models");
const Role = db.role;

// Create and Save a new Role
exports.create = (req, res) => {
    // Validate request
    if (!req.body.description) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Role
    const role = {
      description: req.body.description,
    };

    // Save Role in the database
    Role.create(role)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Role."
        });
      });
};

exports.findAll = (req, res) => {

    Role.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving roles."
      });
    });
};