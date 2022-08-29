const fs=require('fs');
fs.writeFileSync('fsExample.txt', "Read Me!!");

fs.open('fsExample.txt', 'r+', (err, data)=>{
    if(err){
        console.log(err);
        fs.close(data);
    }else{
        console.log("File Opened");
        fs.appendFile('fsExample.txt', 'Appended', 'utf-8', (err)=>{
            if(err){
                console.log("Failed");
                throw err;
            }
            console.log('Appended to file');
        })
    }
});
fs.appendFile('fsExample.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });