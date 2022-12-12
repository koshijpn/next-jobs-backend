migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t3hq0jalmsy34z")

  collection.name = "jobs"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t3hq0jalmsy34z")

  collection.name = "salaries"

  return dao.saveCollection(collection)
})
