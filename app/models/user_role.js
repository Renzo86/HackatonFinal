module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("user_role", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          idUser: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          idRole: {
            type: Sequelize.INTEGER,
            allowNull: false
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