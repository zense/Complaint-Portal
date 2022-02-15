const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		firstname: { type: String, required: true},
		lastname: { type: String, required: true},
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		Email: { type: String, required: true, unique: true}
	},
	{ collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model