# lowDb

Ejemplo y código de librería npm que hice para operaciones básicas en Jsons locales con lowDb.

### Pre-requisitos 📋
NodeJs https://nodejs.org/es/

## Para ejecutar la aplicación
```
cd ejemplo
npm i
npm run dev
```

## Instalación librería
```
npm i naxlowdb
```

const { getJson, postJson, putJson, deleteJson } = require("naxlowdb");
### Operaciones 

const getJson = async() => {
	const posts = db.get('posts').value()
	return await posts
}

const ejJson = { id, title, msj, etc } = datos de req.body o alguna función que hagas

const postJson = async(ejJson) => {
	db.get('posts').push(ejJson).write()
}
const putJson = async(ejJson) => {
	db.get('posts').find({id: ejJson.id}).assign({title: ejJson.title}).write()
}
const deleteJson = async(ejJson) => {
	db.get('posts').remove({id: ejJson.id}).write()
}

## Versionado 📌

Uso [GIT](https://git-scm.com/) para el versionado.
Puedes ver los comandos que uso [aqui](https://nacholabraweb.000webhostapp.com/docs/Tutoriales.html)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT)

Creado por Ignacio Labra