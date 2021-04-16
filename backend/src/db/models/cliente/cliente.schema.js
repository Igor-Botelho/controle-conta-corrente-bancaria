"use strict";

const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
  {
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
    cidade: { type: String, required: true },
    complemento: { type: String },
    contasBancarias: { type: Object },
    cpf: { type: String, required: true, unique: true },
    dataHoraCriacao: { type: Date, required: true },
    dataNascimento: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    endereco: { type: String, required: true },
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    telefone: { type: String, required: true },
    uf: { type: String, required: true },
  },
  { versionKey: false }
);

module.exports = clienteSchema;
