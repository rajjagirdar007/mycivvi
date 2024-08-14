const path = require("path");
const express = require('express');
const session = require("express-session");
const hbs = require("handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ResumeParser = require('simple-resume-parser');

const db = require("/var/www/mycivvi.com/db_civvi.js");
const sess = require("/var/www/mycivvi.com/sessions.js");

const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewsDirPath = path.join(__dirname, "../templates/views");
const vueDirPath = path.join(__dirname, "../vue-kanban-board/dist");

app.use(express.static(publicDirPath));

const jf = require(path.join(__dirname, "/middleware/cookie.js"));

const mysql = require('mysql');
const { info } = require("console");

const connection = mysql.createConnection({
    host: '192.168.152.3',
    user: 'linkedin',
    password: 'g[#)B?7,S]D<bu59R',
    database: 'mycivvi'
});

app.use(session({
    secret: 'pingbox/',
    saveUninitialized: true,
    resave: false,
    cookie: {
        secure: !true
    }
}));

// connection.connect((err)=>{
// 	if(err) throw err;
// 	console.log('Connected to mycivvi');
// });

console.log(__dirname);


const indexPath = path.join(__dirname, "/vue-kanban-board/dist/index.html");

app.set("view engine", ".hbs");
app.set("views", viewsDirPath);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render('index');
})

app.get("/login", (req, res) => {
    res.render("login");
})

require('dotenv').config({ path: "/var/www/jalfry.com/cred.env" })
app.get("/login/ts", (req, res) => {
    res.send({ t: process.env.MC_TOKEN_SECRET })
})
app.post("/login/authorize", jf.jf_auth, (req, res) => {
    res.send({ url: '/login' });
});

app.post("/login/app", (req, res) => {
    var u = req.body.username;
    var p = req.body.permission;

    req.session.username = u;
    req.session.loggedin = true;

    req.session.role = "admin";
    res.send({ url: '/administrator/viewcareer' })
})

app.get("/logout", (req, res) => {
    req.session.destroy();

    res.redirect("/login?logout=true");
})

app.use((req, res, next) => {
    if (req.session.loggedin) {
        next();
    } else {
        res.redirect("/login");
    }
})

app.get('/home', function(req, res) {
    res.sendFile('yert.html', { root: __dirname });
});

app.get('/draw', function(req, res) {
    res.sendFile('/var/www/mycivvi.com/templates/views/drawing.html');
});

app.post("/administrator/add_applicant", (req, res) => {
    var body = req.body

    var sql = `INSERT INTO kanban SET ?`;

    console.log(sql);
    connection.query(sql, body, function(err, data) {
        if (err) throw err;
        console.log("User Data inserted");
        res.redirect('/administrator/applicants');
    });
});

app.get('/administrator/applicants', (req, res) => {
    var sql = `SELECT DISTINCT position FROM kanban`;
    connection.query(sql, function(err, data) {
        if (err) throw err;
        console.log(data)
        res.render('careerpanel.hbs', { info: data })


    });

})



app.get('/parse', (req, res) => {

    const resume = new ResumeParser("/var/www/mycivvi.com/resume/9082654780_.pdf");

    resume.parseToJSON()
        .then(data => {
            console.log('Yay! ', data);
        })
        .catch(error => {
            console.error(error);
        });

    resume.parseToFile('/var/www/mycivvi.com/resume') //output subdirectory
        .then(file => {
            console.log('Yay! ', file);
        })
        .catch(error => {
            console.error(error);
        });

})

app.get('/administrator/add_applicant/:id', (req, res) => {
    var id = req.params.id
    res.render('add_applicant.hbs', { data: id })



})
app.get('/projects_panel', (req, res) => {
    const jects = [];

    var q = `SELECT * FROM projects ORDER BY priority ASC`;
    connection.query(q, (err, rows, fields) => {
        if (err) throw err;

        rows.forEach((row) => {
            const tb = row.image.split(',')[0];

            var obj = {
                id: row.id,
                title: row.name,
                tb: tb,
                priority: row.priority
            }

            jects.push(obj);
        })
        var r = 'SELECT * FROM filter';
        connection.query(r, (err, data, fields) => {
            if (err) throw err;

            res.render(admin_route + 'projects_panel.hbs', {
                username: req.session.username,
                project: jects,
                filter: data

            })
        })
    })

})

app.get('/administrator/applicants/:position', (req, res) => {
    var position = req.params.position;
    var sql = `SELECT * FROM kanban WHERE position = '${position}'`;
    connection.query(sql, function(err, data) {
        if (err) throw err;
        res.render('applicant.hbs', { info: data, pos: position });
    });
})

app.get("/administrator/insertcareer", (req, res) => {
    res.render('insertcareer.hbs', { username: req.session.username });
});

