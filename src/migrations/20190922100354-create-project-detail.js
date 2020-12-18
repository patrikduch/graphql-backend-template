'use strict';
module.exports = {
	/**
      * Add altering commands here.
      * Return a promise to correctly handle asynchronicity.
     */
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('projectdetail', {
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
	down: (queryInterface, Sequelize) => {
		 /**
          * Add reverting commands here.
	      * Return a promise to correctly handle asynchronicity.
        */
		return queryInterface.dropTable('projectdetail');
	}
};
