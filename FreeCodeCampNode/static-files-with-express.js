let express = require('express');
let path = require('path');
let app = express();
app.use('/public', express.static(path.join(__dirname, '/static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

app.listen('3000');