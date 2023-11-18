module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idTypIdeDoc: {
            type: Sequelize.INTEGER
          },
          nroIdeDoc: {
            type: Sequelize.STRING
          },
          names: {
            type: Sequelize.STRING
          },
          firstName: {
            type: Sequelize.STRING
          },
          lastName: {
            type: Sequelize.STRING
          },
          email: {
            type: Sequelize.STRING
          },
          phone: {
            type: Sequelize.STRING
          },
          password: {
            type: Sequelize.STRING
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