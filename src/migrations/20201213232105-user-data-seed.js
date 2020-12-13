'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('User', [
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
