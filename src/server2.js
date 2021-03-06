const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.set('/UserMainPageComponents', path.join(__dirname, '/UserMainPageComponents'))
app.use(bodyParser.json())
app.use(cors());
const port = 3500;

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const url = process.env.MONGOOSE_URL;
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function(){
    console.log("Connected!!!");
});

async function appendData(chatting)
{
    chatting.save();
}
const userSchema = new mongoose.Schema({
  id: String,
  subject: String,
  data: String,
  tags: Array,
  isVisible: Boolean,
  status: Boolean
});

var userModel = mongoose.model('complaints', userSchema);

app.post('/api/registerC', (req, res)=>{
  console.log(req.body.complaint)
  var complaint = new userModel(req.body.complaint);
  appendData(complaint);
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.json({ status: 'ok' })
})
app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`);
});