module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("sale", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idUser: {
            type: Sequelize.INTEGER
          },
          idTypDoc: {
            type: Sequelize.INTEGER
          },
          serie: {
            type: Sequelize.STRING
          },
          number: {
            type: Sequelize.STRING
          },
          mtoSale: {
            type: Sequelize.DECIMAL
          },
          mtoIGV: {
            type: Sequelize.DECIMAL
          },
          mtoSubTot: {
            type: Sequelize.DECIMAL
          },
          mtoTotal: {
            type: Sequelize.DECIMAL
          }
      },
      {
          timestamps: true,
          freezeTableName: true,
          tableName: 'sale',
          sequelize
      }
    );

    return Sale;
  };