'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
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
     /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
     */
    return Promise.all([
      queryInterface.removeColumn(
        "projectdetail",
        "domain_url"
      )
    ]);
  }
};
