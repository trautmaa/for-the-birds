// Connect to DB
const Sequelize = require('sequelize');
module.exports = new Sequelize('for-the-birds', 'postgres', 'password', {
	host: 'localhost',
	dialect: 'postgres',

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});
