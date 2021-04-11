const mongoose = require("mongoose");

function mongoServer() {
  if (mongoose.connection.readyState != 0) {
    return mongoose;
  }

  mongoose.connect(
    process.env.MONGODB_URL ||
      "mongodb://localhost/controle-conta-corrente-bancaria",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );

  return new Promise((resolve) => {
    mongoose.connection.on("open", function (ref) {
      return resolve(mongoose);
    });
  });
}

module.exports = mongoServer;
