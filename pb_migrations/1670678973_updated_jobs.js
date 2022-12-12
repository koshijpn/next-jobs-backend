migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eagnpwhl",
    "name": "minAnnualCompensation",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1000,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "misulbyr",
    "name": "maxAnnualCompensation",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1000,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnyghtyx",
    "name": "applicationInstructions",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eagnpwhl",
    "name": "min_annual_compensation",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1000,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "misulbyr",
    "name": "max_annual_compensation",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1000,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnyghtyx",
    "name": "application_instructions",
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
