migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfqxcnlm",
    "name": "location",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvsxs3py",
    "name": "employer",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfqxcnlm",
    "name": "location",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 10,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvsxs3py",
    "name": "employer",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 10,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
