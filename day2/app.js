const express=require('express');
const app= express();
const fs =require('fs');

app.listen(3333, (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server is running at http://localhost:3333");
})

app.get('/', (req, res)=>{
    res.send("Hey, Welcome");
})
app.get('/getList', (req, res)=>{
    fs.readFile('./data/db.json', (err, data)=>{
        if(err){
            console.log('error');
            return;
        }
        res.send(JSON.parse(data));
    })
})
app.get('/addOneMore', (req, res)=>{
    fs.readFile('./data/db.json', (err, data)=>{
        if(err){
            console.log('error');
            return;
        }
        const parsed=JSON.parse(data);
        parsed[0].name='Shravan';
        const dataAsString=JSON.stringify(parsed);

        fs.writeFileSync('./data/db.json', dataAsString);

        res.send(dataAsString);
    })
})