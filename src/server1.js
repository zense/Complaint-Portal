const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3600;
const url = "mongodb+srv://YoYo2201:6655332211@cluster0.ysvyk.mongodb.net/manas?retryWrites=true&w=majority"
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function(){
    console.log("Connected!!!");
});

async function retrieveData(modelName)
{
    const chat = await modelName.find();
    return chat;
}
const userSchema = new mongoose.Schema({
  id: Number,
  subject: String,
  tags: Array,
  data: String,
  isVisible: Boolean,
  status: Boolean
});

var userModel = mongoose.model('Users', userSchema);

app.get('/complaints', (req, res)=>{
  const datas = retrieveData(userModel);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  datas.then(data => res.json(data));
})
app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`);
});