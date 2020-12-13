'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projectdetail', [
      {
        "name": "Project name",
        "domain_url": "http://localhost:8081",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }]);

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
