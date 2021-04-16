const server = require("../src/db/server");

const { cliente, conta, transacao } = require("./fixtures");

const { services } = require("../src/services");

async function seed() {
  const mongoose = await server();

  const collectionsNames = await getCollections(mongoose);

  await clearCollection(mongoose, collectionsNames);

  const [clienteCadastrado] = await services.cliente.cadastrar(cliente);

  const dadosConta = conta({ clienteId: clienteCadastrado._id });

  const [contaCadastrada] = await services.conta.cadastrar(dadosConta);

  await services.transacao.cadastrarTransacaoCredito(
    transacao.credito(contaCadastrada._id)
  );

  await services.transacao.cadastrarTransacaoCredito(
    transacao.debito(contaCadastrada._id)
  );

  mongoose.connection.close();
}

function getCollections(mongoose) {
  return new Promise((resolve) => {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      return resolve(names);
    });
  });
}

async function clearCollection(mongoose, collectionsNames) {
  if (collectionsNames) {
    for ({ name } of collectionsNames) {
      await mongoose.connection.collection(name).drop();
    }
  }
}

seed();
