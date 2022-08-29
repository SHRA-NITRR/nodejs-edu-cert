const fs = require('fs');

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

//write data in text file
fs.appendFile('./data/mytext.txt','My text read file\n',(err) => {
    if(err) throw err;
    else{
        console.log('Data written successfully')
    }
})