const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const cors = require('cors');

// Test DB
db.authenticate().then(() => console.log('Database connected...')).catch((err) => console.log('error: ', err));

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('INDEX'));

// Routes
app.use('/questions', require('./routes/questions'));
app.use('/users', require('./routes/users'));
app.use('/modules', require('./routes/modules'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
