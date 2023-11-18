module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idTypIdeDoc: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          nroIdeDoc: {
            type: Sequelize.STRING,
            allowNull: false
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          lastName: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          phone: {
            type: Sequelize.STRING,
            allowNull: false
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false
          }
      },
      {
          timestamps: true,
          freezeTableName: true,
          tableName: 'user',
          sequelize
      }
    );

    return User;
  };