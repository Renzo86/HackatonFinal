module.exports = (sequelize, Sequelize) => {
    const SaleDetail = sequelize.define("sale_detail", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idSale: {
            type: Sequelize.INTEGER
          },
          idProduct: {
            type: Sequelize.INTEGER
          },
          quantity: {
            type: Sequelize.INTEGER
          },
          IGV: {
            type: Sequelize.DECIMAL
          },
          valSale: {
            type: Sequelize.DECIMAL
          },
          valIGV: {
            type: Sequelize.DECIMAL
          },
          valSubTot: {
            type: Sequelize.DECIMAL
          },
          valTotal: {
            type: Sequelize.DECIMAL
          }
      },
      {
          timestamps: true,
          freezeTableName: true,
          tableName: 'sale_detail',
          sequelize
      }
    );

    return SaleDetail;
  };