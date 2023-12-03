const express = require('express');
const app = express();

app.get('/home', (req, res) => {
	res.status(200).send('Welcome to my page');
});

app.listen(5000);



//console.log('Testing nodemon')
