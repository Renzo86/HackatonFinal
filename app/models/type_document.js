module.exports = (sequelize, Sequelize) => {
    const TypeDocument = sequelize.define("type_document", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          description: {
            type: Sequelize.STRING
          },
          abbreviation: {
            type: Sequelize.STRING
          }
      },
      {
          timestamps: true,
          freezeTableName: true,
          tableName: 'type_document',
          sequelize
      }
    );

    return TypeDocument;
  };