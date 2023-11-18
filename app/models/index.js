const config = require("../config/db.js");
    const Sequelize = require("sequelize");
    const sequelize = new Sequelize(
      config.DB,
      config.USER,
      config.PASSWORD,
      {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
          max: config.pool.max,
          min: config.pool.min,
          acquire: config.pool.acquire,
          idle: config.pool.idle
        }
      }
    );
    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.sequelize = sequelize;
    
    /*MODELOS */
    db.typeIdentityDocument = require("./type_identity_document.js")(sequelize, Sequelize);
    db.typeDocument = require("./type_document.js")(sequelize, Sequelize);
    db.user = require("./user.js")(sequelize, Sequelize);
    db.role = require("./role.js")(sequelize, Sequelize);
    db.userRole = require("./user_role.js")(sequelize, Sequelize);
    db.category = require("./category.js")(sequelize, Sequelize);
    db.product = require("./product.js")(sequelize, Sequelize);
    db.sale = require("./sale.js")(sequelize, Sequelize);
    db.saleDetail = require("./sale_detail.js")(sequelize, Sequelize);

    /*RELACIONES*/
    db.user.belongsTo(db.typeIdentityDocument, {      
      foreignKey: "idTypIdeDoc",
    });
    db.userRole.belongsTo(db.user, {      
      foreignKey: "idUser",
    });
    db.userRole.belongsTo(db.role, {    
      foreignKey: "idRole",
    });   
    db.product.belongsTo(db.category, {    
      foreignKey: 'idCategory',
    });
    db.sale.belongsTo(db.typeDocument, {
      foreignKey: "idTypDoc",
    });
    db.sale.belongsTo(db.user, {
      foreignKey: "idUser",
    });
    db.saleDetail.belongsTo(db.sale, {
      foreignKey: "idSale",
    });
    db.saleDetail.belongsTo(db.product, {
      foreignKey: "idProduct",
    });

    module.exports = db;
