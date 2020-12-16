'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
    return Promise.all([
      queryInterface.sequelize
      .query("UPDATE User SET companyId=1 WHERE id=1"),

      queryInterface.sequelize
      .query("UPDATE User SET companyId=1 WHERE id=2"),

      queryInterface.sequelize
      .query("UPDATE User SET companyId=2 WHERE id=3"),
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
      * Add reverting commands here.
	    * Return a promise to correctly handle asynchronicity.
     */
  }
};
