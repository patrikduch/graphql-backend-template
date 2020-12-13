'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Position', [
      {
        "name": "Position 1",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },

      {
        "name": "Position 2",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },

      {
        "name": "Position 3",
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
