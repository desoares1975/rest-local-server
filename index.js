'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();

app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json({}));

app.post('/leave', (req, res) => {
  console.log('/leave', req.body);
  let hasVacation = (+req.body.userID === 3);
  let period = hasVacation ? moment().add(3, 'month').format('05/MM/YY') + ',' + moment().add(4, 'month').format('06/MM/YY') : null;
  let negativeResponse = hasVacation ? false : ['Você não tem férias agendadas, você poderá realizar a solicitação através do portal do RH.'];
  let response = {hasVacation, period, negativeResponse};
  console.log('/leave', response);
  res.status(200).send(response);
});

app.post('/paycheck', (req, res) => {
  console.log('/paycheck', req.body);
  let paycheck = {
    '2': 'asantos.pdf',
    '3': 'ccristina.pdf'
  };

  let myPaycheck = paycheck[req.body.userID] || false;
  let response = {
    'hasPayment': (myPaycheck ? true : null),
    'file': myPaycheck ? (`http://mobi.blendit.com.br:3300/downloads/${myPaycheck}`) : null,
    'myPaycheckMonth': moment().subtract(1, 'month').format('MM/YYYY'),
    'paidDate': moment().subtract(1, 'month').format('25/MM/YYYY'),
    'negativeResponse': myPaycheck ? false : 'Sinto muito, você ainda não tem contracheques disponíveis.'
  };
  console.log('/paycheck', response);
  return res.status(200).json(response);
});

app.post('/hours', (req, res) => {
  console.log('/hours', req.body);
  let response = {'hasHours': true, 'hourBank': (req.body.userID === '3' ? '03:10' : '25:12')};
  console.log('/hours', response);
  return res.status(200).json(response);
});

app.listen(8809, () => {
  console.log('App up and running on port 8809');
});
