var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos');

/* Listar os contratos (R) */
router.get('/', function (req, res) {
Contrato.list()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error));  
});

/* Consultar um Contrato (R) */
router.get('/:id', function (req, res) {
    Contrato.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro));
});

router.get('/', function (req, res) {
    if (req.query.entidade) {
        Contrato.findByEntidade(req.query.entidade)
            .then(data => res.status(200).jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    } else if (req.query.tipo) {
        Contrato.findByTipo(req.query.tipo)
            .then(data => res.status(200).jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    } else {
        Contrato.list()
            .then(data => res.status(200).jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    }
});

router.get('/entidades', function (req, res) {
    Contrato.listEntidades()
        .then(data => res.status(200).jsonp(data))
        .catch(error => res.status(500).jsonp(error));
});

router.get('/tipos', function (req, res) {
    Contrato.listTipos()
        .then(data => res.status(200).jsonp(data))
        .catch(error => res.status(500).jsonp(error));
});

router.post('/', function (req, res) {
    Contrato.insert(req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(erro => res.jsonp(erro));
});

router.delete('/:id', function (req, res) {
    Contrato.remove(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro));
});

router.put('/:id', function (req, res) {
    Contrato.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(error => res.jsonp(error));
});




module.exports = router;
