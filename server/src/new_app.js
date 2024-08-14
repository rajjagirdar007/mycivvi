const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const multer = require('multer');
var session = require('express-session');
const path = require("path");
const nodemailer = require('nodemailer');

const app = express();


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '/var/www/mycivvi.com/front-end/new_app/resumes');
    },


    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, req.body.first_name + '_' + req.body.last_name + '_' + req.body.phone_number + '_' + path.extname(file.originalname));
    }
});


const upload = multer({ storage: storage});

// create connection to MySQL database
/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_database_username',
  password: 'your_database_password',
  database: 'your_database_name'
});
*/
const connection = mysql.createConnection({
        host:'127.0.0.1',
        user:'linkedin2',
        password:'novtown_new', 
        database:'mycivvi'
});

// middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'white-girl-iced-tea-fully-loaded-ap',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 600000
  }
}));


app.get('/api/positions', (req, res) => {
    const query = `
        SELECT
            career.id,
            career.title,
            career.location,
            IFNULL(position_counts.count_position, 0) AS count_position
        FROM
            career
        LEFT JOIN (
            SELECT
                position,
                COUNT(*) AS count_position
            FROM
                kanban
            GROUP BY
                position
        ) AS position_counts
        ON
            career.title = position_counts.position;
    `;

    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching positions' });
        } else {
            res.json(results);
        }
    });
});


app.get('/api/applicants/:name', (req, res) => {
    const name = req.params.name;
    const q = `SELECT * FROM kanban WHERE position='${name}'`;

    connection.query(q, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database query error' });
        } else {
            res.json(results);
        }
    });
});

app.use('/resumes', express.static('/var/www/mycivvi.com/front-end/new_app/resumes'));


app.get('/open', (req, res) => {
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/up_emp.html')
});

app.get('/applicant', (req, res) => {
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/applicant.html')
});

app.get('/rating', (req, res) => {
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/rating.html')
});

app.get('/', (req, res) => {
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/landing.html')
});

app.get('/employer/template', (req, res) => {
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/template.html')
});

// define a route
app.get('/job-seeker/register', (req, res) => {
 	res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/register_seeker.html') 
});


app.post('/job-seeker/register', upload.single('resume'), (req, res) => {
  const { first_name, last_name, email, phone_number, interests, current_title, current_company, password } = req.body;
  const resume_path = req.file.path;
  const jobs_applied = "";

  const sql = 'INSERT INTO job_seekers (first_name, last_name, email, phone_number, resume_path, interests, current_title, current_company, password, jobs_applied) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [first_name, last_name, email, phone_number, resume_path, interests, current_title, current_company, password, jobs_applied];

  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log('Job seeker registered:', result.insertId);
    res.redirect('/job-seeker/login');
  });
});

app.get('/job-seeker/login', (req, res) => {
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/login_seeker.html')
});

app.post('/job-seeker/login', function(request, response) {
  const email = request.body.email;
  const password = request.body.password;
  const sql = 'SELECT * FROM job_seekers WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], function(error, results) {
    if (error) throw error;
    if (results.length > 0) {
      	    console.log(results);
	    Object.assign(request.session, results[0]);
	    response.redirect('/job-seeker/dashboard');
    } else {
      response.send('Incorrect email or password!');
    }
  });
});

app.get('/job-seeker/dashboard', (req, res) => {
	console.log(req.session);
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/dashboard_seeker.html')
});


app.get('/job-seeker/newdashboard', (req, res) => {
	console.log(req.session);
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/seeker_dash.html')
});

app.get('/get-loggedin', function(req, res) {
  // Check if user is logged in
  if (!req.session) {
    res.redirect('/job-seeker/login');
    return;
  } else {
	  console.log(req.session);
          const sql = `SELECT * FROM new_jobs`;
  connection.query(sql,  function(error, results, fields) {
    if (error) throw error;
   var data = {
      session: req.session,
      results: results
    };
          res.json(data);
  });
  }

  // Retrieve user data from database

});


