require("dotenv").config()

const express = require("express")
const app = express()

app.get("/greeting", (request, response) => {
	response.send("Hello, stranger")
})

app.get("/greeting/:name", (request, response) => {
	response.send(`What's up ${request.params.name}`)
})

app.get("/tip/:total/:tipPercentage", (request, response) => {

	const total = parseInt(request.params.total)
	const tipPercentage = parseInt(request.params.tipPercentage)
	const tip = .01
	response.send(`tip total ${(tipPercentage * tip) * total}`)
})


// 8 ball
app.get("/magic/:question", (request, response) => {
	const magic = [
			"It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes definitely",
			"You may rely on it",
			"As I see it yes",
			"Most likely",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Outlook not so good",
			"Very doubtful",
	]

	const random = magic[Math.floor(Math.random() * magic.length)]

	response.send(`Question: ${request.params.question}?
	<h1>${random}</h1>`)
})


// Port
app.listen(process.env.PORT, () => {
	console.log("listening in port 3000")
})