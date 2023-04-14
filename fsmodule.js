const fs = require('fs');

/* fs.readFile('Setup.log.txt','utf-8',(err,data)=>{
    console.log(err,data);
}) */
const a = fs.readFileSync('file.txt','utf-8');
console.log(a.toString())


// fs.writeFile('file2.txt','this is a write file',() => {
//     console.log(('written to the file'));
// })
const b = fs.writeFileSync('file3.txt','this is a write file2')
console.log(b);
console.log('Finished reading file');