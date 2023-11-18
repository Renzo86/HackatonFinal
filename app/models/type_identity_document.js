module.exports = (sequelize, Sequelize) => {
    const TypeIdentityDocument = sequelize.define("type_identity_document", {
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
          tableName: 'type_identity_document',
          sequelize
      }
    );

    return TypeIdentityDocument;
  };