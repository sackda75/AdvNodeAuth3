const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
	await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true
	})

	console.log('Connected to MongoDB'.magenta)
}

module.exports = connectDB
