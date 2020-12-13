'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Company', [
      {
        "name": "Company 1",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },

      {
        "name": "Company 2",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },

      {
        "name": "Company 3",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    
    
    
    ])

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
