# lowDb

Ejemplo y código de librería npm para uso de operaciones básicas en Jsons que se comportan como Bds con lowDb en el lado cliente.

### Pre-requisitos 📋
NodeJs https://nodejs.org/es/

## Para ejecutar la aplicación
```
cd ejemplo
npm i
npm run dev
```

## Instalar librería

[packete](https://www.npmjs.com/package/naxlowdb)
```
npm i naxlowdb
```

### Operaciones 

	# const { getsJson, postJson, putJson, deleteJson } = require("naxlowdb");

	const low = require('lowdb')
	const FileSync = require('lowdb/adapters/FileSync')

	const adapter = new FileSync('items.json')
	const db = low(adapter)

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
		} else {}
	}
	const putJson = async(json) => {
		if (await getJson(json.id)) {
			await db.get('items').find({id: json.id}).assign({title: json.title}).write()
		}
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

## Versionado 📌

Uso [GIT](https://git-scm.com/) para el versionado.
Puedes ver los comandos que uso [aqui](https://nacholabraweb.000webhostapp.com/docs/Tutoriales.html)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT)

Creado por Ignacio Labra