migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t3hq0jalmsy34z")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t3hq0jalmsy34z")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
