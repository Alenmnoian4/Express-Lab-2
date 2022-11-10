let express = require('express');
let app = express();
app.get('/greeting/', (request, response) => {
	response.send('Hello, Alen');
});
app.get('/greeting/:name', (request, response) => {
	response.send(`Hello, ${request.params.name}`);
});
app.listen(3000);