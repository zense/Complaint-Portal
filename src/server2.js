const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const app = express();
app.set('/src/UserMainPageComponents', path.join(__dirname, '/src/UserMainPageComponents'))
app.use(bodyParser.json())
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
  id: Number,
  subject: String,
  tags: Array,
  data: String,
  isVisible: Boolean,
  status: Boolean
});

var userModel = mongoose.model('complaints', userSchema);

app.post('/api/registerC', (req, res)=>{
  //const { id, subject, tags, data, isVisible, status } = req.body;
  console.log("hello world!!!");
  console.log(req.body.subject);
  var complaint = new userModel(req.body);
  appendData(complaint);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.json({ status: 'ok' })
})
app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`);
});