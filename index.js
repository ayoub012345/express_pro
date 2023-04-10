const express = require('express');
const app = express();
const port = 4000;
const hours_Work = require('./h_work');

app.set('view engine', 'ejs');

//--------------home page--------------
app.get('/', hours_Work,(req, res) => {
    const title = 'Home page.';
    res.render('home', { title});
});

//--------------services page--------------
app.get('/services',hours_Work, (req, res) => {
    const title = 'our services';
    res.render('services', { title });
});

//--------------contact page--------------
app.get('/contact',hours_Work, (req, res) => {
    const title = 'Contact us';
    res.render('contact', { title });
});



app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});