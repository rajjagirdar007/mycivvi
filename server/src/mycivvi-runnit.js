const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3034
const path = require("path");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const history = require('connect-history-api-fallback');
var bodyParser = require('body-parser');
//app.use('/resumes',express.static('../public/resumes'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('/var/www/mycivvi.com/front-end/mycivvi/dist'));
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(express.static('/var/www/mycivvi.com/front-end/mycivvi/dist'));
//app.use("/public", express.static('/var/www/mycivvi.com/front-end/newsletter/public/public_real'));


const connection = mysql.createConnection({
        host:'192.168.152.3',
        user:'irzaw',
        password:'gd+g!Bn@r5IG(8q9',
        database:'mycivvi'
});

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.get('/',(req,res)=>{
	res.sendFile('/var/www/mycivvi.com/front-end/mycivvi/dist/index.html')

});
/*
app.get('/news',(req,res)=>{
	res.sendFile('/var/www/mycivvi.com/front-end/newsletter/index.html')
});
*/
app.post("/register", (req, res) => {

	console.log(req.body);
	var insert = req.body;
	var sql = 'INSERT INTO accounts SET ?'
	connection.query(sql, insert, function(err, rows, fields) {
		if (err) throw err;
		console.log('complete');
	});

});

app.post("/login", (req, res) => {

        console.log(req.body);
        var insert = req.body;
        var sql = 'SELECT * FROM accounts WHERE email= ? AND password = ?'
        connection.query(sql, [req.body.email, req.body.password], function(err, rows, fields) {
                if (err) throw err;
		if (rows.length != 0){
		//	const token = generateAccessToken({ username: req.body.username });
			res.send({
				username: rows[0].username,
				password: rows[0].password,
				email: rows[0].email,
				role: rows[0].role,
				company: rows[0].Company
		//		token: token
			})
		}
                console.log('complete');
        });

});

app.get('/accounts',(req,res) => {
    var sql = 'SELECT * FROM accounts'
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/get_event_pics3', (req, res) => {
    const file = path.join("/var/www/mycivvi.com/front-end/newsletter/public/public_real/newsletter-1")
    const array = [""]
    fs.readdir(file, function(err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function(file) {
            var stat = fs.statSync(`/var/www/mycivvi.com/front-end/newsletter/public/public_real/newsletter-1/${file}`);

            if (stat.isFile()) {
                var p = `/public/newsletter-1/${file}`;
                var obj = {
                    path: `/public/newsletter-1/${file}`
                }

                array.push(p);
            }
        });
        res.send({ data: array });
    })
})

app.listen(port, () => {
	console.log(`my civvi is running on port ${port}`)
})
