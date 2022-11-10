const express = require('express');
const app = express();
app.get('/greeting/', (request, response) => {
	response.send('Hello, Alen');
});
app.get('/greeting/:name', (request, response) => {
	response.send(`Hello, ${request.params.name}`);
});
app.get('/tip/:total/:tipPercentage', (request, response) => {
	response.send(
		`${tipTotal(request.params.total, request.params.tipPercentage)}`
	);
});
function tipTotal(total, TipPercentage) {
	return total * (TipPercentage / 100);
}
app.listen(3002)