'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

	 /**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
    return queryInterface.createTable('position', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
	 * Return a promise to correctly handle asynchronicity.
     */
	return queryInterface.dropTable('position');


  }
};
