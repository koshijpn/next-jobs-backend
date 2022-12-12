migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = "@request.auth.id = user.id"
  collection.deleteRule = "@request.auth.id = user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
