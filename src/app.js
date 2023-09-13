const express = require('express');
const cors = require('cors');
const contactsRouter = require('./routes/contacts.router');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contactbook application.' });
});

app.use('/api/contacts', contactsRouter);

module.exports = app;
