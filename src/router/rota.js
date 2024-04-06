const express = require  ('express')
const router = express.Router()
const controle = require('../controllers/controle')

router.get('/', controle.home)

router.get('/clientes', controle.cliente)

router.post('/cliente/insertcliente', controle.clientes)

router.get('/cdc', controle.cad_cliente)

router.get('/veiculos', controle.veiculos)

router.post('/veiculo/insertveiculo', controle.addveiculo)

router.get('/cdv', controle.cad_veiculo)

router.get('/reserva', controle.reserva)

router.post('/reserva/insertreserva', controle.addreserva)

router.get('/cdr', controle.cad_reserva)

 module.exports = router