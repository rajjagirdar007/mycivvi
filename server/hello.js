const express = require('express')
const app = express()
const port = 3034

app.get('/',(req,res)=>{
	res.send('Hello, welcome yunis')
})

app.listen(port, () => {
	console.log(`my civvi is running on port ${port}`)
})
