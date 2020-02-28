const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://lucas:OHnt8AMFXTNnBYhc@omnistack-4t7ay.mongodb.net/aircnc?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)