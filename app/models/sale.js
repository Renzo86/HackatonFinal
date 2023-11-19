module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("sale", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idUser: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          idTypDoc: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          serie: {
            type: Sequelize.STRING(4)
          },
          number: {
            type: Sequelize.STRING(8)
          },
          /*mtoSale: {
            type: Sequelize.DECIMAL(8, 2),
            allowNull: false
          },
          mtoIGV: {
            type: Sequelize.DECIMAL(8, 2),
            allowNull: false
          },
          mtoSubTot: {
            type: Sequelize.DECIMAL(8, 2),
            allowNull: false
          },*/
          mtoTotal: {
            type: Sequelize.DECIMAL(8, 2),
            allowNull: false
          },
          tokenCulqiUser: {
            type: Sequelize.STRING,
            allowNull: true
          },
          tokenCulqiOrder: {
            type: Sequelize.STRING,
            allowNull: true
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