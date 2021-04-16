const server = require("../src/db/server");

async function testWithDb(fn) {
  let mongoose;

  beforeEach(async () => {
    mongoose = await server();

    const collectionsNames = await getCollections(mongoose);

    await clearCollection(mongoose, collectionsNames);
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  fn();
}

function getCollections(mongoose) {
  return new Promise((resolve) => {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      return resolve(names);
    });
  });
}

async function clearCollection(mongoose, collectionsNames) {
  for ({ name } of collectionsNames) {
    await mongoose.connection.collection(name).drop();
  }
}

module.exports = testWithDb;
