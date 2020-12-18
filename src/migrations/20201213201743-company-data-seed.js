'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     /**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
    return await queryInterface.bulkInsert('Company', [
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
    
    
    
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
	   * Return a promise to correctly handle asynchronicity.
     */

    return Promise.all[
      queryInterface.bulkDelete('company')
    ];
  }
};
