const mongoose = require('mongoose');
const url = process.env.DB || 'mongodb://localhost/codestudio';
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}

mongoose.connect(url, options, (err) => {
    if (err) {
        throw new Error('Unable to connect to the database');
    }
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;