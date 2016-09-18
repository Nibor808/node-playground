import express from 'express'
import exhbs from 'express-handlebars'
import env from 'node-env-file'
import bodyParser from 'body-parser'

env('.env', {logger: console})

const app = express()

const PORT = process.env.PORT

app.use( express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({extended:true}))

app.set('views', `${__dirname}/src/views`)
app.engine('.hbs', exhbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: `${app.get('views')}/layouts`,
  partialsDir: `${app.get('views')}/partials`,

  helpers: {
    ifGreater: require('./src/helpers/ifGreater.js')
  }
}))

app.set('view engine', '.hbs')

require('./src/routes/root')(app)

app.listen(PORT, function() {
  console.log(`listening on ${PORT}`)
})
