let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/example', (req, res) => {
  res.send('Hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params); // should use route parameter if value cant be left blank
  console.log(req.query); // should use query strings parameter if optional settings
  res.send(req.params.name + ':' + req.params.age);
});

app.listen('3000');