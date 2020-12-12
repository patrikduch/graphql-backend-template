import connection from './connection.json';
import { Sequelize } from 'sequelize-typescript';

export default connection.isDev
	? new Sequelize(
			connection.prod.databaseName,
			connection.prod.username,
			connection.prod.password,
			{
				dialect: 'mysql',
				dialectModule: require('mysql2'),
				host: connection.prod.host
			}
	  )
	: new Sequelize(
		connection.dev.databaseName,
		connection.dev.username,
		connection.dev.password,
		{
			dialect: 'mysql',
			dialectModule: require('mysql2'),
			host: connection.dev.host
		}
  );
