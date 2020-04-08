const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Question = require('../models/Question');

router.get('/', (req, res) =>
	Question.findAll()
		.then((questions) => {
			res.status(200).send(questions);
		})
		.catch((err) => console.log(err))
);

router.get('/add', (req, res) => {
	const data = {
		value: 'What is the airspeed velocity of an unladen swallow?',
		answer: 'Not sure',
		module_id: 1
	};

	let { value, answer, module_id } = data;

	// Insert
	Question.create({
		value,
		answer,
		module_id
	})
		.then((question) => res.redirect('/questions'))
		.catch((err) => console.log(err));
});

module.exports = router;
