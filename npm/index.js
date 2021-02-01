
	const low = require('lowdb')
	const FileSync = require('lowdb/adapters/FileSync')
	const path = require('path')

	const express = require("express");
	const app = express()

	const adapter = new FileSync('items.json')
	const db = low(adapter)

	// Set some defaults (required if your JSON file is empty)
	db.defaults({ posts: [], user: {} })
	  .write()

	// Add a post
	db.get('posts')
	  // .push({ id: 1, title: 'lowdb is awesome'})
	  .write()

	// Set a user using Lodash shorthand syntax
	db.set('user.name', 'nacho')
	  .write()
	  
	// Increment count
	db.update('count', n => n + 1)
	  .write()

	const getJson = async() => {
		const posts = db.get('posts').value()
		return await posts
	}
	const postJson = async(json) => {
		db.get('posts').push(json).write()
	}
	const putJson = async(json) => {
		db.get('posts').find({id: json.id}).assign({title: json.title}).write()
	}
	const deleteJson = async(json) => {
		db.get('posts').remove({id: json.id}).write()
	}

	module.exports = {
		getJson,
		postJson,
		putJson,
		deleteJson
	}