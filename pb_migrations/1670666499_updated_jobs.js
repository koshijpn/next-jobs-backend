migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy")

  // remove
  collection.schema.removeField("zvsxs3py")

  return dao.saveCollection(collection)
})
