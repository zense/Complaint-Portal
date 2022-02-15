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
mongoose.connect('mongodb://localhost:27017/manas');
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
  //id: Number,
  subject: String,
  //tags: Array,
  data: String,
  //isVisible: Boolean,
  //status: Boolean
});

var userModel = mongoose.model('complaints', userSchema);

app.post('/api/registerC', (req, res)=>{
  var complaint = new userModel(req.body);
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