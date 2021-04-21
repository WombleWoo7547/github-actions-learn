const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan());

app.get('/', (req, res) => {
	res.json({
		msg: 'HELLO WORLD 👋🌍!!',
	});
});

app.listen(3000, () => console.log('Listening at 3000'));
