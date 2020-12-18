'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    /**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
    return Promise.all([
      queryInterface.addColumn('user', 'companyId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'company',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }),
    ]);


  },

  down: async (queryInterface, Sequelize) => {
     /**
      * Add reverting commands here.
	    * Return a promise to correctly handle asynchronicity.
     */
    return Promise.all([
      queryInterface.removeColumn('user', 'companyId'),
    ]);
  }
};
