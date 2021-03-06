const express = require('express');
const router = express.Router();
const { sequelize: db } = require('../config/database');
const User = require('../models/User');

router.get('/', (req, res) =>
	User.findAll()
		.then((users) => {
			res.status(200).send(users);
		})
		.catch((err) => console.log(err))
);

module.exports = router;
