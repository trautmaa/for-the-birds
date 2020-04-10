const Sequelize = require('sequelize');
const { sequelize: db } = require('../config/database');

const Module = db.define('module', {
	name: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.STRING
	},
	user_id: {
		type: Sequelize.INTEGER
	}
});

module.exports = Module;
