'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     /**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
    return await queryInterface.bulkInsert('position', [
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
    
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
	   * Return a promise to correctly handle asynchronicity.
     */
    return Promise.all[
      queryInterface.bulkDelete('position')
    ];
  }
};
