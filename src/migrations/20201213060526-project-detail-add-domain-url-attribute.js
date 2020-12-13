'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
      { tableName: "projectdetail" },
      
              "domain_url",
              {
                type: Sequelize.STRING,
                allowNull: false,
              }
            )
          ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        "projectdetail",
        "domain_url"
      )
    ]);
  }
};
