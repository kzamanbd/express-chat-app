// Import packages
const express = require('express');
const home = require('./routes');

// mongoose connection
const mongoose = require('mongoose');
try {
	mongoose.connect('mongodb+srv://kzaman:16724245@cluster0.t00ijp0.mongodb.net/').then(() => {
		console.log('Connected to MongoDB...');
	});
} catch (error) {
	console.log(error);
}

// Middleware
const app = express();
app.use(express.json());

// Routes
app.use('/', home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port http://localhost:${port}`));
