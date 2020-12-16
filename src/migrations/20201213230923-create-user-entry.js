'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     /**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
    return queryInterface.createTable('user', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
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
    return queryInterface.dropTable('user');
  }
};
