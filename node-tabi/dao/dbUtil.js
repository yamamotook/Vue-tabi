const mysql = require('mysql');

function createConnection(){
	const connection = mysql.createConnection({
		port : '3306',
		host : '127.0.0.1',
		user : 'root',
		password : '123456',
		database : 'tabi'
	});
	
	return connection;
}

module.exports = {
	createConnection
}