	
	const express = require("express");
	const { getJson, getsJson, postJson, putJson, deleteJson } = require("../npm/index.js");
	//const { getJson, postJson, putJson, deleteJson } = require("naxlowdb"); /* Librería npm */
	const body = require('body-parser')
	
	const app = express()
	app.use(body.json())

	app.get('/getsJson', async(req, res) => {
		const datos = await getsJson()
		await res.send(datos)
	})

	app.post('/', async(req, res) => {
		await postJson(req.body)
		await res.send()
	})
	.put('/', async(req, res) => {
		await putJson(req.body)
		await res.send()
	})
	.delete('/', async(req, res) => {
		await deleteJson(req.body)
		await res.send()
	})

	app.use(express.static(__dirname))

	app.listen(process.env.PORT || 3000, () => {
	  console.log(`Example app listening at http://localhost:${3000}`)
	})