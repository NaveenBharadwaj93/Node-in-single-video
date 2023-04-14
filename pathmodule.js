const path = require('path');

const a = path.basename('c:/naveen/asd/quux.html'); // quux.html
const b = path.dirname('c:/naveen/asd.html') // c:/naveen
console.log(b);
const c = path.extname(__filename);
console.log(__filename,c);
