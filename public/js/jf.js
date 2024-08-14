var sso;

//host name
var h = window.location.hostname;
//domain name
var d = h.split(".")[0];

async function post(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	return response.json();
}

async function postToken(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		redirect: 'follow',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': JSON.stringify(data)
		},
		body: JSON.stringify(data)
	})

	return response.json();
}

var ts; 

function clickhandler(e) {
	//open jalfry pop up, and send website info over
	e.preventDefault();

	var params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=600,left=100,top=100`;
	sso = window.open("https://jalfry.com/sso", "login with jalfry", params);

	fetch(`https://${h}/login/ts`)
	.then(response => response.json())
	.then((data) => {
		ts = data.t;

		var obj = {
			domain: d,
			login_link: `https://${h}/login`,
			token_secret: data.t,
			current_link: window.location.href
		}

		setTimeout(() => {
			sso.postMessage(obj, 'https://jalfry.com/sso');
		}, 500);
	})
}

window.addEventListener("message", (e) => {
	e.preventDefault();
	
	if (e.origin == "https://jalfry.com") {
		var ed = e.data;
		var token = ed.token;
		var username = ed.username;
		
		postToken('https://jalfry.com/login/authorize', { domain: d, token, secret: ts, username })
		.then((data) => {
			if (data.status) {
				//user is logged in, implement app session logic here... username and permission is stored in data object
				console.log(data);
				post(`https://${h}/login/app`, { username: data.username, permission: data.permission })
				.then((data) => {
					window.location = data.url;
				})
			} else {
				console.log('no access :(');
			}
		})
	}
})
