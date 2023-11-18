module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("user_role", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idUser: {
            type: Sequelize.INTEGER
          },
          idRole: {
            type: Sequelize.INTEGER
          }
      },
      {
          timestamps: true,
          freezeTableName: true,
          tableName: 'user_role',
          sequelize
      }
    );

    return UserRole;
  };