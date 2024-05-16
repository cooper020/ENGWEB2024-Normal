const mongoose = require('mongoose');
const Contrato = require("../models/contratos");



module.exports.list = () => {
    return Contrato
        .find()
        .exec();
}

module.exports.findById = id => {
    return Contrato
        .findOne({ idcontrato: id })
        .exec();
}

module.exports.findByEntidade = entidade => {
    return Contrato
        .find({ entidade_comunicante: entidade })
        .exec();
}

module.exports.findByTipo = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec();
}

module.exports.listEntidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .exec();
}

module.exports.listTipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .exec();
}
