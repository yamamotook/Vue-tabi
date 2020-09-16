const fs = require('fs');


const data = fs.readFileSync('/hotCity/cd1');
console.log(data.toString());