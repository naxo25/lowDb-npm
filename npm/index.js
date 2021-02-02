
	const low = require('lowdb')
	const FileSync = require('lowdb/adapters/FileSync')
	const path = require('path')

	const express = require("express");
	const app = express()

	const adapter = new FileSync('items.json')
	const db = low(adapter)

	// Set some defaults (required if your JSON file is empty)
	db.defaults({ items: []})
	  .write()

	const getJson = async(id) => {
		let exits = await db.get('items').find({id}).value()
		return await exits
	}

	const getsJson = async() => {
		const items = await db.get('items').value()
		return items
	}
	const postJson = async(json) => {
		if (!await getJson(json.id)) {
			await db.get('items').push(json).write()
		}
	}
	const putJson = async(json) => {
		if (await getJson(json.id)) {
			await db.get('items').find({id: json.id}).assign({title: json.title}).write()
		} else {}
	}
	const deleteJson = async(json) => {
		if (await getJson(json.id))
			await db.get('items').remove({id: json.id}).write()
	}

	module.exports = {
		getJson,
		getsJson,
		postJson,
		putJson,
		deleteJson
	}