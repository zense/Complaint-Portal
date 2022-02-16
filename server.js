const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors');

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const url = process.env.MONGOOSE_URL;
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const app = express()
app.set('/src/LoginPage', path.join(__dirname, '/src/LoginPage'))
app.use(bodyParser.json())
app.use(cors());

/*app.post('/api/change-password', async (req, res) => {
	const { token, newpassword: plainTextPassword } = req.body

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 6) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 7 characters'
		})
	}

	try {
		const user = jwt.verify(token, JWT_SECRET)

		const _id = user.id

		const password = await bcrypt.hash(plainTextPassword, 10)

		await User.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: ';))' })
	}
})*/

app.post('/api/login', async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()
	res.header("Access-Control-Allow-Origin", "*");
  	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  	res.setHeader('Access-Control-Allow-Credentials', true);
	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/register', async (req, res) => {
	const { firstname, lastname, username, password: plainTextPassword, Email } = req.body;
	res.header("Access-Control-Allow-Origin", "*");
  	//res.header("Access-Control-Allow-Headers", "X-Requested-With");
  	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  	res.setHeader('Access-Control-Allow-Credentials', true);
	if (!firstname || typeof firstname !== 'string') {
		return res.json({ status: 'error', error: 'Invalid firstname' })
	}

	if (!lastname || typeof lastname !== 'string') {
		return res.json({ status: 'error', error: 'Invalid lastname' })
	}

	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (!Email || typeof Email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Email id' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 6) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 7 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
            firstname,
            lastname,
			username,
			password,
            Email
		})
		//console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'User already exists' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

app.listen(80, () => {
	console.log('Server up at 80')
})