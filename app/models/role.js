module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },      
      description: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
      {
          timestamps: true,
          freezeTableName: true,
          tableName: 'role',
          sequelize
      }
      );
  
    return Role;
  };