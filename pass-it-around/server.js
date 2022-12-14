require("dotenv").config()

const { request, response } = require("express")


const express = require("express")
const app = express()


app.get("/", (request, response) => {
	response.send(`99 Bottles of beer on the wall
    <a href="/98">Take One Down & Pass it Around</a>`)
})

app.get("/0", (request, response) => {
	response.send(`0 Bottles of beer on the wall
    <a href="/">Start over</a>`)
})

app.get("/:number_of_bottles", (request, response) => {
	const allBeer = request.params.number_of_bottles
	const drinkBeer = allBeer - 1

	response.send(`${request.params.number_of_bottles} Bottles of beer on the wall.
    <a href="/${drinkBeer}">Take One Down & Pass it Around</a>`)
})

// Port
app.listen(process.env.PORT, () => {
	console.log("listening in port 3005")
})