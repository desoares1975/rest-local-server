'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({}));
app.post('/leave', (req, res) => {

  let hasVacation = (+req.body.userID === 3);
  let period = hasVacation ? '04/06/18,22/06/18' : null;
  let negativeResponse = hasVacation ? false : ['Você não tem férias agendadas, você poderá realizar a solicitação através do portal do RH.'];
  res.status(200).send({hasVacation, period, negativeResponse});
});

app.post('/paycheck', (req, res) => {
  let paycheck = {
    '2': 'ccristina.pdf',
    '3': 'asantos.pdf'
  };

  let myPaycheck = paycheck[req.body.userID] || false;

  return res.status(200).json({
    'hasPayment': (myPaycheck ? true : null),
    'file': myPaycheck ? (`http://mobi.blendit.com.br:3300/downloads/${myPaycheck}`) : null,
    'myPaycheckMonth': '03/2018',
    'paidDate': '25/03/2018',
    'negativeResponse': myPaycheck ? false : 'Sinto muito, você ainda não tem contracheques disponíveis.'
  });
});

app.post('/hours', (req, res) => {
  return res.status(200).json({'hasHours': true, 'hourBank': (+req.body.userID === 3 ? '03:10' : '25:12')});
});

app.listen(8809, () => {
  console.log('App up and running on port 8809');
});