app.post('/job_seeker/apply', (req, res) => {
  const { seeker_id, email, job_title, company_name, job_id, employer_id, first_name, last_name, resume_path } = req.body;

  const sql = 'INSERT INTO job_applications (seeker_id, seeker_email, job_title, company_name, job_id, employer_id, first_name, last_name, resume_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [seeker_id, email, job_title, company_name, job_id, employer_id, first_name, last_name, resume_path], (error, results, fields) => {
    if (error) {
      throw error;
    }
	  const sql2 = `UPDATE job_seekers SET jobs_applied = CONCAT_WS(',',jobs_applied, '${job_id}') WHERE seeker_id = ${seeker_id}`;
	  connection.query(sql2, (error2, results2, fields2) => {
	    if (error2) {
	      throw error2;
	    }
		const sql3 = `select * from job_seekers where seeker_id= ${seeker_id}`;
		  connection.query(sql3, (error3, results3, fields3) => {

		          Object.assign(req.session, results3[0]);

    			res.send(results);

		   });
	  });
  });
});


//EMPLOYER 

app.get('/employer/register', (req, res) => {
        console.log(req.session);
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/register_employer.html')
});

app.post('/employer/register', (req, res) => {
  const { company_name, company_industry, company_location, email, password } = req.body;
  const sql = 'INSERT INTO employer (company_name, company_industry, company_location, email, password) VALUES (?, ?, ?, ?, ?)';
  connection.query(sql, [company_name, company_industry, company_location, email, password], (err, results) => {
    if (err) throw err;
    res.redirect('/employer/login');
  });
});

app.get('/employer/login', (req, res) => {
        console.log(req.session);
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/login_employer.html')
});

app.post('/employer/login', function(request, response) {
  const email = request.body.email;
  const password = request.body.password;
  const sql = 'SELECT * FROM employer WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], function(error, results) {
    if (error) throw error;
    if (results.length > 0) {
            console.log(results);
            Object.assign(request.session, results[0]);
            response.redirect('/employer/dashboard');
    } else {
      response.send('Incorrect email or password!');
    }
  });
});

app.get('/employer/dashboard', (req, res) => {
        console.log(req.session);
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/dashboard_employer.html')
});

app.get('/employer/updashboard', (req, res) => {
        console.log(req.session);
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/updated_employer_dash.html')
});

app.get('/employer/get-loggedin', function(req, res) {
  // Check if user is logged in
  if (!req.session) {
    res.redirect('/employer/login');
    return;
  } else {
    console.log(req.session);
	const sql = `SELECT * FROM new_jobs WHERE poster_id = ?`;
  	connection.query(sql, [req.session.employer_id], function(error, results, fields) {
    		if (error) throw error;
		const sql2 = `SELECT * FROM job_applications WHERE employer_id = ?`;
		  connection.query(sql2, [req.session.employer_id], (error2, results2, fields2) => {
		    if (error2) {
		      throw error2;
		    }
			var data = {
				session: req.session,
				results: results,
				results2: results2
			};
			console.log(results2);  
			res.json(data);
		  });

     	});
  }
});

app.get('/employer/addjob', (req, res) => {
        console.log(req.session);
        res.sendFile('/var/www/mycivvi.com/front-end/new_app/templates/addjob_employer.html')
});

app.post('/employer/addjob', (req, res) => {
  const { job_desc, job_skills, job_qualifications, job_duties, job_type, job_title, expected_rate } = req.body;
  const sql = 'INSERT INTO new_jobs (job_desc, job_skills, job_qualifications, job_duties, job_type, job_title, expected_rate, company_name, company_industry, poster_email, poster_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [job_desc, job_skills, job_qualifications, job_duties, job_type, job_title, expected_rate, req.session.company_name, req.session.company_industry, req.session.email, req.session.employer_id];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error adding job');
    } else {
      console.log(`Added job with ID ${result.insertId}`);
      res.redirect('/employer/dashboard');
    }
  });
});

app.post('/employer/mark_as_viewed/:id', (req, res) => {
  const id = req.params.id;

  // Update the viewed column of the job application with the given ID
  connection.query('UPDATE kanban SET viewed = true WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error updating job application' });
    }

    return res.status(200).json({ message: 'Job application updated successfully' });
  });
});

