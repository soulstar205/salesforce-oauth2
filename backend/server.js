require('dotenv').config()
const axios = require('axios')
const express = require('express')

const app = express()

const clientID = process.env.SALESFORCE_CLIENT_ID
const clientSecret = process.env.SALESFORCE_CLIENT_SECRET
const uri = process.env.SALESFORCE_REDIRECT


app.get('/auth', (req, res)=>{

    res.redirect(process.env.SALESFORCE_REDIRECT)
    console.log(req.query)
})



app.get('/redirect', ({ query: { code } }, res) => {
    const body = {
      client_id: process.env.SALESFORCE_CLIENT_ID,
      client_secret: process.env.SALESFORCE_CLIENT_SECRET,
      code,
    };
    const opts = { headers: { accept: 'application/json' } };
    axios
      .post('https://boot2-dev-ed.lightning.force.com.my.salesforce.com', body, opts)
      .then((_res) => _res.data.access_token)
      .then((token) => {
        
        console.log('My token:', token);
  
        res.redirect(`/?token=${token}`);
      })
      .catch((err) => res.status(500).json({ err: err.message }));
  });
  


const port = 3001
app.listen(port);
console.log('Server listening on on port ', port)
