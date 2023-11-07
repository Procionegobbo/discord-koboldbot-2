const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('Kobold bot is alive!')
})

function keepAlive(){
    server.listen(8080, ()=>{console.log("Kobold is Ready!")});
}

module.exports = keepAlive;