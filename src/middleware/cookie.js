const fs = require("fs");

const jwt = require("jsonwebtoken");

const jf = require("/var/www/jalfry.com/src/tools/authentication.js");

require('dotenv').config({ path: "/var/www/jalfry.com/cred.env" })

module.exports.jf_auth = (req, res, next) => {
	var authorization = JSON.parse(req.headers.authorization)
	
	jwt.verify(authorization.token, process.env.MC_TOKEN_SECRET, (err, decoded) => {
		if (err) {
			console.log(err);
		} 

		var pin = decoded.pin;

		jf.cookie(pin, 'mycivvi.com', (result) => {
			req.session.username = result.username;
			console.log(result);

			if (result.status) {
				req.session.loggedin = true;

				if (result.permission) {
					req.session.role = "admin";
					res.send({ url: '/administrator/viewcareer' })
				}
			} else {
				next();
			}
		})
	})
}

module.exports.jalfry = (req, res, next) => {
	res.send(req.headers);

/*
//	console.log(req.query);
	if (req.query.jalfry == 'ok') {
		var pin = req.query.pin;
//		console.log(pin);
		
		jf.cookie(pin, 'mountrook.com', (result) => {
			req.session.username = result.username;
			console.log(result);

			if (result.status) {
				if (result.admin_permission === 1 || result.user_permission === 1) {
					req.session.loggedin = true;
					req.session.role = "admin";
					
					if (fs.existsSync(user_folders + `${req.session.username}s_folder`)) {
						res.redirect(`/online/files/${req.session.username}s_folder`);
					} else {
						fs.mkdirSync(user_folders + `${req.session.username}s_folder`);

						res.redirect(`/online/files/${req.session.username}s_folder`);
					}
				} else {
					res.redirect('/');
				}
			} else {
				next();
			}
		})
	} else {
		next();
	}
*/
}

module.exports.cookie_check = (req, res, next) => {
	if (req.cookies.non_obvious_user) {
		var pin = req.cookies.non_obvious_user;
		console.log(pin);

		jf.cookie(pin, 'mountrook.com', (result) => {
			req.session.username = result.username;

			if (result.status) {
				if (result.permission == "Admin") {
					req.session.loggedin = true;
					req.session.role = "admin";
					
					res.redirect(`/online/files/${req.session.username}s_folder`);
				} else if (result.permission == "User") {
					req.session.loggedin = true;
					req.session.role = "user";

					res.redirect(`/online/files/${req.session.username}s_folder`);
				} else {
					res.redirect('/');
				}
			} else {
				next();
			}
		})
	} else {
		console.log('no cookie!');
		next();
	}
}
