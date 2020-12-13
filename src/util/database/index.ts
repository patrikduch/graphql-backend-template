import connConfig from '../../config/config.json';
import { Sequelize } from 'sequelize-typescript';

export default new Sequelize(
			connConfig.development.database,
			connConfig.development.username,
			connConfig.development.password,
			{
				dialect: 'mysql',
				dialectModule: require('mysql2'),
				host: connConfig.development.host
			}
	  );
