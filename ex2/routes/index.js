var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contratos');

/* GET home page. */
router.get('/', function(req, res, next) {
  Contrato.list()
    .then(function(contratos) {
      res.render('index', { title: 'Express', data: contratos });
    })
    .catch(function(err) {
      // Tratar o erro aqui
      console.error(err);
      res.status(500).send(err);
    });
});
router.get('/:id', function (req, res) {
  const id = req.params.id;

  Contrato.findById(id)
      .then(registo => {
          if (!registo) {
              return res.status(404).send("Registo não encontrado");
          }
          res.render('detalhes', { registo: registo });
      })
      .catch(erro => res.status(500).send("Erro ao processar a solicitação."));
});

module.exports = router;
