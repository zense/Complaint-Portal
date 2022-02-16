const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.set('/UserMainPageComponents', path.join(__dirname, '/UserMainPageComponents'))
app.use(bodyParser.json())
app.use(cors());
const port = 3700;
const url = "mongodb+srv://YoYo2201:6655332211@cluster0.ysvyk.mongodb.net/manas?retryWrites=true&w=majority"
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function(){
    console.log("Connected!!!");
});

async function updateData(modelName, idUpdate)
{
    modelName.findOneAndUpdate({ id: idUpdate-1 }, { id: idUpdate }, { upsert: true }, function(err, doc) {
        if (err) {;}
        else {;}
    });
}

async function retrieveData(modelName)
{
    const chat = await modelName.find();
    return chat;
}

const userSchema = new mongoose.Schema({
  id: String
});

var userModel = mongoose.model('complaintids', userSchema);

app.get('/api/GetComplaintId', (req, res)=>{
  const datas = retrieveData(userModel);
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  datas.then(data => {
      if(data.length === 0) 
        res.json({ id: '1' })
      else
        res.json(data[0]);
})
});

app.post('/api/PostComplaintId', (req, res)=>{
    updateData(userModel, req.body.ids);
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json({ status: 'ok' })
  })

app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`);
});