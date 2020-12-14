'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return Promise.all([
      queryInterface.addColumn(
      { tableName: "User" },
              "companyId",
              {
                type: Sequelize.INTEGER,
                references: {
                  model: "Company",
                  key: "id"
                }
              }
            )
    ]);


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
