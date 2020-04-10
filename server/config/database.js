const path = require('path');

// Check for singleton
if (!global.hasOwnProperty('db')) {
	const Sequelize = require('sequelize');
	let sequelize = null;

	// Heroku setup
	if (process.env.DATABASE_URL) {
		sequelize = new Sequelize(process.env.DATABASE_URL, {
			dialect: 'postgres',
			protocol: 'postgres',
			logging: true //false
		});
	} else {
		// Local setup
		sequelize = new Sequelize('for-the-birds', 'postgres', 'password', {
			host: 'localhost',
			dialect: 'postgres',

			pool: {
				max: 5,
				min: 0,
				acquire: 30000,
				idle: 10000
			}
		});
	}

	global.db = {
		sequelize
		// User: sequelize.import(path.normalize(__dirname + '/../models/User')),
		// Module: sequelize.import(path.normalize(__dirname + '/../models/Module')),
		// Question: sequelize.import(path.normalize(__dirname + '/../models/Question'))
	};
}

module.exports = global.db;
