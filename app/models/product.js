module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idCategory: {
            type: Sequelize.INTEGER
          },
          description: {
            type: Sequelize.STRING
          },
          price: {
            type: Sequelize.DECIMAL
          },
          stock: {
            type: Sequelize.INTEGER
          }
      },
      {
          timestamps: true,          
          tableName: 'product',
          sequelize
      }
    );

    return Product;
  };