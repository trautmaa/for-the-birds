const Sequelize = require('sequelize');
const db = require('../config/database');

const Question = db.define('question', {
	value: {
		type: Sequelize.STRING
	},
	answer: {
		type: Sequelize.STRING
	},
	module_id: {
		type: Sequelize.INTEGER
	}
});

module.exports = Question;
