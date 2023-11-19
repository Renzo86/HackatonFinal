module.exports = (sequelize, Sequelize) => {
    const SaleDetail = sequelize.define("sale_detail", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idSale: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          idProduct: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          /*IGV: {
            type: Sequelize.DECIMAL(8,2)
          },
          valSale: {
            type: Sequelize.DECIMAL(8,2),
            allowNull: false
          },
          valIGV: {
            type: Sequelize.DECIMAL(8,2)
          },
          valSubTot: {
            type: Sequelize.DECIMAL(8,2),
            allowNull: false
          },*/
          valTotal: {
            type: Sequelize.DECIMAL(8,2),
            allowNull: false
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