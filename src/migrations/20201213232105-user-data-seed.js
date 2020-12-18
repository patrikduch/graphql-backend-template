'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     /**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
    await queryInterface.bulkInsert('user', [
      {
        "firstName": "Patrik",
        "surname": "Duch",
        "age": 27,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },

      {
        "firstName": "Michal",
        "surname": "Duch",
        "age": 41,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },

      {
        "firstName": "Petra",
        "surname": "Duchová",
        "age": 40,
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
      queryInterface.bulkDelete('user')
    ];
  }
};
