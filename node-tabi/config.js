const fs = require('fs');
const globalConfig = {};

const files = fs.readFileSync('./server.conf').toString();

const lines = files.split("\n");
lines.forEach( line =>{
	const temp = line.split('=');
	if(temp.length == 2){
		globalConfig[temp[0]] = temp[1].trim();
	}
} );

module.exports = globalConfig;
