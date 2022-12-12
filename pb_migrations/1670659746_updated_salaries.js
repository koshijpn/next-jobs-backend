migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t3hq0jalmsy34z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymhc9g5e",
    "name": "employer",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t3hq0jalmsy34z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymhc9g5e",
    "name": "company",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
