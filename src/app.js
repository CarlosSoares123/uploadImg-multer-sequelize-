const express = require('express')
const cors = require('cors')
const path = require('path')

const database = require('../models')

const app = express()


const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  },
  methods: ['POST', 'GET'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(express.json())
app.use(express.static('public'))
app.use(cors(corsOptions))
app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')))

const postRouter = require('./routes/index')
app.use('/api', postRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
