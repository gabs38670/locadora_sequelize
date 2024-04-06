const express = require ('express')
const exphbs = require ('express-handlebars')

const app = express()

const conn = require ('./db/conn')

const controle = require('../src/controllers/controle')

const rota = require ('./router/rota')

app.engine('handlebars' , exphbs.engine())
app.set('view engine' , 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true,
}),
)

app.use(express.json())

app.use(express.static('public'))

app.use (rota)


conn
  .sync()
  .then(() => {
    app.listen(5000)
  })
  .catch((err) => console.log(err))