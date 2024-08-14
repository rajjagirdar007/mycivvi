const mysql = require('mysql');

const connection = mysql.createConnection({
	host:'192.168.152.3',
	user:'linkedin',
	password:'g[#)B?7,S]D<bu59R',
	database:'mycivvi'
});

// connection.connect((err)=>{
// 	if(err) throw err;
// 	console.log('Connected to mycivvi');
// });

module.exports = connection;