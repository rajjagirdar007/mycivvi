const path = require("path");
const express = require('express');
const app = express();
const viewsDirPath = path.join(__dirname, "/templates/views");
const connection = require('./src/services/database.js')

app.get('/home', function(req,res){
	res.sendFile('yert.html', { root: __dirname });
});
app.get('/yert', function(req, res) {
    res.sendFile(indexPath);
    //__dirname : It will resolve to your project folder.
});

app.get('/kanban1', function(req, res) {
	res.sendFile('index.html', { root: vueDirPath });

    //__dirname : It will resolve to your project folder.
});

app.get("/login", (req, res) => {
	res.render("login");
})
app.get("/insert", (req, res) => {
	res.render("insert");
})

app.post('/addJob', (req, res) => {
	var name = req.body.name
	var loc = req.body.loc
	var ex = req.body.ex
	var skills = req.body.skills
	var desc = req.body.desc
  
  
  
  var sql = `INSERT INTO jobs (name, experience, key_skills, location, description) VALUES ('${name}','${ex}','${skills}', '${loc}', '${desc}')`
  
  
  
	console.log(sql);
	connection.query(sql, function(err,data){
	if (err) throw err;
	  console.log('Job Data inserted');
	  res.send('Thank you for filling out this form!');
  });
})



  app.get('/getJobs', function(req, res) {
    var sql = 'SELECT * FROM jobs'
    console.log('getting people');
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
		res.render('career',{data: rows});
    });
	
})

app.get('/select', function(req, res) {
    var sql = 'SELECT * FROM jobs'
    console.log('getting people');
    connection.query(sql, function(err,rows, fields) {
        if (err) throw err;
		res.render('select',{data: rows})
    });

});

app.get('/getPeople', function(req, res) {
    var sql = 'SELECT * FROM kanban'
    console.log('getting people');
    connection.query(sql, function(err, data) {
        if (err) throw err;
        res.send(data);
        console.log(data);
    });

});

app.post("/login", (req, res) => {
	req.session.username = req.body.username;

	console.log(req.session.username);
	res.redirect("/portal/applications");
})

app.get("/portal/applications", (req, res) => {
	console.log(req.session.username);

	if (req.session.username) { 
		res.send(`how are you ${req.session.username}`);
	} else {
		res.send(`how are you user?`);
	}
})
module.exports = app;
