migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7t3hq0jalmsy34z");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "7t3hq0jalmsy34z",
    "created": "2022-12-09 14:10:06.238Z",
    "updated": "2022-12-10 09:56:03.611Z",
    "name": "jobs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "81uvjynd",
        "name": "job_title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "93lu0o9g",
        "name": "annual_compensation",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "gkndzhbd",
        "name": "years_of_experience",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 60
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
