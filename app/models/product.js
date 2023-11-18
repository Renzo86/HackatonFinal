module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idCategory: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          description: {
            type: Sequelize.STRING,
            allowNull: false
          },
          price: {
            type: Sequelize.DECIMAL(8,2),
            allowNull: false
          },
          stock: {
            type: Sequelize.INTEGER,
            allowNull: false
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