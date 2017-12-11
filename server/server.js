const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const controller = require('./controllers/messagesController')

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

app.post('/api/messages', controller.create);//create a new message
app.get('/api/messages', controller.read);//read the messages
app.put('/api/messages/:id', controller.update);//update messages
app.delete('/api/messsages/:id', controller.remove);//delete messages



app.listen(port, ()=>{
    console.log("I am listening on port " + port);
});