app.get("/administrator/viewcareer", (req, res) => {
    var sql = 'SELECT * FROM career';
    connection.query(sql, function(err, data) {
        if (err) throw err;
        var sql = 'SELECT * FROM kanban';
        connection.query(sql, function(err, data1) {
            if (err) throw err;
            var count = {}
            for (var i = 0; i < data1.length; i++) {
                count[data1[i].position] = count[data1[i].position] || 0;
                count[data1[i].position]++;
            }
            console.log(count);
            console.log(data);

            res.render('viewcareer.hbs', { username: req.session.username, data: data, data1: count });

        })
    });
});

app.get('/applicants/pdf/:number', function(req, res) {
    var tempFile = "/var/www/mycivvi.com/public/resume/" + req.params.number;
    console.log(tempFile + 'this is temp');
    res.download(tempFile);
    //fs.readFile(tempFile, function(err, data) {
    //res.contentType("application/pdf");
    //res.send(data);
    //});
});

app.post('/administrator/addcareer', (req, res) => {
    const userDetails = req.body;
    console.log(userDetails);
    var sql = 'INSERT INTO career SET ?';
    connection.query(sql, userDetails, function(err, data) {
        if (err) throw err;
        console.log("Data is inserted successfully ");
        res.redirect('/administrator/viewcareer')
    });

})

app.get('/gettable', function(req, res) {
    var sql = 'SELECT * FROM projects'
    console.log('getting projects');
    db.query(sql, function(err, data) {
        if (err) throw err;
        res.send(data);
        console.log(data);
    });

});

app.get('/gettable1', function(req, res) {
    res.sendFile('/var/www/mycivvi.com/templates/views/hd.html')
});

app.get('/gettable12', function(req, res) {
    res.sendFile('/var/www/mycivvi.com/templates/views/real.html')
});

app.get('/administrator/edit/careerdelete/:id', (req, res) => {
    var id = req.params.id
    var sql = `DELETE FROM career WHERE id= "${id}"`;
    connection.query(sql, function(err, data) {
        if (err) throw err;
        res.redirect('/administrator/viewcareer')
    });
})

app.get('/administrator/edit/careeredit/:id', (req, res) => {
    var id = req.params.id
    var sql = `SELECT * FROM career WHERE id= "${id}"`;
    connection.query(sql, function(err, data) {
        if (err) throw err;
        console.log(data)
        res.render('editcareer.hbs', { username: req.session.username, info: data[0] })


    });

})

app.post('/administrator/edit/careeredit/:id/', function(req, res, next) {
    var id = req.params.id
    console.log(req.body)
    const userDetails = req.body;
    console.log(userDetails);

    var sql = `UPDATE career SET ? WHERE id='${id}'`;

    connection.query(sql, userDetails, function(err, result) {
        if (err) throw err;
        console.log(result);
        res.redirect('/administrator/viewcareer');
    });
});


app.get('/yert', function(req, res) {
    res.sendFile(indexPath);
    //__dirname : It will resolve to your project folder.
});

app.get('/kanban1', function(req, res) {
    res.sendFile('index.html', { root: vueDirPath });

    //__dirname : It will resolve to your project folder.
});


app.get("/start", (req, res) => {
    res.render("start");
})
app.get("/insert", (req, res) => {
    res.render("insert");
})
app.get("/send", (req, res) => {
    res.send(selectedApplicants);

})


app.post('/addJob', (req, res) => {
    var name = req.body.name
    var loc = req.body.loc
    var ex = req.body.ex
    var skills = req.body.skills
    var desc = req.body.desc



    var sql = `INSERT INTO jobs (name, experience, key_skills, location, description) VALUES ('${name}','${ex}','${skills}', '${loc}', '${desc}')`



    console.log(sql);
    console.log(name);
    connection.query(sql, function(err, data) {
        if (err) throw err;
        console.log('Job Data inserted');
        res.send('Thank you for filling out this form!');
    });
})

app.post('/getButton', (req, res) => {
    var button = req.body.button
    console.log(button);
    var sql = 'SELECT * FROM feedback'
    console.log('getting people');
    console.log(sql);
    connection.query(sql, function(err, data) {
        if (err) throw err;
        setValue(data);
        res.redirect('/kanban1')

    });
})





app.get('/getJobs', function(req, res) {
    var sql = 'SELECT * FROM jobs'
    console.log('getting people');
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        res.render('career', { data: rows });
    });

})
app.post('/entry', function(req, res) {
    var entry = req.body.passkey;
    if (entry === 'durag-activity') {
        res.redirect('/select')
    } else {
        res.send('pLz 3nT3r @ga1N!!?1')
    }
})

app.get('/select', function(req, res) {
    var sql = 'SELECT * FROM jobs'
    console.log('getting people');
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.render('select', { data: rows })
    });

});
global.selectedApplicants = [];

app.get('/getPeople', function(req, res) {
    var sql = 'SELECT * FROM kanban'
    connection.query(sql, function(err, data) {
        if (err) throw err;
        setValue(data);
    });


});



app.get('/vue123', function(req, res) {
    res.send(global.selectedApplicants)

});

function setValue(value) {
    global.selectedApplicants = value;
    console.log(selectedApplicants + '32');
}

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

app.listen(3008, () => {
    console.log("mycivvi.com is up on port 3008!");
});
