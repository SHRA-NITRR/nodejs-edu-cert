const fs=require("fs");

// fs.writeFileSync('fs-file.txt', "Check this in file.");
fs.readFile('fs-file.txt', 'utf-8', (err, data)=>{
  console.log(data);
});