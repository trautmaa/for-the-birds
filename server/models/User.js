const Sequelize = require('sequelize');
const { sequelize: db } = require('../config/database');

const User = db.define('user', {
	name: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	}
});

module.exports = User;
