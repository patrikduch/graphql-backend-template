'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     * Return a promise to correctly handle asynchronicity.
     */
    await queryInterface.bulkInsert('projectdetail', [
      {
        "name": "Project name",
        "domain_url": "http://localhost:8081",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }]);

  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('projectdetail',[{id:1}]);
  }
};
