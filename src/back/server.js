const express = require('express');
const path = require('path');

const app = express();

// Server static content for the front end.
app.use(express.static('build'));
// Serve the root html file so direct access to nested routes is possible.
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../build/index.html'))
});
const port = process.env.PORT || 3000;
app.listen(port , () => console.log(`Listening on port ${port}`));
