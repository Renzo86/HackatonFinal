module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          description: {
            type: Sequelize.STRING
          }
      },
      {
          timestamps: true,
          freezeTableName: true,
          tableName: 'category',
          sequelize
      }
    );

    return Category;
  };