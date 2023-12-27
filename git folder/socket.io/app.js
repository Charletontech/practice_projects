const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const express_session = require('express-session')

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index')
})


io.on('connection', (socket)=>{
  console.log(socket.id);
  
})


server.listen(8080, () => {
  console.log('server listening at 8080...');
})