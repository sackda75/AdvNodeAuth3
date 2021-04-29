require('dotenv').config({ path: './config.env' })
const express = require('express')
const app = express()
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

connectDB()

app.use(express.json())

app.get('/', (req, res, next) => {
	res.json({ Backend: 'Api Running' })
})

// Connecting Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))

// Error Handler Middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Running on port ${PORT}`.cyan))

process.on('unhandledRejection', (err, promise) => {
	console.log(`Logged Error: ${err.message}`)
	server.close(() => process.exit(1))
})