app.post('/employer/addtag/:application_id', (req, res) => {
  const applicationId = req.params.application_id;
  const tag = req.body.tag;

  // Assuming you have a database connection set up already:
const sql = "UPDATE job_applications SET tags = CONCAT_WS(',', tags, ?) WHERE application_id = ?";
connection.query(sql, [tag, applicationId], (err, result) => {
  if (err) throw err;

  // Redirect back to employer dashboard
  res.redirect('/employer/dashboard');
});
});


app.post('/job_applications/delete', (req, res) => {
  const { id } = req.body;

  // Delete the job application from the database
  connection.query('UPDATE kanban SET rejected = 1 WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete job application' });
    }
	console.log('hit');
    res.json({ message: 'Job application deleted successfully' });
  });
});

app.post('/job_applications/anti-delete', (req, res) => {
  const { id } = req.body;

  // Delete the job application from the database
  connection.query('UPDATE kanban SET rejected = 0 WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete job application' });
    }
        console.log('hit');
    res.json({ message: 'Job application deleted successfully' });
  });
});

app.post('/employer/setinterview', (req, res) => {
  const { first_name, last_name, job_title, company_name, email } = req.body;

  try {
    const result = sendInterviewEmail(first_name, last_name, job_title, company_name, email);

    if (result) {
      res.send('Rejection email sent successfully.');
    } else {
      res.status(500).send('Error sending rejection email.');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error sending rejection email.');
  }

});


app.post('/employer/sendrejection', (req, res) => {
  const { first_name, last_name, job_title, company_name, email } = req.body;

  try {
    const result = sendRejectionEmail(first_name, last_name, job_title, company_name, email);

    if (result) {
      res.send('Rejection email sent successfully.');
    } else {
      res.status(500).send('Error sending rejection email.');
    }
}  catch (error) {
    console.log(error);
    res.status(500).send('Error sending rejection email.');
  }

});

async function sendRejectionEmail(first_name, last_name, job_title, company_name, email) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mycivvi@gmail.com',
      pass: 'otolideofjawqfqy'
    }
  });

  try {
    // send mail with defined transport object
    const info = transporter.sendMail({
      from: `"${company_name}" <mycivvi@gmail.com>`, // sender address
      to: `${first_name} ${last_name} <${email}>`, // list of receivers
      subject: `Regarding your application for ${job_title}`, // Subject line
      html: `<p>Dear ${first_name} ${last_name},</p>
             <p>Thank you for your interest in the ${job_title} position at ${company_name}. We appreciate the time and effort you put into your application, and we carefully considered your qualifications and experience.</p>
             <p>After careful consideration, we regret to inform you that we have decided not to move forward with your application at this time. Please know that this decision was a difficult one, and we wish you all the best in your job search.</p>
             <p>Thank you again for your interest in our company.</p>
             <p>Best regards,</p>
             <p>The Hiring Team</p>`
    });

    console.log('Message sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function sendInterviewEmail(first_name, last_name, job_title, company_name, email) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mycivvi@gmail.com',
      pass: 'otolideofjawqfqy'
    }
  });

  try {
    // send mail with defined transport object
    const info = transporter.sendMail({
      from: `"${company_name}" <mycivvi@gmail.com>`, // sender address
      to: `${first_name} ${last_name} <${email}>`, // list of receivers
      subject: `Interview your application for ${job_title}`, // Subject line
      html: `
    	<p>Dear ${first_name} ${last_name},</p>
	<p>Thank you for submitting your application for the ${job_title} position at ${company_name}. We are pleased to inform you that we would like to invite you for an interview to discuss your application further.</p>
	<p>To confirm your attendance and to schedule the interview, please reply to this email with your availability for the next week. Our team will get back to you to confirm the final date and time of the interview.</p>
	<p>We look forward to hearing back from you soon.</p>
	<p>Best regards,</p>
	<p>The Hiring Team</p>

	    `
    });

    console.log('Message sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// define a route to handle file uploads
app.post('/upload', upload.single('resume'), (req, res) => {
  const { filename, mimetype, size } = req.file;
  console.log(`Received file ${filename} of type ${mimetype} and size ${size}`);
  res.sendStatus(200);
});

// start the server
app.listen(3034, () => {
  console.log('Server listening on port 3034');
});

