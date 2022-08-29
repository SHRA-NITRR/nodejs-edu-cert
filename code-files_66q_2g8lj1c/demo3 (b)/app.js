const fs = require('fs');
// require express
const express = require('express');
// create object and add port
const app = express();
const port = 6500;

// Define default route with express
app.get('/',(req,res) => {
    res.send('<h1> Welcome to express server</h1>')
})

/*
//read data from file
fs.readFile('./data/db.json',(err,result) => {
    if(err){
        throw err;
    }else {
        console.log(JSON.parse(result))
    }
})

*/

/*write data in text file
fs.appendFile('./data/mytext.txt','My text read file\n',(err) => {
    if(err) throw err;
    else{
        console.log('Data written successfully')
    }
})
*/


// Read file using express server
app.get('/getMovies', (req,res) => {
    fs.readFile('./data/db.json',(err,result) => {
        if(err){
            throw err;
        }else {
            res.send(JSON.parse(result))
        }
    })
})


// Create server to listen on port
app.listen(port,(err) => {
    console.log('server is running on port '+port);
})