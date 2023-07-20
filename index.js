const express = require('express');
const leftPad = require('left-pad');

const app = express();
const multiply = require('./multiply.js');

app.get('/add', function (req, res) {
  const a = parseInt(req.query.a, 10);
  const b = parseInt(req.query.b, 10);
  res.send(leftPad(String(a + b), 20, '0'));
});

app.get('/multiply', function (req, res) {
  const a = parseInt(req.query.a, 10);
  const b = parseInt(req.query.b, 10);
  const result = multiply(a, b);
  res.send(leftPad(String(result), 20, '0'));
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Math service listening on port ' + (process.env.PORT || 3000));
});
