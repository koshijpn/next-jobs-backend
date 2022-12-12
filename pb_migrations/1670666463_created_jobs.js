migrate((db) => {
  const collection = new Collection({
    "id": "bxu8j01qpmyuucy",
    "created": "2022-12-10 10:01:03.128Z",
    "updated": "2022-12-10 10:01:03.128Z",
    "name": "jobs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6x2h5jet",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "xmhk8j8k",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "fkxassu2",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 10,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nvkia4ab",
        "name": "requirements",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 10,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bxu8j01qpmyuucy");

  return dao.deleteCollection(collection);
})
