'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();

app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json({}));
// RH Cognitivo
app.post('/leave', (req, res) => {
  console.log('/leave', req.body);
  let hasVacation = (+req.body.userID === 2);
  let period = hasVacation ? moment().add(3, 'month').format('05/MM/YY') + ',' + moment().add(4, 'month').format('06/MM/YY') : null;
  let negativeResponse = hasVacation ? false : ['Você não tem férias agendadas, você poderá realizar a solicitação através do portal do RH.'];
  let response = {hasVacation, period, negativeResponse};
  console.log('/leave', response);
  res.status(200).send(response);
});

app.post('/paycheck', (req, res) => {
  console.log('/paycheck', req.body);
  let paycheck = {
    '2': 'mobi-dev.pdf',
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

// UBIMobile-API
/*
app.get('', (req, res) => {
  res.status(200).json();
});
*/

app.get('/UBIMobileService/Dashboard/Mobile/All', (req, res) => {
  res.status(200).json({
      "Error": false,
      "ErrorList": [],
      "AmountSuddenAcceleration": 400,
      "AmountSuddenBraking": 227,
      "AmountSuddenCurve": 240,
      "AmountTrips": 590,
      "Days": 365,
      "DistanceTotal": 167.25666614587263,
      "Score": 9,
      "ScoreBraking": 3,
      "ScoreDawn": 76,
      "ScoreDistance": 4,
      "ScoreDistraction": 75,
      "ScoreFatigue": 76,
      "ScoreLabel": null,
      "ScoreSoftness": 60,
      "ScoreSpeed": 71,
      "SpeedAvg": 52.234929205027839,
      "SpeedMax": 69.638987002558352,
      "TimeAboveSpeedAverage": 114,
      "TimeAboveSpeedTotal": 251,
      "TimePhoneAverage": 567,
      "TimePhoneTotal": 31,
      "TripTimeAverage": 421,
      "TripTimeTotal": 444,
      "UserAchievements": null,
      "UserCoins": null,
      "UserLevel": null
  });
});

app.get('/UBIMobileService/Gamification/Store/List', (req, res) => {
  res.status(200).json({
    "Error": false,
    "ErrorList": [],
    "NextPage": false,
    "Records": [
        {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
              "CoinName": "Convertible Marks",
              "CreateDate": "/Date(1531436721679-0300)/",
              "EndDateAvailable": "/Date(1537030030275-0300)/",
              "ItemDescription": "consequatur",
              "ItemName": "Gorgeous Soft Cheese",
              "Price": 7744,
              "QuantityAvailable": 1,
              "StartDateAvailable": "/Date(1533616901183-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "impedit",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 0,
                      "CoinName": "Guinea Franc",
                      "TotalCoins": 2444
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Aut iste maxime corporis.\nIllum cum et facilis.\nOmnis ut eum vero illum molestiae quam dolore explicabo.\nMagnam non dolore eveniet et.\nQuae minima voluptatem repellendus numquam ipsum quasi eaque debitis numquam.\nEt saepe dolore eum pariatur.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 1,
                      "CoinName": "Tugrik",
                      "TotalCoins": 2424
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Occaecati qui veniam corrupti harum maiores hic nemo nulla quas.\nAssumenda in distinctio eos.\nEst fugiat nisi reiciendis id unde ex.\nPariatur sapiente in voluptas quaerat.\nEa nisi adipisci.\nMaxime reprehenderit recusandae nobis iusto.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 2,
                      "CoinName": "Jordanian Dinar",
                      "TotalCoins": 2715
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Maiores consectetur tempora in sed error.\nOfficiis nisi ut eaque non.\nTempore qui aut ab possimus aspernatur eos sunt.\nSint rem et.\nQui exercitationem ab optio voluptatem autem nam autem reiciendis non.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                      "CoinId": 3,
                      "CoinName": "Tugrik",
                      "TotalCoins": 2666
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "voluptatem",
                      "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                      "CoinId": 4,
                      "CoinName": "US Dollar",
                      "TotalCoins": 1058
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "voluptas",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                      "CoinId": 5,
                      "CoinName": "UAE Dirham",
                      "TotalCoins": 2560
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Ut repudiandae ad possimus placeat minima dolorem perferendis dolorem.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/people",
                      "CoinId": 6,
                      "CoinName": "Baht",
                      "TotalCoins": 731
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Autem quos adipisci accusamus quaerat dolorem aliquam vitae.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 7,
                      "CoinName": "Falkland Islands Pound",
                      "TotalCoins": 1949
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Nulla magnam sit voluptas.\nVeritatis recusandae vero odit est tempore.\nQuos laboriosam eum.\nQuod temporibus quasi.\nVoluptas expedita ut.\nRepellat est fugiat dolores.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/people",
                      "CoinId": 8,
                      "CoinName": "Tala",
                      "TotalCoins": 1222
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "mollitia",
                      "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                      "CoinId": 9,
                      "CoinName": "Pataca",
                      "TotalCoins": 2743
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
              "CoinName": "Bulgarian Lev",
              "CreateDate": "/Date(1531422221576-0300)/",
              "EndDateAvailable": "/Date(1534596381711-0300)/",
              "ItemDescription": "Dicta quaerat qui aut omnis maxime enim aut.",
              "ItemName": "Practical Soft Tuna",
              "Price": 7422,
              "QuantityAvailable": 10,
              "StartDateAvailable": "/Date(1532000772004-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Et modi aut sed. Voluptas saepe sed magni. Voluptatem alias dignissimos est. Similique facilis fuga adipisci rerum dicta qui et. Quia reiciendis odio optio. Ut autem in a in rerum velit.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 10,
                      "CoinName": "Bahamian Dollar",
                      "TotalCoins": 1341
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Vel deserunt beatae sed. Non et nihil. Et earum qui voluptatibus mollitia qui.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                      "CoinId": 11,
                      "CoinName": "Codes specifically reserved for testing purposes",
                      "TotalCoins": 1194
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Maxime quae ipsa consequatur minima corrupti. Quia incidunt sit debitis rerum vel mollitia. Eos ut atque repellat. Nostrum et sit aliquam expedita illum quaerat dolor. Error nam quis qui velit. Aperiam architecto dicta recusandae consequuntur sed quia nihil et.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 12,
                      "CoinName": "Czech Koruna",
                      "TotalCoins": 2351
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Porro et qui.\nQui accusantium repellendus.\nLaudantium tempora voluptate necessitatibus nam.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/city",
                      "CoinId": 13,
                      "CoinName": "Algerian Dinar",
                      "TotalCoins": 730
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Quaerat omnis accusamus cupiditate ut et explicabo doloribus ipsam. Eaque unde doloribus. Hic consequatur aliquam ullam accusantium consequatur quis.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 14,
                      "CoinName": "Yen",
                      "TotalCoins": 2698
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Similique cum aspernatur eum rem esse molestias autem dolorem.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 15,
                      "CoinName": "Swedish Krona",
                      "TotalCoins": 423
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Et consectetur vero. Voluptatem ea modi doloribus aut est quia et occaecati vitae. Vel sed quod non ipsam eius est similique dolores atque. Repellendus enim quidem nesciunt cumque architecto quos nihil. Impedit vero ut. Neque qui aut veniam maxime non aut.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 16,
                      "CoinName": "Lempira",
                      "TotalCoins": 245
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Deleniti illum dolor dolorum est esse.\nDolorum repudiandae aliquid earum voluptatem magni.\nIllum quae voluptatem.\nAsperiores magni commodi et aut consequatur qui et rem dignissimos.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 17,
                      "CoinName": "Turkish Lira",
                      "TotalCoins": 2503
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "tempore",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 18,
                      "CoinName": "Rufiyaa",
                      "TotalCoins": 774
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "consequuntur",
                      "CoinIconUrl": "http://lorempixel.com/640/480/business",
                      "CoinId": 19,
                      "CoinName": "Bahraini Dinar",
                      "TotalCoins": 1615
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/sports",
              "CoinName": "Argentine Peso",
              "CreateDate": "/Date(1531447445154-0300)/",
              "EndDateAvailable": "/Date(1532975151547-0300)/",
              "ItemDescription": "alias",
              "ItemName": "Handmade Plastic Fish",
              "Price": 8477,
              "QuantityAvailable": 5,
              "StartDateAvailable": "/Date(1532712508423-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Et earum maiores sint soluta sint iure et blanditiis.\nNon repellendus quia dolorem accusamus tenetur qui voluptas ut doloremque.\nVoluptas rem doloribus.\nVelit maiores earum nam harum qui dolor nulla.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 20,
                      "CoinName": "Rial Omani",
                      "TotalCoins": 549
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Hic illum fuga consequatur.\nMagnam facilis voluptatem quod et eius quis.\nEum cumque sapiente rem repellat.\nUt non ducimus labore qui.\nPlaceat earum necessitatibus dolores est voluptas adipisci.\nOdit beatae minima numquam laudantium laudantium.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/food",
                      "CoinId": 21,
                      "CoinName": "Cape Verde Escudo",
                      "TotalCoins": 2890
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "esse",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 22,
                      "CoinName": "Djibouti Franc",
                      "TotalCoins": 1391
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Adipisci consequatur officia porro quas in et ea.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                      "CoinId": 23,
                      "CoinName": "Naira",
                      "TotalCoins": 2267
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "minus",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 24,
                      "CoinName": "Tugrik",
                      "TotalCoins": 762
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Consequatur provident nulla quas error dolore architecto voluptate.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                      "CoinId": 25,
                      "CoinName": "Quetzal",
                      "TotalCoins": 1429
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "reiciendis",
                      "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                      "CoinId": 26,
                      "CoinName": "Quetzal",
                      "TotalCoins": 2643
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Veritatis est aspernatur aut iusto ratione.\nReprehenderit nostrum similique nesciunt neque fuga.\nDistinctio occaecati dicta voluptatem quaerat quas qui repudiandae.\nFugiat ducimus ea beatae dolorem adipisci itaque et qui.\nSit rerum nulla maxime quos magni aspernatur rerum.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 27,
                      "CoinName": "Jamaican Dollar",
                      "TotalCoins": 1087
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "et",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 28,
                      "CoinName": "Hong Kong Dollar",
                      "TotalCoins": 921
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "ipsam",
                      "CoinIconUrl": "http://lorempixel.com/640/480/business",
                      "CoinId": 29,
                      "CoinName": "Pa'anga",
                      "TotalCoins": 445
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/city",
              "CoinName": "Czech Koruna",
              "CreateDate": "/Date(1531463267720-0300)/",
              "EndDateAvailable": "/Date(1534667951750-0300)/",
              "ItemDescription": "quasi",
              "ItemName": "Refined Concrete Towels",
              "Price": 7022,
              "QuantityAvailable": 2,
              "StartDateAvailable": "/Date(1532681815744-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Sit nesciunt et eum quo atque sint. Et aut aliquam rerum qui. Esse cupiditate enim quibusdam alias deleniti non aut. Quis vel voluptas. Necessitatibus nihil quia excepturi explicabo provident velit modi. Sit quidem iusto ea.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 30,
                      "CoinName": "Syrian Pound",
                      "TotalCoins": 376
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "ipsam",
                      "CoinIconUrl": "http://lorempixel.com/640/480/business",
                      "CoinId": 31,
                      "CoinName": "Pound Sterling",
                      "TotalCoins": 41
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Exercitationem nam sint dolores dolores similique accusamus qui et. Optio exercitationem neque ex earum ea aliquam. Cum commodi rerum minus. Reiciendis possimus ea et et qui debitis repellendus. Unde minima ut sed. Voluptatem quo et error sed.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 32,
                      "CoinName": "East Caribbean Dollar",
                      "TotalCoins": 1284
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Tempore possimus est corporis animi. Natus doloribus itaque autem. Quasi et labore facere. Rem placeat aut quia voluptate aspernatur incidunt ex laborum. Odit et perferendis unde repellendus molestias ut ex voluptates. Veritatis et rerum.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 33,
                      "CoinName": "Rand",
                      "TotalCoins": 1632
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Voluptatem exercitationem consequatur nulla a tempora delectus quo et in.\nConsequatur est et et rerum reiciendis reprehenderit.\nFuga provident rerum sit harum facere unde.\nOmnis ducimus eos minus qui et dolorum deleniti consequatur.\nIpsum deserunt natus ut.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 34,
                      "CoinName": "US Dollar",
                      "TotalCoins": 999
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Ipsa qui similique aut.\nArchitecto laudantium iusto.\nMinus explicabo voluptate nihil consectetur reprehenderit alias nulla earum quo.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 35,
                      "CoinName": "Norwegian Krone",
                      "TotalCoins": 768
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Vitae dolorem qui. Ipsa veritatis ipsam distinctio minus quisquam exercitationem possimus cupiditate culpa. Quae nulla sint beatae. Eos aliquid ipsam corrupti. Et reiciendis neque illum repellendus doloremque. Quia aperiam asperiores quidem ipsa delectus eligendi aperiam explicabo.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 36,
                      "CoinName": "Solomon Islands Dollar",
                      "TotalCoins": 2009
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "quam",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 37,
                      "CoinName": "Sudanese Pound",
                      "TotalCoins": 837
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "qui",
                      "CoinIconUrl": "http://lorempixel.com/640/480/people",
                      "CoinId": 38,
                      "CoinName": "Som",
                      "TotalCoins": 2202
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Vitae voluptatem voluptas hic eligendi sed. Corrupti officia occaecati alias debitis qui quae. Autem saepe facilis. In incidunt voluptas dolore ut autem nulla doloremque natus. Quaerat quia eos blanditiis.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 39,
                      "CoinName": "Malagasy Ariary",
                      "TotalCoins": 2825
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/food",
              "CoinName": "Mauritius Rupee",
              "CreateDate": "/Date(1531454012242-0300)/",
              "EndDateAvailable": "/Date(1537256531871-0300)/",
              "ItemDescription": "molestias",
              "ItemName": "Unbranded Granite Chips",
              "Price": 2758,
              "QuantityAvailable": 10,
              "StartDateAvailable": "/Date(1532466888793-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Quia aut nesciunt et et corporis in nulla molestias.\nNisi voluptas qui.\nQuam occaecati explicabo ratione blanditiis eum nam laborum necessitatibus.\nNostrum at voluptatem quo atque.\nDoloremque harum esse aliquam perferendis.\nRatione nihil eaque dolorum recusandae.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 40,
                      "CoinName": "Tugrik",
                      "TotalCoins": 1468
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "repellat",
                      "CoinIconUrl": "http://lorempixel.com/640/480/food",
                      "CoinId": 41,
                      "CoinName": "Cordoba Oro",
                      "TotalCoins": 2526
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Blanditiis sed molestias.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/business",
                      "CoinId": 42,
                      "CoinName": "Cordoba Oro",
                      "TotalCoins": 2857
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "id",
                      "CoinIconUrl": "http://lorempixel.com/640/480/city",
                      "CoinId": 43,
                      "CoinName": "Azerbaijanian Manat",
                      "TotalCoins": 2969
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Architecto quis reprehenderit aut quo qui provident hic in. Quasi at at est facilis facere est culpa. Illo molestias quia nostrum facere voluptatibus culpa velit est et.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                      "CoinId": 44,
                      "CoinName": "Sudanese Pound",
                      "TotalCoins": 932
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Velit enim eius consequatur libero natus.\nQui aut sed sit perferendis porro velit laboriosam magni.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                      "CoinId": 45,
                      "CoinName": "Dong",
                      "TotalCoins": 1032
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "quidem",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 46,
                      "CoinName": "Platinum",
                      "TotalCoins": 755
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Quo possimus asperiores exercitationem soluta quia omnis vel ea tenetur.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/city",
                      "CoinId": 47,
                      "CoinName": "Syrian Pound",
                      "TotalCoins": 884
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Amet inventore sunt nesciunt maxime ea. Numquam sunt eum error qui sapiente possimus repudiandae aut. Nemo consequuntur non necessitatibus sit ut vero a assumenda repellat. In distinctio itaque voluptas ut vero et cumque. Id sunt in modi vitae. Temporibus maiores labore in velit rem fugiat.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/city",
                      "CoinId": 48,
                      "CoinName": "Canadian Dollar",
                      "TotalCoins": 2239
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Incidunt sed reiciendis commodi et illum et.\nEt quibusdam odit est non placeat.\nNumquam est doloribus consequatur.\nFacere officiis quisquam quis et ut error nostrum.\nSit est ut.\nAmet magni sed fugit.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 49,
                      "CoinName": "Malaysian Ringgit",
                      "TotalCoins": 791
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/nature",
              "CoinName": "Naira",
              "CreateDate": "/Date(1531434368787-0300)/",
              "EndDateAvailable": "/Date(1535814291736-0300)/",
              "ItemDescription": "Molestias quaerat dicta dolor et.",
              "ItemName": "Rustic Plastic Mouse",
              "Price": 1159,
              "QuantityAvailable": 0,
              "StartDateAvailable": "/Date(1532457442391-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Eos ex dolor voluptatem omnis.\nVoluptatem dolorum et aut est fugiat.\nIn velit nobis minima beatae nostrum aut.\nAut totam repellat consectetur rerum explicabo.\nEst inventore excepturi voluptatum quia aut.\nMaiores ea quam.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                      "CoinId": 50,
                      "CoinName": "New Zealand Dollar",
                      "TotalCoins": 716
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Placeat nesciunt ut aliquid tempore.\nCupiditate enim at est.\nNecessitatibus repellendus eum.\nEum mollitia nulla.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                      "CoinId": 51,
                      "CoinName": "Lebanese Pound",
                      "TotalCoins": 646
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Veniam vero perspiciatis voluptatem id perferendis.\nEarum libero odio atque iste architecto aut.\nMaiores sed rem ut repellat aspernatur dolorum deserunt esse.\nFacilis dolorum recusandae itaque fugit et fuga maiores.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                      "CoinId": 52,
                      "CoinName": "Moldovan Leu",
                      "TotalCoins": 1033
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "sed",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 53,
                      "CoinName": "US Dollar",
                      "TotalCoins": 2846
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Eum cupiditate quod id id perferendis eaque ullam.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                      "CoinId": 54,
                      "CoinName": "Brazilian Real",
                      "TotalCoins": 1984
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "et",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 55,
                      "CoinName": "Falkland Islands Pound",
                      "TotalCoins": 1943
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Similique ratione quo excepturi consequatur adipisci aliquid rem omnis.\nQuas sed dolor illum.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 56,
                      "CoinName": "UAE Dirham",
                      "TotalCoins": 591
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "quia",
                      "CoinIconUrl": "http://lorempixel.com/640/480/city",
                      "CoinId": 57,
                      "CoinName": "US Dollar",
                      "TotalCoins": 1808
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "pariatur",
                      "CoinIconUrl": "http://lorempixel.com/640/480/food",
                      "CoinId": 58,
                      "CoinName": "Leone",
                      "TotalCoins": 1113
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Omnis quaerat autem doloremque. Mollitia illum nobis dolorem. Quia nesciunt veritatis. Quibusdam aut excepturi qui tempore. Doloribus non dolores perspiciatis voluptatibus et.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/business",
                      "CoinId": 59,
                      "CoinName": "Pa'anga",
                      "TotalCoins": 983
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/cats",
              "CoinName": "Djibouti Franc",
              "CreateDate": "/Date(1531428204524-0300)/",
              "EndDateAvailable": "/Date(1537832376051-0300)/",
              "ItemDescription": "Iste maxime pariatur. Minus veniam occaecati quas molestiae molestiae sunt perferendis quas mollitia. Vero ut enim.",
              "ItemName": "Ergonomic Soft Mouse",
              "Price": 1251,
              "QuantityAvailable": 1,
              "StartDateAvailable": "/Date(1531626682397-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "ea",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 60,
                      "CoinName": "Kuwaiti Dinar",
                      "TotalCoins": 2913
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "nisi",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 61,
                      "CoinName": "Dominican Peso",
                      "TotalCoins": 1991
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Accusantium nihil sed velit quam et. Ad et voluptate recusandae. Aut facere et voluptates et dolor exercitationem voluptatem neque.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                      "CoinId": 62,
                      "CoinName": "Lithuanian Litas",
                      "TotalCoins": 1367
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Qui adipisci et sit rerum. Modi quam porro quidem autem repellendus illum vitae. Voluptas eaque reprehenderit magnam officia aut.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/city",
                      "CoinId": 63,
                      "CoinName": "New Israeli Sheqel",
                      "TotalCoins": 905
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Non distinctio inventore praesentium. Voluptas blanditiis quae ut animi aut. Non perferendis adipisci. Et molestias dignissimos vitae.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 64,
                      "CoinName": "Pakistan Rupee",
                      "TotalCoins": 1258
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Quas suscipit error est ipsa nihil reiciendis.\nIllo in repudiandae exercitationem reiciendis et iusto ullam iusto molestias.\nInventore temporibus consequuntur optio.\nDolores praesentium tempora hic amet et.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 65,
                      "CoinName": "Codes specifically reserved for testing purposes",
                      "TotalCoins": 2751
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Voluptates quo et omnis quia eos officia rerum numquam totam. Eos ipsa maiores blanditiis provident sint. Vel quidem et iste qui adipisci accusantium nihil vel. Neque vel eligendi cum quisquam quia. Libero cupiditate quas libero maiores odit laborum.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                      "CoinId": 66,
                      "CoinName": "Gibraltar Pound",
                      "TotalCoins": 2320
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "quaerat",
                      "CoinIconUrl": "http://lorempixel.com/640/480/people",
                      "CoinId": 67,
                      "CoinName": "Bahraini Dinar",
                      "TotalCoins": 1200
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Ex aliquam blanditiis cupiditate esse quia odit est quo est.\nQui quisquam praesentium repellendus aut aut explicabo reprehenderit provident.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/food",
                      "CoinId": 68,
                      "CoinName": "Kyat",
                      "TotalCoins": 1773
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Nulla rerum reiciendis ipsum aut facilis velit. Esse et voluptatibus magnam. Alias necessitatibus vitae eius asperiores earum nihil quibusdam. Non iure molestiae sit unde blanditiis porro nam aperiam. Vero assumenda voluptatem omnis eos id tempore.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                      "CoinId": 69,
                      "CoinName": "Comoro Franc",
                      "TotalCoins": 875
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/cats",
              "CoinName": "Afghani",
              "CreateDate": "/Date(1531476757834-0300)/",
              "EndDateAvailable": "/Date(1538058904358-0300)/",
              "ItemDescription": "Similique iste quis molestiae repellat eos omnis. Minus officia quod et aspernatur a qui facere aperiam in. Eveniet id aut modi et quia. Fugit quas atque enim ea qui. Sit necessitatibus nesciunt nostrum est qui.",
              "ItemName": "Fantastic Frozen Chair",
              "Price": 451,
              "QuantityAvailable": 7,
              "StartDateAvailable": "/Date(1533807911277-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Et et et ducimus eum temporibus praesentium suscipit possimus.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 70,
                      "CoinName": "Kenyan Shilling",
                      "TotalCoins": 72
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Nesciunt laudantium beatae et.\nPraesentium molestiae illum cum necessitatibus.\nVeritatis hic facere similique eaque omnis.\nEt commodi minus dolores et tempora et qui.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                      "CoinId": 71,
                      "CoinName": "Euro",
                      "TotalCoins": 82
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Ipsa nihil nostrum quia quis perspiciatis nesciunt. Vel est earum voluptas qui iure. Sed sint voluptatem. Quidem aut dolores voluptatem quo at quidem. Et molestiae temporibus maiores dolores optio. Et ab minima porro voluptatum quia.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 72,
                      "CoinName": "Solomon Islands Dollar",
                      "TotalCoins": 2754
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Iusto sed sapiente.\nEt dolorem magni deleniti unde soluta qui.\nEst architecto labore iste accusantium repellendus.\nEt voluptates deleniti hic quaerat quibusdam temporibus totam non.\nCulpa distinctio voluptatem tenetur.\nAperiam iure sapiente ad iste delectus error.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 73,
                      "CoinName": "US Dollar",
                      "TotalCoins": 1117
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "dolorem",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 74,
                      "CoinName": "Hryvnia",
                      "TotalCoins": 984
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Consequuntur tenetur qui nihil quo.\nCumque velit quaerat ut sit corporis sint quae.\nPariatur deserunt placeat.\nVoluptas veritatis et quia.\nIusto unde sapiente quam laudantium necessitatibus nobis.\nAd soluta voluptatum.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 75,
                      "CoinName": "Gold",
                      "TotalCoins": 777
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Maxime iure ex occaecati minus. Consequatur dolorum id ratione nisi aperiam quia eius eum. Ut neque soluta. Id consequatur veniam recusandae doloremque.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                      "CoinId": 76,
                      "CoinName": "US Dollar",
                      "TotalCoins": 2875
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Voluptatem in optio neque.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                      "CoinId": 77,
                      "CoinName": "Australian Dollar",
                      "TotalCoins": 2742
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "velit",
                      "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                      "CoinId": 78,
                      "CoinName": "New Taiwan Dollar",
                      "TotalCoins": 1623
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "rem",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 79,
                      "CoinName": "Somali Shilling",
                      "TotalCoins": 2393
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/food",
              "CoinName": "Turkish Lira",
              "CreateDate": "/Date(1531415772638-0300)/",
              "EndDateAvailable": "/Date(1534349336232-0300)/",
              "ItemDescription": "Odit quam quos eveniet quia ab. Ea sapiente accusantium praesentium molestias illo explicabo. Ex ut dolores et saepe numquam quod adipisci temporibus. Ipsam impedit dolore nisi dolor. Officia quasi temporibus.",
              "ItemName": "Tasty Cotton Bike",
              "Price": 9168,
              "QuantityAvailable": 6,
              "StartDateAvailable": "/Date(1532475611860-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Delectus sed nesciunt perferendis quidem illo id quia minus.\nCommodi modi nihil ut.\nNisi quia veritatis dolor earum accusamus odio ut laudantium reiciendis.\nEt occaecati et et praesentium neque atque consequatur qui fugit.\nIncidunt nihil qui ut totam suscipit fuga.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 80,
                      "CoinName": "US Dollar",
                      "TotalCoins": 2144
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "voluptatem",
                      "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                      "CoinId": 81,
                      "CoinName": "Iranian Rial",
                      "TotalCoins": 1205
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Optio eaque nihil fuga eius dolorum odit cumque velit quod. Qui omnis autem sunt ea ducimus deserunt ea. Facilis consectetur qui. Illo et deleniti nobis. Omnis impedit explicabo officiis dolor at adipisci repellat odit.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 82,
                      "CoinName": "Baht",
                      "TotalCoins": 690
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "voluptas",
                      "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                      "CoinId": 83,
                      "CoinName": "East Caribbean Dollar",
                      "TotalCoins": 931
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Sit molestias quam nostrum quas rerum atque sunt repellendus eos. Recusandae iusto doloremque id enim animi. Eveniet ea nisi praesentium iste officiis quisquam quia iste sed. Quia magnam eum iusto consequatur non qui qui rerum.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/city",
                      "CoinId": 84,
                      "CoinName": "Kroon",
                      "TotalCoins": 1543
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Aut maiores harum consequatur velit sapiente quo nostrum.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                      "CoinId": 85,
                      "CoinName": "Pataca",
                      "TotalCoins": 1831
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Eum dicta veniam facere nam necessitatibus deserunt. Et et sit qui quo officia. Nulla aut fugit nulla et. Corrupti maxime autem vero velit a debitis praesentium. Aut et ut ipsam.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                      "CoinId": 86,
                      "CoinName": "Saint Helena Pound",
                      "TotalCoins": 697
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Corrupti consequatur enim reprehenderit.\nRepellat nihil est magni.\nEst aut atque quo eveniet laboriosam corrupti eveniet aliquam.\nQuo eaque et eligendi reprehenderit et in dolorum aut laborum.\nEt accusantium at.\nAtque iusto ea quo.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/food",
                      "CoinId": 87,
                      "CoinName": "Manat",
                      "TotalCoins": 810
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Occaecati quam deleniti architecto.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 88,
                      "CoinName": "Croatian Kuna",
                      "TotalCoins": 2664
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Sunt et alias modi animi dicta. Occaecati dolor dolor vitae et deserunt velit et. Sit voluptas cum. Quo eaque dolores accusamus et et.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                      "CoinId": 89,
                      "CoinName": "North Korean Won",
                      "TotalCoins": 2602
                  }
              ]
          },
          {
              "Error": false,
              "ErrorList": [],
              "CoinIconUrl": "http://lorempixel.com/640/480/sports",
              "CoinName": "Kuwaiti Dinar",
              "CreateDate": "/Date(1531443223686-0300)/",
              "EndDateAvailable": "/Date(1536933299876-0300)/",
              "ItemDescription": "Voluptates qui ea quos vel ipsum perspiciatis aut laborum.",
              "ItemName": "Rustic Steel Keyboard",
              "Price": 8854,
              "QuantityAvailable": 0,
              "StartDateAvailable": "/Date(1532087797632-0300)/",
              "UserCoins": [
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Id sed sed.\nQuisquam cum sed ut.\nFacilis quia earum ad quibusdam quas vitae nobis.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/people",
                      "CoinId": 90,
                      "CoinName": "Sudanese Pound",
                      "TotalCoins": 1514
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Molestiae quo aperiam rerum sed non. Esse molestiae ullam illo autem cumque. Est dolores harum sunt voluptatem. Pariatur et excepturi dicta nesciunt dolores aut sit natus impedit.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 91,
                      "CoinName": "European Monetary Unit (E.M.U.-6)",
                      "TotalCoins": 328
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Et et dignissimos eius possimus perferendis reiciendis quod.\nEum velit sint necessitatibus.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                      "CoinId": 92,
                      "CoinName": "Zloty",
                      "TotalCoins": 2261
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Hic qui ea ut.\nVero eius ratione modi ut illo.\nVoluptas quos voluptatibus qui impedit placeat explicabo.\nSed nisi doloremque facere error aut.\nQuo dolorem beatae et sit est vel eligendi.\nDoloremque non aut eveniet quibusdam eum occaecati vero voluptas voluptas.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 93,
                      "CoinName": "Kip",
                      "TotalCoins": 2671
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "impedit",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                      "CoinId": 94,
                      "CoinName": "US Dollar",
                      "TotalCoins": 1979
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Enim amet vel voluptatem ratione et aperiam quibusdam.\nQuibusdam inventore aut dolores earum adipisci est nihil dolorem quia.\nQuisquam hic ad rerum quidem aperiam.\nAtque voluptas sequi sunt tempora eum ut dolores quo esse.\nQuis et nostrum quae sed mollitia eum.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                      "CoinId": 95,
                      "CoinName": "New Zealand Dollar",
                      "TotalCoins": 2300
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Cupiditate modi hic ea repudiandae iusto soluta fugit tempore. Totam quibusdam impedit fugiat qui a dignissimos. Enim velit qui non dolores cum. Cum fugit natus atque quia ratione similique velit. Cumque nesciunt deserunt eos quibusdam. Dolorem quaerat sunt quod in ea necessitatibus repellat aliquid deserunt.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/city",
                      "CoinId": 96,
                      "CoinName": "Forint",
                      "TotalCoins": 1461
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Sunt ad laborum labore voluptatem quia et.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                      "CoinId": 97,
                      "CoinName": "US Dollar",
                      "TotalCoins": 2699
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 0,
                      "CoinDescription": "Similique commodi nemo nobis.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                      "CoinId": 98,
                      "CoinName": "Norwegian Krone",
                      "TotalCoins": 581
                  },
                  {
                      "Error": false,
                      "ErrorList": [],
                      "CoinChangeType": 1,
                      "CoinDescription": "Nisi repellendus sed.",
                      "CoinIconUrl": "http://lorempixel.com/640/480/business",
                      "CoinId": 99,
                      "CoinName": "Indian Rupee",
                      "TotalCoins": 2563
                  }
              ]
          }
      ],
      "Total": 0
  });
});

app.get('/UBIMobileService/Gamification/User/Achievements', (req, res) => {
  res.status(200).json({
    "Error": false,
    "ErrorList": [],
    "NextPage": false,
    "Records": [
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1530734803476-0300)/",
            "AchievementDescription": "Sequi velit doloremque quas quae repellendus quia et nam.\nQuis illo quam provident exercitationem quaerat et.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/people",
            "AchievementName": "Conquista 0",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "at",
            "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
            "AchievementName": "Conquista 1",
            "AchievementType": 1
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "laudantium",
            "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
            "AchievementName": "Conquista 2",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1531059555711-0300)/",
            "AchievementDescription": "Fugiat ad dolor. Ab similique quisquam similique. Rerum possimus id nesciunt earum deleniti et et alias recusandae. Iste nesciunt dolores. Sed sit dolorem accusamus nam vero fugiat iste debitis non.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/food",
            "AchievementName": "Conquista 3",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1531430054068-0300)/",
            "AchievementDescription": "ipsam",
            "AchievementIconUrl": "http://lorempixel.com/640/480/city",
            "AchievementName": "Conquista 4",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Hic occaecati ipsam eum et eius non.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
            "AchievementName": "Conquista 5",
            "AchievementType": 1
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1530918070888-0300)/",
            "AchievementDescription": "Aperiam ea at ut explicabo consequatur velit eos.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
            "AchievementName": "Conquista 6",
            "AchievementType": 1
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "itaque",
            "AchievementIconUrl": "http://lorempixel.com/640/480/people",
            "AchievementName": "Conquista 7",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1531228552638-0300)/",
            "AchievementDescription": "Voluptatem et facilis iste quo incidunt et.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/people",
            "AchievementName": "Conquista 8",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "eius",
            "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
            "AchievementName": "Conquista 9",
            "AchievementType": 0
        }
    ],
    "Total": 0
});
});

app.get('/UBIMobileService/Gamification/User/Profile', (req, res) => {
  res.status(200).json({
    "Error": false,
    "ErrorList": [],
    "Active": false,
    "BirthDate": "/Date(1358312891386-0200)/",
    "CityCode": 0,
    "CityLatitude": null,
    "CityLongitude": null,
    "CityName": null,
    "ClientId": 1,
    "CreateDate": "/Date(1531497392533-0300)/",
    "Document": "530.242.917-92",
    "Email": "Bruna1@hotmail.com",
    "GenderId": 0,
    "Id": 0,
    "IsAdmin": false,
    "IsExternalUser": false,
    "Product": 5,
    "StateAcronym": null,
    "StateAreaCode": 0,
    "StateName": null,
    "UpdateDate": null,
    "Updated": true,
    "UserDeviceInstance": {
        "Error": false,
        "ErrorList": [],
        "Active": false,
        "AppRegistrationId": null,
        "DeviceUUID": "fnl9qiexkcm1fzt35ml73ujs20lav62k3zgwfifie4350o4wj290ohck",
        "EndpointPush": null,
        "Id": 2,
        "OsSmartphone": 1,
        "PhoneNumber": "+55 (67) 5831-4626",
        "SerialNumber": "uj3kgrq9bewomyp02a02y51guwvc3wsm05j2fskho1kptsgwj0r50t2o",
        "Updated": false,
        "UserId": 0
    },
    "UserName": "Sammy",
    "AvatarIconUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/aaroni/128.jpg",
    "GeneralRankingPosition": 80,
    "LevelName": "Nível 3",
    "UserAchievements": [
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "est",
            "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
            "AchievementName": "Conquista 10",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Itaque ducimus quas.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
            "AchievementName": "Conquista 11",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1530975730116-0300)/",
            "AchievementDescription": "temporibus",
            "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
            "AchievementName": "Conquista 12",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1531234563410-0300)/",
            "AchievementDescription": "Eligendi possimus illum ut inventore necessitatibus et rerum eveniet quibusdam.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/people",
            "AchievementName": "Conquista 13",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1530992615218-0300)/",
            "AchievementDescription": "Est aut itaque.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
            "AchievementName": "Conquista 14",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Quibusdam in est iure illum nihil voluptatem dolorem.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
            "AchievementName": "Conquista 15",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Enim consequatur id magni.\nVoluptatem sint quas.\nEt quasi molestias voluptas et eius.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
            "AchievementName": "Conquista 16",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1530955553729-0300)/",
            "AchievementDescription": "Itaque magnam vitae sunt mollitia.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/nightlife",
            "AchievementName": "Conquista 17",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1530851450683-0300)/",
            "AchievementDescription": "Omnis iusto eos consequatur quos voluptatem quia veniam. Eius cupiditate maxime. Sit velit dolorum earum.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/business",
            "AchievementName": "Conquista 18",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Cupiditate eaque totam fugiat distinctio dolores quos. Necessitatibus nulla beatae consectetur ex rem rerum fugit itaque voluptatibus. Porro qui suscipit eveniet. Quis ut molestiae est explicabo non.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
            "AchievementName": "Conquista 19",
            "AchievementType": 2
        }
    ],
    "UserCoins": [
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 1,
            "CoinDescription": "Soluta incidunt magnam doloribus necessitatibus consectetur atque aut illum ex.",
            "CoinIconUrl": "http://lorempixel.com/640/480/people",
            "CoinId": 100,
            "CoinName": "Egyptian Pound",
            "TotalCoins": 1373
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 0,
            "CoinDescription": "Sint blanditiis tenetur consequatur dignissimos aspernatur. Qui et aspernatur autem. Quia sed quis est eius ad facere unde possimus consequatur. Ea id esse. Suscipit sit eius incidunt ad.",
            "CoinIconUrl": "http://lorempixel.com/640/480/food",
            "CoinId": 101,
            "CoinName": "Kyat",
            "TotalCoins": 420
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 0,
            "CoinDescription": "Labore magni aperiam nulla est sunt odit modi laborum.",
            "CoinIconUrl": "http://lorempixel.com/640/480/animals",
            "CoinId": 102,
            "CoinName": "Somoni",
            "TotalCoins": 385
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 1,
            "CoinDescription": "quia",
            "CoinIconUrl": "http://lorempixel.com/640/480/animals",
            "CoinId": 103,
            "CoinName": "Nakfa",
            "TotalCoins": 446
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 0,
            "CoinDescription": "Repellendus aut vel.\nEt aspernatur dignissimos.\nVeritatis officia incidunt.",
            "CoinIconUrl": "http://lorempixel.com/640/480/city",
            "CoinId": 104,
            "CoinName": "Iranian Rial",
            "TotalCoins": 1869
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 0,
            "CoinDescription": "Magnam excepturi aut nesciunt accusantium sed voluptatibus maiores aspernatur ipsam. Doloribus ea ut animi non nisi. Aperiam et modi aut. Non sunt porro eveniet necessitatibus quia omnis dolorum autem. Iure nisi possimus modi fuga at.",
            "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
            "CoinId": 105,
            "CoinName": "Malagasy Ariary",
            "TotalCoins": 2639
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 0,
            "CoinDescription": "distinctio",
            "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
            "CoinId": 106,
            "CoinName": "UAE Dirham",
            "TotalCoins": 988
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 1,
            "CoinDescription": "Officiis sunt voluptas et id. Quasi enim corporis explicabo dolor. Optio et natus sit natus nulla maiores. Corporis molestiae officia nisi aut et accusamus sit.",
            "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
            "CoinId": 107,
            "CoinName": "Dobra",
            "TotalCoins": 428
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 1,
            "CoinDescription": "Sint laboriosam dolorum aspernatur sit.",
            "CoinIconUrl": "http://lorempixel.com/640/480/transport",
            "CoinId": 108,
            "CoinName": "Iceland Krona",
            "TotalCoins": 1626
        },
        {
            "Error": false,
            "ErrorList": [],
            "CoinChangeType": 0,
            "CoinDescription": "Et aperiam excepturi dolorem assumenda ut. Natus illo ducimus quas quam ut dicta voluptate illo. Id hic in enim iusto impedit eius in praesentium.",
            "CoinIconUrl": "http://lorempixel.com/640/480/sports",
            "CoinId": 109,
            "CoinName": "Quetzal",
            "TotalCoins": 488
        }
    ],
    "UserPrizes": [
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Itaque qui ut vero ut aut consequatur.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
            "PrizeName": "Gorgeous Cotton Pizza",
            "QuantityAvailable": 5
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Eum amet eos illo perspiciatis molestiae nihil porro. A eos sit consequuntur illo amet amet voluptatem ducimus ea. Doloribus amet voluptatum omnis enim. Aut sapiente quia nihil dolorum. Enim voluptate rem aspernatur ipsam quibusdam earum adipisci.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
            "PrizeName": "Awesome Metal Gloves",
            "QuantityAvailable": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Minima vel voluptate eos. Quia nam facilis impedit officia maxime ut. Maxime molestias laudantium laboriosam ea repudiandae. Culpa sunt accusamus laudantium quas dolorem et voluptatibus. In laboriosam reprehenderit in voluptas soluta dolorem. Possimus fugit rerum.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/nature",
            "PrizeName": "Handcrafted Fresh Bike",
            "QuantityAvailable": 9
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Et amet error aut consequatur neque.\nConsectetur excepturi earum ea qui quaerat nobis odit.\nDolore aliquid et est.\nNobis dignissimos culpa.\nUt reiciendis facere cumque qui.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/food",
            "PrizeName": "Fantastic Metal Car",
            "QuantityAvailable": 9
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Provident iure labore.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
            "PrizeName": "Practical Rubber Shoes",
            "QuantityAvailable": 5
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Quisquam aliquam voluptatum.\nConsequatur ab molestiae illum quod voluptatibus sint aperiam.\nOfficiis corrupti consequatur non.\nVoluptatem soluta sed possimus quia porro delectus.\nOmnis sunt consequatur consequatur sit fuga veniam sint.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
            "PrizeName": "Incredible Steel Shirt",
            "QuantityAvailable": 4
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Nam id doloremque perferendis.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/city",
            "PrizeName": "Handcrafted Metal Chair",
            "QuantityAvailable": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Consequatur vero sapiente dolores omnis id sit dolores.\nDucimus autem quibusdam saepe facere ut voluptas ipsa cumque.\nExcepturi facilis non ut voluptatem sunt cumque laborum in.\nSimilique quam qui ipsam voluptatibus.\nVeritatis quasi ipsam et ut.\nAut ullam numquam incidunt ut sed animi temporibus molestiae.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
            "PrizeName": "Gorgeous Steel Sausages",
            "QuantityAvailable": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Vel ipsa veritatis consequuntur id.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/business",
            "PrizeName": "Handmade Plastic Chips",
            "QuantityAvailable": 3
        },
        {
            "Error": false,
            "ErrorList": [],
            "PrizeDescription": "Est est quibusdam pariatur. Voluptas incidunt voluptas et at culpa perferendis temporibus. Est quia explicabo a maiores quibusdam maxime aliquam enim. Nulla incidunt libero perferendis sit cum facere quia quia.",
            "PrizeIconUrl": "http://lorempixel.com/640/480/fashion",
            "PrizeName": "Small Rubber Shoes",
            "QuantityAvailable": 7
        }
    ]
});
});

app.get('/UBIMobileService/Trip/List', (req, res) => {
  res.status(200).json({
    "Error": false,
    "ErrorList": [],
    "NextPage": false,
    "Trips": [
        {
            "AmountEvents": 799,
            "AmountSpeedAbove120Highway": 66.411655902122916,
            "AmountSpeedAbove60Urban": 113.11693082243062,
            "AmountSuddenAcceleration": 207,
            "AmountSuddenBraking": 715,
            "AmountSuddenCurve": 471,
            "Distance": 243,
            "DistanceDawn": 543,
            "EndDateFormatted": "2018-07-13T06:02:30Z",
            "EndDateUTC": "/Date(1531472550629-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 155,
            "Id_Solr": "b2seabu6ovkjexpuk88d",
            "Score": 60,
            "ScoreBraking": 90,
            "ScoreDawn": 50,
            "ScoreDistance": 66,
            "ScoreDistraction": 366,
            "ScoreFatigue": 507,
            "ScoreSoftness": 836,
            "ScoreSpeed": 100,
            "SecondsAboveSpeed": 22197,
            "SecondsDuration": 40320,
            "SecondsPhone": 362,
            "SpeedAvg": 139.48267103148748,
            "SpeedAvgMoving": null,
            "SpeedMax": 243.24243317375308,
            "StartDateFormatted": "2018-07-12T13:54:48Z",
            "StartDateUTC": "/Date(1531414488948-0300)/",
            "TotalTime": 672,
            "TripGuid": null,
            "TripType": 839
        },
        {
            "AmountEvents": 305,
            "AmountSpeedAbove120Highway": 58.459996026223521,
            "AmountSpeedAbove60Urban": 78.301099063037469,
            "AmountSuddenAcceleration": 209,
            "AmountSuddenBraking": 776,
            "AmountSuddenCurve": 633,
            "Distance": 737,
            "DistanceDawn": 297,
            "EndDateFormatted": "2018-07-13T09:34:58Z",
            "EndDateUTC": "/Date(1531485298980-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 156,
            "Id_Solr": "ipnwdpqgfa0szfkmdrev",
            "Score": 92,
            "ScoreBraking": 63,
            "ScoreDawn": 54,
            "ScoreDistance": 19,
            "ScoreDistraction": 179,
            "ScoreFatigue": 709,
            "ScoreSoftness": 571,
            "ScoreSpeed": 75,
            "SecondsAboveSpeed": 10490,
            "SecondsDuration": 14340,
            "SecondsPhone": 321,
            "SpeedAvg": 71.4329189022225,
            "SpeedAvgMoving": null,
            "SpeedMax": 126.72913744801895,
            "StartDateFormatted": "2018-07-13T04:08:10Z",
            "StartDateUTC": "/Date(1531465690503-0300)/",
            "TotalTime": 239,
            "TripGuid": null,
            "TripType": 308
        },
        {
            "AmountEvents": 105,
            "AmountSpeedAbove120Highway": 90.882878289969113,
            "AmountSpeedAbove60Urban": 133.03009211692498,
            "AmountSuddenAcceleration": 359,
            "AmountSuddenBraking": 967,
            "AmountSuddenCurve": 9,
            "Distance": 728,
            "DistanceDawn": 614,
            "EndDateFormatted": "2018-07-13T07:40:28Z",
            "EndDateUTC": "/Date(1531478428983-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 157,
            "Id_Solr": "ri71qr9vmry5yj48y766",
            "Score": 15,
            "ScoreBraking": 17,
            "ScoreDawn": 92,
            "ScoreDistance": 2,
            "ScoreDistraction": 78,
            "ScoreFatigue": 613,
            "ScoreSoftness": 393,
            "ScoreSpeed": 10,
            "SecondsAboveSpeed": 15483,
            "SecondsDuration": 21120,
            "SecondsPhone": 473,
            "SpeedAvg": 95.7879043257739,
            "SpeedAvgMoving": null,
            "SpeedMax": 152.51186338875979,
            "StartDateFormatted": "2018-07-13T06:15:30Z",
            "StartDateUTC": "/Date(1531473330470-0300)/",
            "TotalTime": 352,
            "TripGuid": null,
            "TripType": 440
        },
        {
            "AmountEvents": 291,
            "AmountSpeedAbove120Highway": 132.1055872655034,
            "AmountSpeedAbove60Urban": 101.76416583441392,
            "AmountSuddenAcceleration": 47,
            "AmountSuddenBraking": 20,
            "AmountSuddenCurve": 168,
            "Distance": 34,
            "DistanceDawn": 623,
            "EndDateFormatted": "2018-07-13T06:07:37Z",
            "EndDateUTC": "/Date(1531472857449-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 158,
            "Id_Solr": "8jibu0u4184ru4v084qq",
            "Score": 85,
            "ScoreBraking": 66,
            "ScoreDawn": 12,
            "ScoreDistance": 22,
            "ScoreDistraction": 352,
            "ScoreFatigue": 594,
            "ScoreSoftness": 362,
            "ScoreSpeed": 45,
            "SecondsAboveSpeed": 31370,
            "SecondsDuration": 36180,
            "SecondsPhone": 138,
            "SpeedAvg": 55.166822963006247,
            "SpeedAvgMoving": null,
            "SpeedMax": 98.822532129979749,
            "StartDateFormatted": "2018-07-13T13:30:13Z",
            "StartDateUTC": "/Date(1531499413039-0300)/",
            "TotalTime": 603,
            "TripGuid": null,
            "TripType": 281
        },
        {
            "AmountEvents": 395,
            "AmountSpeedAbove120Highway": 103.97039917482547,
            "AmountSpeedAbove60Urban": 132.99604897526839,
            "AmountSuddenAcceleration": 418,
            "AmountSuddenBraking": 153,
            "AmountSuddenCurve": 583,
            "Distance": 90,
            "DistanceDawn": 395,
            "EndDateFormatted": "2018-07-12T18:15:05Z",
            "EndDateUTC": "/Date(1531430105268-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 159,
            "Id_Solr": "rsd58yh7h2pnmpmtz0tw",
            "Score": 27,
            "ScoreBraking": 12,
            "ScoreDawn": 15,
            "ScoreDistance": 64,
            "ScoreDistraction": 875,
            "ScoreFatigue": 390,
            "ScoreSoftness": 217,
            "ScoreSpeed": 81,
            "SecondsAboveSpeed": 8900,
            "SecondsDuration": 13200,
            "SecondsPhone": 49,
            "SpeedAvg": 97.651209448301785,
            "SpeedAvgMoving": null,
            "SpeedMax": 139.4769265368347,
            "StartDateFormatted": "2018-07-13T06:30:28Z",
            "StartDateUTC": "/Date(1531474228684-0300)/",
            "TotalTime": 220,
            "TripGuid": null,
            "TripType": 878
        },
        {
            "AmountEvents": 213,
            "AmountSpeedAbove120Highway": 68.207321748234023,
            "AmountSpeedAbove60Urban": 126.20524119874707,
            "AmountSuddenAcceleration": 348,
            "AmountSuddenBraking": 290,
            "AmountSuddenCurve": 243,
            "Distance": 531,
            "DistanceDawn": 441,
            "EndDateFormatted": "2018-07-13T01:27:56Z",
            "EndDateUTC": "/Date(1531456076547-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 160,
            "Id_Solr": "x82h8udte484mtgqb1p3",
            "Score": 94,
            "ScoreBraking": 5,
            "ScoreDawn": 94,
            "ScoreDistance": 9,
            "ScoreDistraction": 672,
            "ScoreFatigue": 490,
            "ScoreSoftness": 592,
            "ScoreSpeed": 59,
            "SecondsAboveSpeed": 4948,
            "SecondsDuration": 15060,
            "SecondsPhone": 61,
            "SpeedAvg": 50.621213815464273,
            "SpeedAvgMoving": null,
            "SpeedMax": 99.976992437058669,
            "StartDateFormatted": "2018-07-13T01:28:37Z",
            "StartDateUTC": "/Date(1531456117636-0300)/",
            "TotalTime": 251,
            "TripGuid": null,
            "TripType": 501
        },
        {
            "AmountEvents": 127,
            "AmountSpeedAbove120Highway": 77.721616815646,
            "AmountSpeedAbove60Urban": 132.72414368238492,
            "AmountSuddenAcceleration": 769,
            "AmountSuddenBraking": 521,
            "AmountSuddenCurve": 373,
            "Distance": 392,
            "DistanceDawn": 641,
            "EndDateFormatted": "2018-07-13T10:17:57Z",
            "EndDateUTC": "/Date(1531487877466-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 161,
            "Id_Solr": "d5wd1bw6987b48ehvdr9",
            "Score": 42,
            "ScoreBraking": 63,
            "ScoreDawn": 88,
            "ScoreDistance": 44,
            "ScoreDistraction": 174,
            "ScoreFatigue": 984,
            "ScoreSoftness": 582,
            "ScoreSpeed": 39,
            "SecondsAboveSpeed": 10583,
            "SecondsDuration": 13860,
            "SecondsPhone": 376,
            "SpeedAvg": 97.5478595763202,
            "SpeedAvgMoving": null,
            "SpeedMax": 133.9406933450245,
            "StartDateFormatted": "2018-07-12T14:32:14Z",
            "StartDateUTC": "/Date(1531416734448-0300)/",
            "TotalTime": 231,
            "TripGuid": null,
            "TripType": 621
        },
        {
            "AmountEvents": 21,
            "AmountSpeedAbove120Highway": 115.12043949455042,
            "AmountSpeedAbove60Urban": 108.13099402381619,
            "AmountSuddenAcceleration": 570,
            "AmountSuddenBraking": 558,
            "AmountSuddenCurve": 631,
            "Distance": 923,
            "DistanceDawn": 655,
            "EndDateFormatted": "2018-07-13T02:05:14Z",
            "EndDateUTC": "/Date(1531458314967-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 162,
            "Id_Solr": "98dn842z259tpq82h4m4",
            "Score": 83,
            "ScoreBraking": 84,
            "ScoreDawn": 24,
            "ScoreDistance": 62,
            "ScoreDistraction": 526,
            "ScoreFatigue": 951,
            "ScoreSoftness": 80,
            "ScoreSpeed": 96,
            "SecondsAboveSpeed": 11751,
            "SecondsDuration": 16380,
            "SecondsPhone": 352,
            "SpeedAvg": 114.320549277738,
            "SpeedAvgMoving": null,
            "SpeedMax": 148.91364289740835,
            "StartDateFormatted": "2018-07-13T00:21:27Z",
            "StartDateUTC": "/Date(1531452087719-0300)/",
            "TotalTime": 273,
            "TripGuid": null,
            "TripType": 764
        },
        {
            "AmountEvents": 122,
            "AmountSpeedAbove120Highway": 60.952024730365736,
            "AmountSpeedAbove60Urban": 121.08215756299074,
            "AmountSuddenAcceleration": 346,
            "AmountSuddenBraking": 397,
            "AmountSuddenCurve": 43,
            "Distance": 44,
            "DistanceDawn": 270,
            "EndDateFormatted": "2018-07-12T19:03:53Z",
            "EndDateUTC": "/Date(1531433033132-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 163,
            "Id_Solr": "pxip8desq0uba6u24cla",
            "Score": 87,
            "ScoreBraking": 29,
            "ScoreDawn": 71,
            "ScoreDistance": 3,
            "ScoreDistraction": 399,
            "ScoreFatigue": 437,
            "ScoreSoftness": 125,
            "ScoreSpeed": 94,
            "SecondsAboveSpeed": 13581,
            "SecondsDuration": 16800,
            "SecondsPhone": 698,
            "SpeedAvg": 103.40946201393821,
            "SpeedAvgMoving": null,
            "SpeedMax": 178.01747575001994,
            "StartDateFormatted": "2018-07-13T03:33:00Z",
            "StartDateUTC": "/Date(1531463580595-0300)/",
            "TotalTime": 280,
            "TripGuid": null,
            "TripType": 420
        },
        {
            "AmountEvents": 791,
            "AmountSpeedAbove120Highway": 134.2156917016095,
            "AmountSpeedAbove60Urban": 72.206875426791086,
            "AmountSuddenAcceleration": 779,
            "AmountSuddenBraking": 567,
            "AmountSuddenCurve": 169,
            "Distance": 679,
            "DistanceDawn": 306,
            "EndDateFormatted": "2018-07-13T08:57:12Z",
            "EndDateUTC": "/Date(1531483032446-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 164,
            "Id_Solr": "tdo7wxqw6hikgz0s38yw",
            "Score": 39,
            "ScoreBraking": 65,
            "ScoreDawn": 76,
            "ScoreDistance": 85,
            "ScoreDistraction": 645,
            "ScoreFatigue": 839,
            "ScoreSoftness": 284,
            "ScoreSpeed": 100,
            "SecondsAboveSpeed": 17611,
            "SecondsDuration": 43140,
            "SecondsPhone": 545,
            "SpeedAvg": 89.311903104796954,
            "SpeedAvgMoving": null,
            "SpeedMax": 136.68935828515993,
            "StartDateFormatted": "2018-07-13T06:50:44Z",
            "StartDateUTC": "/Date(1531475444458-0300)/",
            "TotalTime": 719,
            "TripGuid": null,
            "TripType": 18
        },
        {
            "AmountEvents": 926,
            "AmountSpeedAbove120Highway": 112.5164501892945,
            "AmountSpeedAbove60Urban": 81.207321649979491,
            "AmountSuddenAcceleration": 160,
            "AmountSuddenBraking": 511,
            "AmountSuddenCurve": 77,
            "Distance": 361,
            "DistanceDawn": 908,
            "EndDateFormatted": "2018-07-13T08:30:20Z",
            "EndDateUTC": "/Date(1531481420539-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 165,
            "Id_Solr": "snp24degtu5jkpzyq41e",
            "Score": 55,
            "ScoreBraking": 50,
            "ScoreDawn": 55,
            "ScoreDistance": 32,
            "ScoreDistraction": 734,
            "ScoreFatigue": 429,
            "ScoreSoftness": 569,
            "ScoreSpeed": 72,
            "SecondsAboveSpeed": 8066,
            "SecondsDuration": 29700,
            "SecondsPhone": 5,
            "SpeedAvg": 116.66821746931794,
            "SpeedAvgMoving": null,
            "SpeedMax": 190.93697603535196,
            "StartDateFormatted": "2018-07-12T23:14:12Z",
            "StartDateUTC": "/Date(1531448052888-0300)/",
            "TotalTime": 495,
            "TripGuid": null,
            "TripType": 931
        },
        {
            "AmountEvents": 156,
            "AmountSpeedAbove120Highway": 81.479994431827208,
            "AmountSpeedAbove60Urban": 59.541914569932,
            "AmountSuddenAcceleration": 312,
            "AmountSuddenBraking": 108,
            "AmountSuddenCurve": 756,
            "Distance": 757,
            "DistanceDawn": 411,
            "EndDateFormatted": "2018-07-13T12:31:34Z",
            "EndDateUTC": "/Date(1531495894620-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 166,
            "Id_Solr": "zukscclz6pzwj1oml7qc",
            "Score": 76,
            "ScoreBraking": 29,
            "ScoreDawn": 17,
            "ScoreDistance": 93,
            "ScoreDistraction": 168,
            "ScoreFatigue": 234,
            "ScoreSoftness": 608,
            "ScoreSpeed": 44,
            "SecondsAboveSpeed": 4494,
            "SecondsDuration": 7440,
            "SecondsPhone": 397,
            "SpeedAvg": 77.6183640480127,
            "SpeedAvgMoving": null,
            "SpeedMax": 140.46156892167323,
            "StartDateFormatted": "2018-07-12T16:45:34Z",
            "StartDateUTC": "/Date(1531424734513-0300)/",
            "TotalTime": 124,
            "TripGuid": null,
            "TripType": 266
        },
        {
            "AmountEvents": 394,
            "AmountSpeedAbove120Highway": 78.609409014978169,
            "AmountSpeedAbove60Urban": 72.850506558479054,
            "AmountSuddenAcceleration": 958,
            "AmountSuddenBraking": 737,
            "AmountSuddenCurve": 608,
            "Distance": 862,
            "DistanceDawn": 914,
            "EndDateFormatted": "2018-07-13T12:43:08Z",
            "EndDateUTC": "/Date(1531496588021-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 167,
            "Id_Solr": "6anv0v248ocycgg1opta",
            "Score": 57,
            "ScoreBraking": 2,
            "ScoreDawn": 77,
            "ScoreDistance": 86,
            "ScoreDistraction": 565,
            "ScoreFatigue": 224,
            "ScoreSoftness": 184,
            "ScoreSpeed": 86,
            "SecondsAboveSpeed": 19088,
            "SecondsDuration": 26760,
            "SecondsPhone": 626,
            "SpeedAvg": 74.454405188772085,
            "SpeedAvgMoving": null,
            "SpeedMax": 113.96203076441461,
            "StartDateFormatted": "2018-07-12T21:30:53Z",
            "StartDateUTC": "/Date(1531441853461-0300)/",
            "TotalTime": 446,
            "TripGuid": null,
            "TripType": 355
        },
        {
            "AmountEvents": 897,
            "AmountSpeedAbove120Highway": 56.963212041632836,
            "AmountSpeedAbove60Urban": 118.71213839795075,
            "AmountSuddenAcceleration": 573,
            "AmountSuddenBraking": 163,
            "AmountSuddenCurve": 712,
            "Distance": 16,
            "DistanceDawn": 163,
            "EndDateFormatted": "2018-07-12T20:18:24Z",
            "EndDateUTC": "/Date(1531437504869-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 168,
            "Id_Solr": "3xedo7dyw9flbcurkp3y",
            "Score": 47,
            "ScoreBraking": 7,
            "ScoreDawn": 85,
            "ScoreDistance": 9,
            "ScoreDistraction": 264,
            "ScoreFatigue": 606,
            "ScoreSoftness": 296,
            "ScoreSpeed": 94,
            "SecondsAboveSpeed": 15089,
            "SecondsDuration": 36600,
            "SecondsPhone": 168,
            "SpeedAvg": 123.5998704720288,
            "SpeedAvgMoving": null,
            "SpeedMax": 199.13449997612349,
            "StartDateFormatted": "2018-07-12T14:07:01Z",
            "StartDateUTC": "/Date(1531415221709-0300)/",
            "TotalTime": 610,
            "TripGuid": null,
            "TripType": 235
        },
        {
            "AmountEvents": 568,
            "AmountSpeedAbove120Highway": 102.38292148913393,
            "AmountSpeedAbove60Urban": 123.85209891193178,
            "AmountSuddenAcceleration": 540,
            "AmountSuddenBraking": 788,
            "AmountSuddenCurve": 743,
            "Distance": 287,
            "DistanceDawn": 739,
            "EndDateFormatted": "2018-07-13T04:51:38Z",
            "EndDateUTC": "/Date(1531468298625-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 169,
            "Id_Solr": "ogdyu8nlxs9576h5qc2j",
            "Score": 29,
            "ScoreBraking": 23,
            "ScoreDawn": 44,
            "ScoreDistance": 89,
            "ScoreDistraction": 868,
            "ScoreFatigue": 637,
            "ScoreSoftness": 915,
            "ScoreSpeed": 20,
            "SecondsAboveSpeed": 16152,
            "SecondsDuration": 16800,
            "SecondsPhone": 402,
            "SpeedAvg": 120.95108127731415,
            "SpeedAvgMoving": null,
            "SpeedMax": 228.56366585492535,
            "StartDateFormatted": "2018-07-13T11:57:01Z",
            "StartDateUTC": "/Date(1531493821922-0300)/",
            "TotalTime": 280,
            "TripGuid": null,
            "TripType": 747
        },
        {
            "AmountEvents": 925,
            "AmountSpeedAbove120Highway": 98.845430700502092,
            "AmountSpeedAbove60Urban": 107.74092908377801,
            "AmountSuddenAcceleration": 928,
            "AmountSuddenBraking": 262,
            "AmountSuddenCurve": 147,
            "Distance": 81,
            "DistanceDawn": 640,
            "EndDateFormatted": "2018-07-13T04:46:53Z",
            "EndDateUTC": "/Date(1531468013665-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 170,
            "Id_Solr": "khn4fs6m8u2hkgq196n1",
            "Score": 15,
            "ScoreBraking": 71,
            "ScoreDawn": 73,
            "ScoreDistance": 55,
            "ScoreDistraction": 234,
            "ScoreFatigue": 390,
            "ScoreSoftness": 300,
            "ScoreSpeed": 62,
            "SecondsAboveSpeed": 26227,
            "SecondsDuration": 29940,
            "SecondsPhone": 214,
            "SpeedAvg": 131.4369935688735,
            "SpeedAvgMoving": null,
            "SpeedMax": 201.35410752354994,
            "StartDateFormatted": "2018-07-13T02:59:26Z",
            "StartDateUTC": "/Date(1531461566349-0300)/",
            "TotalTime": 499,
            "TripGuid": null,
            "TripType": 884
        },
        {
            "AmountEvents": 923,
            "AmountSpeedAbove120Highway": 76.991628695741127,
            "AmountSpeedAbove60Urban": 110.16893463217139,
            "AmountSuddenAcceleration": 241,
            "AmountSuddenBraking": 909,
            "AmountSuddenCurve": 520,
            "Distance": 573,
            "DistanceDawn": 804,
            "EndDateFormatted": "2018-07-13T04:20:59Z",
            "EndDateUTC": "/Date(1531466459259-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 171,
            "Id_Solr": "zqjjsihw7q6yt2kpgga0",
            "Score": 59,
            "ScoreBraking": 33,
            "ScoreDawn": 11,
            "ScoreDistance": 24,
            "ScoreDistraction": 780,
            "ScoreFatigue": 403,
            "ScoreSoftness": 437,
            "ScoreSpeed": 2,
            "SecondsAboveSpeed": 10581,
            "SecondsDuration": 20100,
            "SecondsPhone": 64,
            "SpeedAvg": 60.091773578939851,
            "SpeedAvgMoving": null,
            "SpeedMax": 120.01759138465097,
            "StartDateFormatted": "2018-07-13T05:07:01Z",
            "StartDateUTC": "/Date(1531469221104-0300)/",
            "TotalTime": 335,
            "TripGuid": null,
            "TripType": 466
        },
        {
            "AmountEvents": 414,
            "AmountSpeedAbove120Highway": 74.264369380783464,
            "AmountSpeedAbove60Urban": 139.36390595946642,
            "AmountSuddenAcceleration": 306,
            "AmountSuddenBraking": 985,
            "AmountSuddenCurve": 287,
            "Distance": 302,
            "DistanceDawn": 765,
            "EndDateFormatted": "2018-07-13T03:43:25Z",
            "EndDateUTC": "/Date(1531464205293-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 172,
            "Id_Solr": "b4ojmnk1x29jeu2o0oh5",
            "Score": 69,
            "ScoreBraking": 90,
            "ScoreDawn": 44,
            "ScoreDistance": 87,
            "ScoreDistraction": 411,
            "ScoreFatigue": 396,
            "ScoreSoftness": 667,
            "ScoreSpeed": 80,
            "SecondsAboveSpeed": 5474,
            "SecondsDuration": 10020,
            "SecondsPhone": 92,
            "SpeedAvg": 58.0764964213951,
            "SpeedAvgMoving": null,
            "SpeedMax": 98.374510960692092,
            "StartDateFormatted": "2018-07-13T12:59:10Z",
            "StartDateUTC": "/Date(1531497550582-0300)/",
            "TotalTime": 167,
            "TripGuid": null,
            "TripType": 801
        },
        {
            "AmountEvents": 251,
            "AmountSpeedAbove120Highway": 125.14038271975721,
            "AmountSpeedAbove60Urban": 50.628892141687167,
            "AmountSuddenAcceleration": 810,
            "AmountSuddenBraking": 93,
            "AmountSuddenCurve": 114,
            "Distance": 663,
            "DistanceDawn": 836,
            "EndDateFormatted": "2018-07-13T08:28:00Z",
            "EndDateUTC": "/Date(1531481280153-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 173,
            "Id_Solr": "tagzqml9b96hytsujfm3",
            "Score": 62,
            "ScoreBraking": 80,
            "ScoreDawn": 73,
            "ScoreDistance": 81,
            "ScoreDistraction": 216,
            "ScoreFatigue": 622,
            "ScoreSoftness": 630,
            "ScoreSpeed": 15,
            "SecondsAboveSpeed": 23351,
            "SecondsDuration": 34140,
            "SecondsPhone": 542,
            "SpeedAvg": 101.2881149730124,
            "SpeedAvgMoving": null,
            "SpeedMax": 188.17398282249636,
            "StartDateFormatted": "2018-07-12T15:58:31Z",
            "StartDateUTC": "/Date(1531421911250-0300)/",
            "TotalTime": 569,
            "TripGuid": null,
            "TripType": 85
        },
        {
            "AmountEvents": 739,
            "AmountSpeedAbove120Highway": 61.76785686601319,
            "AmountSpeedAbove60Urban": 80.9315073308216,
            "AmountSuddenAcceleration": 924,
            "AmountSuddenBraking": 934,
            "AmountSuddenCurve": 924,
            "Distance": 174,
            "DistanceDawn": 574,
            "EndDateFormatted": "2018-07-13T00:59:00Z",
            "EndDateUTC": "/Date(1531454340899-0300)/",
            "HasTypeAutomaticallyClassified": false,
            "Id": 174,
            "Id_Solr": "bj9vw6t3tqg8wmxikk9h",
            "Score": 63,
            "ScoreBraking": 91,
            "ScoreDawn": 41,
            "ScoreDistance": 41,
            "ScoreDistraction": 488,
            "ScoreFatigue": 194,
            "ScoreSoftness": 27,
            "ScoreSpeed": 36,
            "SecondsAboveSpeed": 10753,
            "SecondsDuration": 15360,
            "SecondsPhone": 275,
            "SpeedAvg": 89.92284682575746,
            "SpeedAvgMoving": null,
            "SpeedMax": 169.89392901566785,
            "StartDateFormatted": "2018-07-12T22:50:48Z",
            "StartDateUTC": "/Date(1531446648052-0300)/",
            "TotalTime": 256,
            "TripGuid": null,
            "TripType": 209
        }
    ]
});
});

app.post('/UBIMobileService/Trip/SetType', (req, res) => {
  res.status(200).json({
    "error": false,
    "ErrorList": [],
    "status": "OK"
  });
});

app.post('/UBIMobileService/User/Login', (req, res) => {

  if (req.body.Email !== 'ti.ceabs@gmail.com') {
    return res.status(401).json({
        "Error": true,
        "ErrorList": [
          "Unauthorized"
        ]
    });
  }

  res.status(200).json({
      "Error": false,
      "ErrorList": [],
      "BirthDate": null,
      "BirthDateFormatted": null,
      "CreateDate": "/Date(1509040433000-0200)/",
      "CreateDateFormatted": "2017-10-26T15:53:53Z",
      "GenderId": 1,
      "Serial": "BRA0000000000000301",
      "Token": "55baa0d3-7b92-45ac-a51b-2a9b711b1c32",
      "UserName": "TI CEABS Gmail"
  });
});

app.get('/UBIMobileService/Gamification/User/Achievements', (req, res) => {
  res.status(200).json({
    "Error": false,
    "ErrorList": [],
    "NextPage": false,
    "Records": [
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1531168787645-0300)/",
            "AchievementDescription": "deleniti",
            "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
            "AchievementName": "Conquista 120",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1530909451677-0300)/",
            "AchievementDescription": "Consequatur laboriosam eos.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/city",
            "AchievementName": "Conquista 121",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1531440997217-0300)/",
            "AchievementDescription": "Adipisci harum accusamus esse. Aspernatur cupiditate unde ea facere. Voluptatibus illo dolores. Repellat consectetur illo. Sed sequi quo perspiciatis labore quaerat. Qui est repellendus.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/food",
            "AchievementName": "Conquista 122",
            "AchievementType": 1
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Assumenda qui assumenda numquam facilis autem et ipsam.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
            "AchievementName": "Conquista 123",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1531362539299-0300)/",
            "AchievementDescription": "Consequuntur occaecati perspiciatis facere accusantium atque dicta et nesciunt.\nFacilis officiis voluptas rerum.\nDolorem doloribus qui eos ullam.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/business",
            "AchievementName": "Conquista 124",
            "AchievementType": 1
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Qui quo veniam.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/food",
            "AchievementName": "Conquista 125",
            "AchievementType": 2
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "sit",
            "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
            "AchievementName": "Conquista 126",
            "AchievementType": 1
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": "/Date(1530703509138-0300)/",
            "AchievementDescription": "soluta",
            "AchievementIconUrl": "http://lorempixel.com/640/480/business",
            "AchievementName": "Conquista 127",
            "AchievementType": 1
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Esse temporibus quo optio dolor. In nihil soluta possimus molestiae itaque dicta magnam nisi est. Quo voluptatum minus et aliquid. Placeat qui quo dolorum voluptatibus vel omnis autem voluptate.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
            "AchievementName": "Conquista 128",
            "AchievementType": 0
        },
        {
            "Error": false,
            "ErrorList": [],
            "AchievementDate": null,
            "AchievementDescription": "Ducimus blanditiis et.\nEt vel quas veritatis molestiae.",
            "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
            "AchievementName": "Conquista 129",
            "AchievementType": 2
        }
    ],
    "Total": 0
});
});

app.get('/UBIMobileService/Gamification/User/Challenges', (req, res) => {
  res.status(200).json({
    "Error": false,
    "ErrorList": [],
    "NextPage": false,
    "Records": [
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "Voluptatem architecto aut beatae neque sed voluptatem nobis. Sed et fugiat repellendus reprehenderit tenetur possimus. Unde tenetur dolor iusto porro.",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/sports",
            "ChallengeId": 0,
            "ChallengeName": "Desafio 0",
            "IsCompleted": true,
            "PercentCompletion": 27,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "aut",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 20",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Atque provident suscipit et dolore voluptatem. Provident necessitatibus et sit et. Incidunt labore modi occaecati quaerat fugiat et ut. Minima natus consequatur itaque et nobis placeat.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
                    "AchievementName": "Conquista 21",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Quam nihil dolores ullam recusandae ut ut dolorem asperiores quia.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 22",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Eos corrupti quia itaque magnam omnis doloribus nemo quis deserunt.\nEos minus consequatur eos laboriosam quia illum quibusdam voluptatem.\nUt delectus commodi quisquam quis iusto nesciunt ea alias ut.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/abstract",
                    "AchievementName": "Conquista 23",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531207813055-0300)/",
                    "AchievementDescription": "Dolorem est molestias doloribus natus nemo sed nobis quaerat enim. Labore voluptas cupiditate sint magnam et labore. Voluptas eius delectus laboriosam eum hic quis.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 24",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530931798587-0300)/",
                    "AchievementDescription": "Labore aliquid est voluptatem.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "AchievementName": "Conquista 25",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "aperiam",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/abstract",
                    "AchievementName": "Conquista 26",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531362211325-0300)/",
                    "AchievementDescription": "Tempora voluptatem ratione.\nQuaerat facere sed nemo cum ipsa.\nVeritatis commodi accusantium quo.\nCommodi alias reiciendis officiis voluptas minus a eveniet eos mollitia.\nItaque numquam dolor fugiat.\nNihil rerum et veniam ad tempore reiciendis animi.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 27",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "animi",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 28",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530852939471-0300)/",
                    "AchievementDescription": "Optio hic ut.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "AchievementName": "Conquista 29",
                    "AchievementType": 0
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Dolores non quos.\nQuisquam deserunt et laborum eligendi voluptatem autem molestiae.\nSaepe aperiam maxime quaerat impedit quia et reiciendis eveniet porro.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                    "CoinId": 110,
                    "CoinName": "New Leu",
                    "TotalCoins": 887
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Ipsam doloremque sit. Nisi quo distinctio sapiente neque esse aut dolorum. Sunt voluptatem occaecati quam animi enim quas.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 111,
                    "CoinName": "CFA Franc BCEAO",
                    "TotalCoins": 1177
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "animi",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "CoinId": 112,
                    "CoinName": "Philippine Peso",
                    "TotalCoins": 485
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Harum impedit nisi dolore dolor omnis quia.\nUllam perspiciatis omnis.\nEx corporis fuga nobis a officiis suscipit nihil.\nNihil commodi rerum unde harum quod eius.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/business",
                    "CoinId": 113,
                    "CoinName": "Comoro Franc",
                    "TotalCoins": 2218
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "A eum aut.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                    "CoinId": 114,
                    "CoinName": "Syrian Pound",
                    "TotalCoins": 152
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Voluptate harum necessitatibus.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                    "CoinId": 115,
                    "CoinName": "CFP Franc",
                    "TotalCoins": 2605
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "omnis",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 116,
                    "CoinName": "Trinidad and Tobago Dollar",
                    "TotalCoins": 192
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Optio perspiciatis consequatur aut sint et aut alias.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 117,
                    "CoinName": "SDR",
                    "TotalCoins": 1045
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Quis possimus aut et tenetur consequatur distinctio officiis.\nAliquid commodi mollitia amet odio tempore.\nDoloremque ipsa ut in optio labore nulla quas omnis id.\nSimilique iusto hic et explicabo occaecati et aperiam.\nSapiente ad iure optio eaque tempore consequatur placeat omnis et.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 118,
                    "CoinName": "Nakfa",
                    "TotalCoins": 1944
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Dignissimos aut non quae.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 119,
                    "CoinName": "New Israeli Sheqel",
                    "TotalCoins": 296
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Est enim architecto ut voluptate soluta.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Incredible Cotton Computer",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "officiis",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Handcrafted Rubber Hat",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Molestiae est velit doloribus doloribus dicta ea dolor. Quia rerum labore. Accusantium minima eum aliquid voluptatem ut laboriosam similique unde.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/technics",
                    "PrizeName": "Handcrafted Frozen Car",
                    "QuantityAvailable": 6
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Corporis ipsum ut et ullam.\nNam ad quam mollitia et in et.\nOfficia repellendus alias quasi.\nIllum quidem et hic placeat veritatis debitis omnis.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/sports",
                    "PrizeName": "Unbranded Wooden Bacon",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Omnis saepe consequatur.\nDistinctio dolorem architecto minus autem est doloribus recusandae.\nMaiores sed ipsum quod voluptatibus harum qui eum.\nMollitia aut quam nulla.\nConsectetur id quia earum pariatur rerum incidunt vel saepe.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Licensed Concrete Fish",
                    "QuantityAvailable": 3
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "in",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Small Metal Towels",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Qui explicabo earum harum iste exercitationem velit. Vel laboriosam rerum consequuntur ab. Qui doloribus qui ipsum tempora dolor in ut. Ipsum adipisci facilis sed id rem optio aut modi sapiente. Numquam facere alias animi quaerat animi quibusdam aperiam adipisci.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Tasty Wooden Pizza",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Soluta quod totam magni possimus fugit assumenda iusto voluptates. Laudantium quo sed consequatur distinctio dolorem aliquam provident iure. Quibusdam repudiandae fuga vel consequatur omnis libero dolores dolores fugit. Aut sint rerum exercitationem. Dolores nam praesentium quidem incidunt neque. Voluptas sit adipisci beatae rerum.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Ergonomic Granite Gloves",
                    "QuantityAvailable": 9
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Fugit dicta omnis reiciendis ducimus ad corporis quibusdam sed. Quia ipsum quasi dolor tempore officia architecto facere. Quidem error repellendus quae ipsum cumque est atque labore. Iusto ut perspiciatis asperiores cupiditate consequatur voluptate et deleniti. A vero omnis corporis. Officiis et officiis fugiat modi nobis quo temporibus.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Gorgeous Soft Hat",
                    "QuantityAvailable": 3
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Autem et tenetur aut reprehenderit omnis dolor unde.\nVoluptatem nobis deserunt natus quibusdam dolor perferendis atque quis.\nAutem at et perferendis nesciunt.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/nature",
                    "PrizeName": "Intelligent Plastic Chair",
                    "QuantityAvailable": 5
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "Quia eaque consequatur enim sed totam dolorem temporibus.",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/fashion",
            "ChallengeId": 1,
            "ChallengeName": "Desafio 1",
            "IsCompleted": true,
            "PercentCompletion": 28,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "qui",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 30",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530800664290-0300)/",
                    "AchievementDescription": "tempora",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 31",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Accusamus qui illo quibusdam vel repudiandae.\nEt modi est saepe quis reprehenderit.\nHarum asperiores esse.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 32",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Nesciunt id dolore.\nQui dolores adipisci cumque sit porro mollitia voluptatem minus et.\nQuis facilis incidunt aut dolore et et qui dolores.\nPerspiciatis est error qui sunt quam nisi excepturi alias.\nEst nam perspiciatis ea sunt culpa adipisci aliquid.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 33",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Iste fugiat nihil eum maiores non officiis aut.\nAnimi ea harum.\nMolestiae exercitationem aliquam.\nQui neque ab nihil aut officiis aut.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 34",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Nesciunt aut officiis sed officia.\nConsequuntur sit fugit eveniet iste nihil possimus minus hic vitae.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 35",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530876211575-0300)/",
                    "AchievementDescription": "Consequatur qui sapiente esse porro fugit.\nIllum rem earum ipsam.\nNon labore reprehenderit impedit.\nIure quo ab voluptatem voluptatem.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 36",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "In vitae possimus impedit eligendi accusamus vitae fuga. Voluptate et et vitae vitae deleniti dignissimos. Quam voluptas aperiam tempore et impedit vel. Voluptatem at est pariatur eos alias. Reprehenderit qui quasi vero iste. Quo quis nemo vitae fugiat reiciendis.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
                    "AchievementName": "Conquista 37",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531456660078-0300)/",
                    "AchievementDescription": "libero",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
                    "AchievementName": "Conquista 38",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "dolores",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 39",
                    "AchievementType": 2
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Commodi voluptate culpa rem itaque perferendis fuga necessitatibus ipsa.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 120,
                    "CoinName": "Lek",
                    "TotalCoins": 2183
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "minus",
                    "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                    "CoinId": 121,
                    "CoinName": "Cordoba Oro",
                    "TotalCoins": 579
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Impedit autem sunt eos in atque.\nAmet voluptate ea asperiores corporis totam similique.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/business",
                    "CoinId": 122,
                    "CoinName": "Manat",
                    "TotalCoins": 395
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Impedit deleniti explicabo velit nihil rerum itaque sunt.\nTempora quod mollitia ut.\nQuia eveniet quibusdam odio eos ad vero quia.\nMinus quis id.\nOmnis et veritatis minus.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                    "CoinId": 123,
                    "CoinName": "Azerbaijanian Manat",
                    "TotalCoins": 2080
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Sequi voluptas cum explicabo ipsum magni magnam impedit. Accusamus voluptatem illum suscipit et iusto. Nulla provident consequatur ea quia illum deleniti. Officia quia dolores maxime.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/business",
                    "CoinId": 124,
                    "CoinName": "Zimbabwe Dollar",
                    "TotalCoins": 2109
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Quis ullam mollitia.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                    "CoinId": 125,
                    "CoinName": "Guyana Dollar",
                    "TotalCoins": 2945
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Possimus nobis est fugit natus.\nPariatur laudantium non quia id suscipit ea occaecati molestias repellat.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 126,
                    "CoinName": "Lithuanian Litas",
                    "TotalCoins": 1538
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "impedit",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 127,
                    "CoinName": "Dominican Peso",
                    "TotalCoins": 992
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Iure debitis perspiciatis nihil amet in et. Eum amet ullam molestiae labore repellendus. Laudantium hic itaque architecto aliquam.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                    "CoinId": 128,
                    "CoinName": "Belize Dollar",
                    "TotalCoins": 2932
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Quis praesentium repellendus. Maiores voluptas recusandae eos dolore veritatis. Quia quia id unde magnam voluptatem numquam temporibus.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                    "CoinId": 129,
                    "CoinName": "Barbados Dollar",
                    "TotalCoins": 304
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Eaque eveniet voluptatum illum veritatis ut et. Mollitia voluptas ipsam distinctio corporis est ab in voluptatem voluptas. Et praesentium aspernatur expedita at aspernatur velit magni amet et. Modi voluptatem earum esse aut ut. Vel aut est maiores iste et iste. Magni fuga ad ab ea veritatis et aut quia inventore.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Licensed Cotton Mouse",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "et",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Generic Metal Pizza",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Illum quas expedita dolor libero et ducimus aut. Ut sunt vero dolores dolore laboriosam temporibus enim assumenda ea. Odit sapiente aspernatur et. Omnis numquam blanditiis perferendis id voluptate id. Ut officia natus omnis cumque quas voluptatem quos.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Awesome Wooden Fish",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Vero placeat necessitatibus.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Handmade Plastic Pants",
                    "QuantityAvailable": 5
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Fuga fugit est doloribus dicta numquam.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/fashion",
                    "PrizeName": "Fantastic Rubber Pizza",
                    "QuantityAvailable": 9
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Voluptatem quia libero ut nostrum ex tenetur. Aliquam quia mollitia ut. Blanditiis quia laboriosam placeat minus sequi consequatur beatae iure.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "PrizeName": "Rustic Soft Tuna",
                    "QuantityAvailable": 5
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Molestias et beatae id.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Small Cotton Mouse",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Molestiae eos error reprehenderit qui consequatur.\nEt temporibus eaque.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Incredible Metal Tuna",
                    "QuantityAvailable": 6
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Quo ipsum dolores delectus maxime est occaecati provident provident voluptas.\nDolorum sed dolorem aut voluptates et non eveniet aut incidunt.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Generic Granite Pizza",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Dolorem illum culpa.\nQuo est debitis a laudantium sed officiis.\nNostrum quo laboriosam maxime dolorem et omnis occaecati minus.\nUt nulla illo nobis facere aspernatur tempore occaecati ad.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Refined Cotton Shoes",
                    "QuantityAvailable": 0
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "Hic nemo et voluptate odio modi tenetur amet.",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/food",
            "ChallengeId": 2,
            "ChallengeName": "Desafio 2",
            "IsCompleted": true,
            "PercentCompletion": 23,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531349346209-0300)/",
                    "AchievementDescription": "Beatae minima unde placeat recusandae commodi voluptatibus totam. Et accusantium aut dolor quis earum voluptas eligendi. At magni reprehenderit odio aspernatur excepturi voluptatem ullam dolor.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 40",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Mollitia et est iusto dolores.\nQuisquam atque in.\nVel totam dignissimos nam et similique sit.\nSunt sed nisi quidem dolor eaque.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 41",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530977324928-0300)/",
                    "AchievementDescription": "Quis totam esse eligendi cumque sed aliquam cum.\nVoluptate voluptates et provident magni pariatur at fugit voluptate.\nQuos reprehenderit et iure voluptatem.\nVeritatis est aut dolores quos qui tenetur libero rerum explicabo.\nAccusantium aut perspiciatis qui beatae placeat enim impedit et est.\nEt in dolor totam sint nesciunt velit nostrum.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 42",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Dolor veniam perferendis a.\nFacilis eaque at dolorem.\nEt sint esse rerum.\nSoluta officia sit velit dolor.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 43",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531415325195-0300)/",
                    "AchievementDescription": "Praesentium sint harum labore et voluptatem eum. Doloremque eligendi voluptatum in alias accusamus est. Voluptas illo labore repellat est exercitationem ea aut omnis tempora. Illum laudantium quaerat ut dolorem earum illo in.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
                    "AchievementName": "Conquista 44",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Nemo maiores aut. Voluptate repudiandae nihil omnis cumque nihil omnis. Rerum dolorem excepturi eum est. Autem perferendis aut est sequi enim harum hic. Temporibus voluptas molestiae sunt nisi.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 45",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530820086228-0300)/",
                    "AchievementDescription": "Minus aut cumque iste sed laborum nobis aut voluptate.\nCommodi numquam veniam occaecati sunt sapiente.\nFugiat et reiciendis praesentium dolorum sint repellat.\nSit quia pariatur commodi dolor.\nDolores maxime vero.\nEt voluptate numquam aperiam optio rerum voluptas rerum.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 46",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Qui culpa saepe delectus ea aut consectetur. Veniam repellendus voluptate quo maxime tempora voluptas incidunt. Molestiae debitis nam iste quia quibusdam. Doloremque et minus. Mollitia veritatis cupiditate eum aut placeat qui. Labore omnis dolores provident quo cumque non.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 47",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530964004128-0300)/",
                    "AchievementDescription": "Quod vel rerum quia.\nConsequuntur repellendus autem.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
                    "AchievementName": "Conquista 48",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531351053456-0300)/",
                    "AchievementDescription": "modi",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 49",
                    "AchievementType": 0
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Non nisi tenetur at reprehenderit unde consequatur sint. Architecto excepturi molestiae voluptatem qui iusto quo. Animi minus ducimus voluptas possimus sequi quasi deserunt. Maiores enim veniam aut nesciunt incidunt dolor ab. Id modi quia id ut voluptatibus. Eius corporis magni.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 130,
                    "CoinName": "Moroccan Dirham",
                    "TotalCoins": 358
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Beatae ut pariatur quia consectetur aut voluptatem soluta error ut. Quam sint veniam dolore ut eligendi fugiat et. Et dolores laudantium qui sed pariatur. Repudiandae consequatur et nobis exercitationem autem voluptatem voluptatem rerum velit.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                    "CoinId": 131,
                    "CoinName": "Cordoba Oro",
                    "TotalCoins": 1024
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "libero",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 132,
                    "CoinName": "Palladium",
                    "TotalCoins": 2401
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Molestiae facere autem eum aperiam culpa beatae doloremque. Laboriosam itaque ut officiis optio at laboriosam et. Magni est et esse quam ad sed aut. Sit iusto id laudantium explicabo deleniti ipsum odio non.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 133,
                    "CoinName": "Jamaican Dollar",
                    "TotalCoins": 691
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Architecto ea mollitia sit aut officia ipsa ipsum.\nPorro dolorem similique perferendis suscipit aut exercitationem tempora.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                    "CoinId": 134,
                    "CoinName": "US Dollar",
                    "TotalCoins": 1779
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Cumque quaerat molestiae nihil nam nihil error quae eveniet. Ut accusamus itaque dolorum vero et reprehenderit error minus. Expedita id molestiae mollitia vel tempore. Vel quas in. Velit natus qui atque quo nam dolorum molestias. Voluptatem dolor libero labore maiores.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                    "CoinId": 135,
                    "CoinName": "European Monetary Unit (E.M.U.-6)",
                    "TotalCoins": 1814
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Qui totam numquam explicabo fugiat.\nEst asperiores quam placeat ut.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 136,
                    "CoinName": "Bond Markets Units European Composite Unit (EURCO)",
                    "TotalCoins": 444
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "eos",
                    "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                    "CoinId": 137,
                    "CoinName": "Guyana Dollar",
                    "TotalCoins": 2318
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Officiis itaque amet est.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 138,
                    "CoinName": "Azerbaijanian Manat",
                    "TotalCoins": 1198
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Illo sunt sint iure aut suscipit. Sint necessitatibus in. Ut velit voluptas et. Totam possimus eos molestiae.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                    "CoinId": 139,
                    "CoinName": "European Unit of Account 17(E.U.A.-17)",
                    "TotalCoins": 722
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Voluptatem fugiat distinctio earum facilis sunt eius eligendi.\nVoluptatem et omnis ut sed dolorem quidem officia.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Incredible Wooden Tuna",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "sit",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Handcrafted Wooden Sausages",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "ut",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/fashion",
                    "PrizeName": "Incredible Fresh Mouse",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Placeat cumque qui porro dolores molestiae libero.\nSit esse nihil sunt expedita hic commodi molestias.\nTempore rerum asperiores.\nFacere quis occaecati occaecati accusantium illum est.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/nature",
                    "PrizeName": "Refined Fresh Towels",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Sapiente porro numquam.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Gorgeous Steel Mouse",
                    "QuantityAvailable": 6
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Expedita culpa nam dolorum sit dolor.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/technics",
                    "PrizeName": "Gorgeous Plastic Keyboard",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Velit totam laborum saepe quae excepturi nesciunt est reprehenderit tempora.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Practical Steel Chips",
                    "QuantityAvailable": 4
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "impedit",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Licensed Fresh Chair",
                    "QuantityAvailable": 6
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Sequi quis necessitatibus commodi.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Unbranded Steel Pizza",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Reiciendis reprehenderit ipsam facilis. Dolorem ut ex minus eius. Et rerum necessitatibus cumque pariatur in reprehenderit.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/technics",
                    "PrizeName": "Fantastic Steel Tuna",
                    "QuantityAvailable": 3
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "praesentium",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/nature",
            "ChallengeId": 3,
            "ChallengeName": "Desafio 3",
            "IsCompleted": false,
            "PercentCompletion": 63,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530702163087-0300)/",
                    "AchievementDescription": "Illum ut assumenda consequatur vero consequatur quasi. Vero tenetur expedita eius mollitia. Quam recusandae eum. Deleniti tempora et iste et labore saepe nobis quia occaecati. Quidem sit atque exercitationem facilis sed eum ducimus.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "AchievementName": "Conquista 50",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Ducimus minus libero id non ipsa aut pariatur facilis ipsam.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 51",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530794820045-0300)/",
                    "AchievementDescription": "Quidem omnis libero modi.\nQuia et tenetur omnis officia atque ullam non ea ea.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 52",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531367817729-0300)/",
                    "AchievementDescription": "hic",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 53",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Asperiores sunt minima iste.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 54",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531425294956-0300)/",
                    "AchievementDescription": "Est excepturi natus placeat dolor autem blanditiis voluptatem.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 55",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Accusantium rerum modi. Architecto qui et natus consequatur non. Ad doloremque similique aut ab delectus dolores ut autem. Earum deleniti dolorem et voluptatem cupiditate labore expedita. Explicabo modi officia laudantium necessitatibus.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "AchievementName": "Conquista 56",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Iste illum sint aut nihil facere libero nam hic voluptas. Eveniet quam vitae voluptate illo non ab exercitationem consectetur ut. Quo rerum nobis error cum aliquid reprehenderit et. Architecto blanditiis quisquam iure distinctio dolore omnis animi est sunt.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
                    "AchievementName": "Conquista 57",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Quia id excepturi ratione animi ratione ab consequatur voluptatibus.\nEsse vero beatae voluptatem ad.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/abstract",
                    "AchievementName": "Conquista 58",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Aut assumenda qui cupiditate dolorum voluptates odio quas.\nRepellat occaecati accusamus tempora temporibus.\nAutem rem enim libero culpa soluta.\nUt quod optio aliquam quisquam minima molestias dolores dolore nisi.\nQuis quibusdam maxime.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
                    "AchievementName": "Conquista 59",
                    "AchievementType": 0
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Quam laboriosam quia sunt atque dolorum doloremque aliquid magni aperiam.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                    "CoinId": 140,
                    "CoinName": "Iraqi Dinar",
                    "TotalCoins": 2512
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Amet nesciunt repellat qui placeat.\nFacere at asperiores distinctio.\nQui repellendus non.\nSed consequatur non ea.\nDolorem ut distinctio voluptatum qui fugit.\nRepellat corporis a voluptas maiores.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                    "CoinId": 141,
                    "CoinName": "Comoro Franc",
                    "TotalCoins": 2859
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Libero neque blanditiis ut.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "CoinId": 142,
                    "CoinName": "Djibouti Franc",
                    "TotalCoins": 2788
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Ut et eum quos corporis laboriosam velit.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                    "CoinId": 143,
                    "CoinName": "Platinum",
                    "TotalCoins": 1569
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Omnis aperiam suscipit fugit ratione fuga in consequatur qui.\nQuaerat et aperiam non maxime optio unde amet assumenda.\nAspernatur iusto magni fugiat nobis voluptates sapiente alias nihil.\nPraesentium aperiam exercitationem cumque nobis blanditiis fuga vel consequatur quisquam.\nSaepe eos delectus ut inventore nemo ut quia et aut.\nEt inventore expedita fugit et et.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 144,
                    "CoinName": "Russian Ruble",
                    "TotalCoins": 1980
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Ea tempora rerum suscipit et quis quasi minus autem.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                    "CoinId": 145,
                    "CoinName": "Malaysian Ringgit",
                    "TotalCoins": 621
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "animi",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 146,
                    "CoinName": "Guinea Franc",
                    "TotalCoins": 2085
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Ipsum labore ipsa sunt omnis quia eum sunt veritatis ex. Commodi natus consequatur aut aut accusantium sint. Et sed vel sit ducimus illum quod ut. Quidem delectus dolor in quibusdam odio inventore impedit nostrum. Minus hic ut et maiores sint et recusandae. Deserunt excepturi et libero officiis ipsum minus.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 147,
                    "CoinName": "Pa'anga",
                    "TotalCoins": 163
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Culpa itaque explicabo in. Similique sed hic ea. Aliquid amet dolor eveniet ipsam dolorem nam fugiat. Dolores enim nostrum consequatur exercitationem et tempora veritatis deserunt cumque. Optio sint et est assumenda et necessitatibus earum. Commodi atque facilis aut rerum voluptatem.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 148,
                    "CoinName": "Norwegian Krone",
                    "TotalCoins": 2514
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Accusamus soluta repudiandae quis recusandae et tempore sapiente quas.\nDolore placeat maiores et ut inventore consequuntur.\nItaque est voluptate occaecati est nam.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/business",
                    "CoinId": 149,
                    "CoinName": "Tugrik",
                    "TotalCoins": 2929
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "quia",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Intelligent Fresh Bike",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Sunt ut laudantium vero a qui commodi a rerum nihil.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Small Concrete Bacon",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Doloremque dolore aut officiis dolorem.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/food",
                    "PrizeName": "Ergonomic Rubber Tuna",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Eum accusantium et.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Gorgeous Granite Car",
                    "QuantityAvailable": 5
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Illum aut sunt autem molestias.\nReiciendis qui animi in cumque quia similique.\nVeritatis voluptatem vel laboriosam culpa corrupti.\nAut ut quas in dicta.\nNatus maxime quia.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/food",
                    "PrizeName": "Refined Granite Sausages",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Et voluptas corrupti corrupti debitis voluptatum soluta illum. Voluptatem blanditiis culpa rerum id dicta sed rerum. Velit officia qui quam ducimus esse quo qui dolorem sit. Officia sunt nostrum non voluptatem est vel repellat fugiat. Molestiae qui culpa.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/food",
                    "PrizeName": "Incredible Frozen Ball",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Doloremque aliquid similique ratione. Adipisci voluptatem architecto et atque. Nam hic dicta quia dolorem. Corrupti aut enim. Aut non est voluptas.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/sports",
                    "PrizeName": "Ergonomic Wooden Towels",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Minus natus id est eum rerum. Quos molestiae sit occaecati fugit nesciunt harum. Harum earum fugit architecto molestiae. Non sint nihil autem eum.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/food",
                    "PrizeName": "Generic Plastic Chicken",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Numquam non iusto odio.\nId aliquid omnis minima non velit distinctio id.\nNobis perferendis quis iste.\nIusto sunt et rerum ipsam non repellat iusto laboriosam.\nDolorem sed eos neque repudiandae quam autem adipisci et.\nRem sunt omnis et doloribus aut.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Handcrafted Soft Chips",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Et sint nesciunt velit necessitatibus sed.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "PrizeName": "Gorgeous Granite Tuna",
                    "QuantityAvailable": 7
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "perferendis",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/transport",
            "ChallengeId": 4,
            "ChallengeName": "Desafio 4",
            "IsCompleted": true,
            "PercentCompletion": 73,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531036265087-0300)/",
                    "AchievementDescription": "Voluptas necessitatibus illum officiis aut minima eos ut.\nEst corporis autem eius.\nQuo voluptatem omnis omnis.\nEst possimus consequatur ut beatae maiores est corporis natus officia.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "AchievementName": "Conquista 60",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "quas",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 61",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530968730100-0300)/",
                    "AchievementDescription": "Quaerat et vel quisquam qui alias quia.\nSuscipit hic deserunt nulla itaque possimus doloribus id rerum.\nAut corporis hic et iure.\nVoluptatem dolores nam tempora corporis voluptatem laudantium sit repellat.\nPlaceat distinctio voluptatem ut.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 62",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530764224981-0300)/",
                    "AchievementDescription": "enim",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 63",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Aut et ut libero facilis at aut similique.\nSuscipit hic quas architecto atque.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 64",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530942276685-0300)/",
                    "AchievementDescription": "Dolorum sit libero et ipsum esse.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/abstract",
                    "AchievementName": "Conquista 65",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531421625558-0300)/",
                    "AchievementDescription": "Harum quos cum est. Aut aut nostrum optio alias ut. Ad consequuntur dolorem est hic ut. Exercitationem quidem consequatur tenetur voluptatibus molestiae et incidunt. Alias numquam sit esse nisi enim dignissimos asperiores qui.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/business",
                    "AchievementName": "Conquista 66",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531054590269-0300)/",
                    "AchievementDescription": "molestiae",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/abstract",
                    "AchievementName": "Conquista 67",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531101374929-0300)/",
                    "AchievementDescription": "Commodi ea rerum sit nemo.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 68",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "delectus",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 69",
                    "AchievementType": 0
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Soluta fugiat voluptatem placeat aut dolorem est qui vitae earum.\nRerum est itaque non quidem.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                    "CoinId": 150,
                    "CoinName": "Serbian Dinar",
                    "TotalCoins": 698
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Necessitatibus voluptatibus quis aperiam dolores eveniet. Nisi ratione reprehenderit non est quam. Expedita harum ea sed odit. Mollitia velit ad ea recusandae et et. Voluptatibus voluptatem inventore non et vel dolores voluptas. Temporibus minima omnis quidem mollitia dolores omnis cum.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 151,
                    "CoinName": "Kwanza",
                    "TotalCoins": 880
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "officiis",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "CoinId": 152,
                    "CoinName": "Congolese Franc",
                    "TotalCoins": 815
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Perferendis aut asperiores dolore est commodi eum suscipit.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                    "CoinId": 153,
                    "CoinName": "Bolivar Fuerte",
                    "TotalCoins": 119
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Aliquam iste et alias minima quisquam soluta. Iure ea sint et dignissimos iste error. Occaecati expedita inventore fuga est veniam corporis. Incidunt nemo eius tenetur deserunt quasi vitae voluptatem veritatis. Dolore sunt consequatur at velit. Sit et id necessitatibus quaerat dignissimos eum omnis nesciunt ratione.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "CoinId": 154,
                    "CoinName": "Danish Krone",
                    "TotalCoins": 2497
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Ipsa assumenda ut et qui. Voluptatem ad aliquam. Eos enim rem incidunt nam blanditiis quasi nostrum consectetur. Esse id temporibus et odio autem dignissimos omnis. Et eligendi molestiae ad voluptas quia dicta. Corrupti id corrupti quis.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 155,
                    "CoinName": "Iraqi Dinar",
                    "TotalCoins": 1756
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Sint at aspernatur omnis beatae est nostrum fugiat.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 156,
                    "CoinName": "Ethiopian Birr",
                    "TotalCoins": 150
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Maxime dolorem neque quo eaque harum et culpa tempora. Est nihil reprehenderit et animi sed cum. Odit non optio et libero et quod voluptatibus consequatur rerum. Dolor molestiae libero. Sint accusamus dolor quam provident et inventore aut enim accusamus.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/business",
                    "CoinId": 157,
                    "CoinName": "Azerbaijanian Manat",
                    "TotalCoins": 2953
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "quo",
                    "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                    "CoinId": 158,
                    "CoinName": "European Monetary Unit (E.M.U.-6)",
                    "TotalCoins": 253
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "quasi",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 159,
                    "CoinName": "Hryvnia",
                    "TotalCoins": 1648
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "voluptatum",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Tasty Steel Tuna",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Qui perspiciatis ab occaecati nihil natus dolores modi possimus. Aut ab voluptas. Nisi nulla aut ducimus omnis accusantium officiis error autem. Doloribus quibusdam qui sit quis sed.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Small Soft Pizza",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Facilis facere distinctio voluptas numquam aut et.\nRatione dolore vel quia ut molestiae eum reprehenderit voluptates culpa.\nDolorum non et quod.\nPariatur iste ab debitis harum suscipit.\nEt et commodi et quibusdam consequatur unde.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Practical Frozen Bike",
                    "QuantityAvailable": 4
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Ullam animi porro voluptatem.\nEt autem nesciunt.\nSit perferendis sit voluptatum distinctio et est laboriosam vel tempore.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Licensed Steel Tuna",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "commodi",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Awesome Rubber Towels",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "enim",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Refined Granite Chips",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Molestiae voluptates autem repellendus repellendus sit quasi nobis deleniti consequatur.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Practical Wooden Soap",
                    "QuantityAvailable": 9
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Repellat quisquam quam est. Deleniti eaque nulla voluptates dolorem. Rem laborum minus natus facere culpa. Nesciunt voluptas quibusdam voluptas. Unde quis fugiat fugiat eos. Beatae natus corrupti voluptatum doloremque.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/fashion",
                    "PrizeName": "Unbranded Concrete Computer",
                    "QuantityAvailable": 5
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Enim dolore minima consequatur qui rerum minima voluptatem laborum eveniet. Dolores suscipit sequi molestiae officiis voluptatem corrupti. Ut culpa fugiat ut sint repellat culpa quia. Dolore omnis id. Aspernatur eos sunt quae ut.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Sleek Fresh Soap",
                    "QuantityAvailable": 4
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Rerum laboriosam optio blanditiis odit harum et odit.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Unbranded Fresh Computer",
                    "QuantityAvailable": 9
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "Voluptatibus ea consequatur vel qui magnam.",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/technics",
            "ChallengeId": 5,
            "ChallengeName": "Desafio 5",
            "IsCompleted": false,
            "PercentCompletion": 29,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530679940423-0300)/",
                    "AchievementDescription": "Voluptatum qui eum.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 70",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530665282939-0300)/",
                    "AchievementDescription": "totam",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 71",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Et voluptatem et aut aliquam quas dolores veritatis et ad. Veritatis est non et quis perspiciatis corporis. Accusamus quisquam accusantium praesentium. Quos et necessitatibus. Vel voluptas aliquid.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
                    "AchievementName": "Conquista 72",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531179489784-0300)/",
                    "AchievementDescription": "Repellendus ut qui voluptatem optio.\nMolestiae optio et aliquam facere ut quos ex nam.\nSed deserunt et dignissimos occaecati qui et et nobis.\nMolestiae eligendi voluptates veniam non accusantium in.\nOccaecati magnam quam in.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 73",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Enim ratione quo asperiores voluptatem ea consequuntur eligendi.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
                    "AchievementName": "Conquista 74",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Quidem sed quo minus temporibus voluptatem.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 75",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Et quaerat aut vel quisquam vitae. Facere ut quod non et unde sequi ut et tempora. Amet saepe aperiam voluptas non vero. Aut eius corporis qui corrupti iste nesciunt nulla maiores quia.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 76",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530962794799-0300)/",
                    "AchievementDescription": "quis",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 77",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Asperiores explicabo corrupti et.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 78",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531253228783-0300)/",
                    "AchievementDescription": "ab",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 79",
                    "AchievementType": 2
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "ab",
                    "CoinIconUrl": "http://lorempixel.com/640/480/business",
                    "CoinId": 160,
                    "CoinName": "Rwanda Franc",
                    "TotalCoins": 1753
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Eligendi enim itaque cupiditate qui libero fugiat. Deserunt assumenda modi non aspernatur inventore cum excepturi voluptas rerum. Eum iusto et autem eum. Totam ipsa adipisci qui porro cum neque nostrum. Id similique impedit repellat rerum commodi numquam ullam voluptas rerum. Rem et asperiores quas aliquam quaerat et ut.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 161,
                    "CoinName": "US Dollar",
                    "TotalCoins": 227
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Et rerum aut debitis sunt inventore et quia voluptatem odit.\nVoluptas eligendi molestiae dolorem eos quis et maxime eius.\nAb est rerum praesentium possimus fuga.\nEt distinctio quidem voluptatem dolorem sit id in quos.\nAt culpa omnis saepe tempore qui.\nNon tempora et magnam maiores repellendus.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "CoinId": 162,
                    "CoinName": "UIC-Franc",
                    "TotalCoins": 1841
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Esse suscipit iusto ab quis expedita rem et neque cum.\nDeserunt facilis quo in.\nLibero molestias autem exercitationem.\nNon non consequatur et illum debitis.\nLaboriosam omnis quos nesciunt.\nSunt aperiam sint qui et cupiditate sit.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/transport",
                    "CoinId": 163,
                    "CoinName": "Kyat",
                    "TotalCoins": 2307
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Laboriosam hic molestiae est rerum perferendis velit expedita.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "CoinId": 164,
                    "CoinName": "Rufiyaa",
                    "TotalCoins": 2426
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Dolor laboriosam enim est sit doloremque ut.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                    "CoinId": 165,
                    "CoinName": "North Korean Won",
                    "TotalCoins": 177
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "maiores",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 166,
                    "CoinName": "Armenian Dram",
                    "TotalCoins": 1902
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Voluptatum molestiae quia eligendi est deleniti sapiente delectus vitae qui. Quo veritatis ut ut qui corrupti nesciunt quis. Est voluptatem qui et et est. Voluptas quis at. Fugiat pariatur deleniti architecto.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 167,
                    "CoinName": "Syrian Pound",
                    "TotalCoins": 1855
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Doloribus nam aliquid.\nOdit sit consequuntur repellendus ratione.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 168,
                    "CoinName": "UAE Dirham",
                    "TotalCoins": 552
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "repellendus",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 169,
                    "CoinName": "Falkland Islands Pound",
                    "TotalCoins": 2498
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "perferendis",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/technics",
                    "PrizeName": "Practical Wooden Chicken",
                    "QuantityAvailable": 9
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Sequi nam voluptas est ad deleniti sint quia libero.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Awesome Fresh Shirt",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "nam",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Sleek Metal Hat",
                    "QuantityAvailable": 9
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "magnam",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Ergonomic Soft Towels",
                    "QuantityAvailable": 3
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Quia maxime suscipit ad dignissimos earum at.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/fashion",
                    "PrizeName": "Handmade Metal Shoes",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "odio",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/food",
                    "PrizeName": "Incredible Fresh Fish",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "consequatur",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Sleek Granite Tuna",
                    "QuantityAvailable": 3
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Commodi excepturi eum quae rerum qui.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/technics",
                    "PrizeName": "Handcrafted Plastic Chips",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Quidem et voluptas aut vel consequatur vel ut ratione.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Rustic Cotton Computer",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "iusto",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Licensed Concrete Keyboard",
                    "QuantityAvailable": 10
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "Voluptatum numquam molestiae voluptatum omnis vero accusantium.",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/fashion",
            "ChallengeId": 6,
            "ChallengeName": "Desafio 6",
            "IsCompleted": true,
            "PercentCompletion": 1,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "qui",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 80",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531185291953-0300)/",
                    "AchievementDescription": "Voluptatibus animi voluptas eius ad distinctio modi.\nVoluptatibus et provident atque rem et omnis suscipit.\nDolores nostrum velit tenetur voluptatibus voluptatem.\nEos ratione est.\nVoluptas nihil reiciendis saepe alias blanditiis.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "AchievementName": "Conquista 81",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530673177420-0300)/",
                    "AchievementDescription": "vel",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 82",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530951656456-0300)/",
                    "AchievementDescription": "Assumenda id veritatis enim et aliquam atque. Alias suscipit id vitae consequuntur necessitatibus voluptas. Iste qui rerum atque sit voluptatem fugiat optio nihil. Voluptatum facilis maxime itaque sint. Laborum non alias at.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
                    "AchievementName": "Conquista 83",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531028113623-0300)/",
                    "AchievementDescription": "Deserunt eveniet repudiandae accusantium et temporibus.\nAtque non ut ipsa animi dolorum.\nCommodi rerum enim omnis quo aut veritatis qui perspiciatis.\nMollitia necessitatibus voluptates accusantium dignissimos blanditiis.\nSapiente fugit tempore.\nEt molestias voluptatem iste.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 84",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Eum vitae esse tempora explicabo eos soluta aspernatur esse assumenda. Dignissimos molestiae aperiam debitis vel. Rem ut vitae. Hic non natus autem tenetur modi. Laudantium est ut dolorum ut libero molestias eum est numquam.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 85",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Ducimus et saepe occaecati aut sapiente.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 86",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531098212822-0300)/",
                    "AchievementDescription": "Iste vero pariatur eos quidem optio.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 87",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Ab assumenda dolorem odit quia et voluptatum.\nIllo aut enim veritatis cumque aut quas velit.\nSapiente quam tempora.\nEnim facere commodi.\nQuas culpa vel qui.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
                    "AchievementName": "Conquista 88",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531369354579-0300)/",
                    "AchievementDescription": "Qui consequatur provident nobis. Maxime et maxime ut beatae itaque est magni id velit. Quia provident blanditiis omnis sit laudantium aut dolorum eius. Labore fugit reprehenderit. Molestiae impedit vitae nemo et fugit et id aliquam. Assumenda consequatur dolorem ratione similique.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 89",
                    "AchievementType": 0
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Ut ratione dolor quia quia repudiandae laudantium.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 170,
                    "CoinName": "CFP Franc",
                    "TotalCoins": 1162
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Id dolorem doloribus exercitationem.\nIure ad consequuntur consequatur aut.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 171,
                    "CoinName": "New Israeli Sheqel",
                    "TotalCoins": 152
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Dignissimos reprehenderit quia ipsum itaque magni quos. Sint enim eum qui eum et beatae repellat laboriosam quis. Vero incidunt laborum aut voluptas velit. Dolorem atque iure eos.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                    "CoinId": 172,
                    "CoinName": "Croatian Kuna",
                    "TotalCoins": 349
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Inventore libero eligendi dolores corporis qui fugit saepe corporis. Ea natus id impedit ipsa molestiae provident. Fugiat vel repellat possimus quibusdam. Aut est et eos commodi nihil qui quod quisquam ipsum.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                    "CoinId": 173,
                    "CoinName": "Turkish Lira",
                    "TotalCoins": 2193
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Et aut sint aut molestiae est sequi explicabo deserunt qui. Beatae reiciendis dolorem ullam accusamus est. Optio ipsum reiciendis provident mollitia ipsa. Voluptas similique molestiae quam optio ipsum molestiae. Atque error est. Nesciunt vitae a et ipsa.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                    "CoinId": 174,
                    "CoinName": "US Dollar",
                    "TotalCoins": 419
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Placeat consequatur officiis incidunt et sint ut excepturi voluptatum consectetur.\nVitae est tempore.\nEsse perferendis doloremque quos voluptatem et qui error ea id.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 175,
                    "CoinName": "New Leu",
                    "TotalCoins": 2283
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Modi ducimus tempore. Exercitationem adipisci molestiae similique distinctio eos consequatur ut. Debitis omnis quis officiis impedit consequuntur harum magnam vitae sit. Odio rem dolores rerum. Qui aperiam sunt labore doloribus vero ad alias sed sed. Id et animi excepturi omnis mollitia ea vero saepe.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 176,
                    "CoinName": "Liberian Dollar",
                    "TotalCoins": 2304
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Eos sed molestias magnam dolorem cumque deleniti officia occaecati.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                    "CoinId": 177,
                    "CoinName": "Somoni",
                    "TotalCoins": 2182
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "et",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 178,
                    "CoinName": "Afghani",
                    "TotalCoins": 1772
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "sit",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "CoinId": 179,
                    "CoinName": "Quetzal",
                    "TotalCoins": 1162
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "esse",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Refined Steel Tuna",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Hic nostrum sed quia sit beatae.\nPerspiciatis accusamus qui voluptas qui velit.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Licensed Frozen Keyboard",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Voluptate omnis et.\nIpsum voluptatem fugiat iusto et et.\nLaboriosam officiis quisquam ullam consectetur.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/technics",
                    "PrizeName": "Practical Plastic Hat",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Distinctio eius ipsa sunt voluptas quidem et et vero. Ut provident ab optio neque vel. Odit et non perspiciatis illo quia quos. Minima vel occaecati dolore eveniet ad iusto sunt enim voluptas. Modi maxime odit dolorem labore incidunt atque dolores dolor assumenda.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Fantastic Cotton Pizza",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Magnam id saepe omnis.\nAb quaerat aut illum.\nAut odit dignissimos dolor non quia deserunt fugiat repellat ut.\nEnim similique dolorem enim aut.\nIpsum soluta expedita quasi.\nProvident rerum sit nesciunt inventore tempore non.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Refined Rubber Bacon",
                    "QuantityAvailable": 9
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Voluptas ex minima.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Rustic Cotton Hat",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Et labore odit. Dicta molestiae nesciunt necessitatibus similique sunt dolores voluptas assumenda voluptatem. Corporis earum repellat nesciunt eveniet quae et ut dolor repellendus. Illo expedita beatae autem provident sunt beatae quia doloribus et. Voluptatem illum cumque aliquam quidem eum. Eum deserunt molestias deleniti beatae est et.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Tasty Soft Chair",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "quia",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Small Frozen Tuna",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Nobis facilis nesciunt corrupti aut temporibus. Praesentium rerum voluptate id. Tenetur adipisci eum in in reprehenderit asperiores cupiditate.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/food",
                    "PrizeName": "Fantastic Granite Bacon",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "doloremque",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Rustic Plastic Table",
                    "QuantityAvailable": 3
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "Praesentium nihil et. Voluptatem deserunt consequatur aut dolorem ut in qui aperiam. Quis molestiae consequatur quibusdam molestiae. Omnis sint aut est sint aut. Omnis omnis iste. Necessitatibus culpa unde enim.",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/nightlife",
            "ChallengeId": 7,
            "ChallengeName": "Desafio 7",
            "IsCompleted": true,
            "PercentCompletion": 52,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Culpa maiores cumque neque quidem unde quia sequi minus odit.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
                    "AchievementName": "Conquista 90",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531500289075-0300)/",
                    "AchievementDescription": "Velit aliquam ut excepturi non doloremque dolore enim odit excepturi.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/abstract",
                    "AchievementName": "Conquista 91",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531032105601-0300)/",
                    "AchievementDescription": "Itaque quo temporibus illum nulla perferendis delectus.\nEt quae expedita quod mollitia veritatis.\nUt voluptas fugit eaque.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/business",
                    "AchievementName": "Conquista 92",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Consequuntur ut quo.\nNecessitatibus rem non asperiores.\nSunt quos consequuntur similique labore vel doloremque fuga voluptatibus officia.\nExcepturi ducimus quo eius tempore est deserunt.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/animals",
                    "AchievementName": "Conquista 93",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531005734467-0300)/",
                    "AchievementDescription": "iure",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
                    "AchievementName": "Conquista 94",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531244465308-0300)/",
                    "AchievementDescription": "Numquam id quia animi.\nSed unde et quibusdam quo fugiat sunt voluptatem ut.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 95",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531273673516-0300)/",
                    "AchievementDescription": "Debitis quam adipisci voluptate.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 96",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Eum debitis dolorem ea ipsam et enim labore dignissimos totam.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/business",
                    "AchievementName": "Conquista 97",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531069957072-0300)/",
                    "AchievementDescription": "Corrupti dolore non est doloremque voluptatem doloribus corporis autem voluptate.\nIpsam sit laudantium omnis qui nulla sit a maxime.\nQui quidem voluptate totam ipsum sit asperiores dicta.\nFugit omnis sunt.\nDolore non dolores tempora aliquid laborum fugiat.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/animals",
                    "AchievementName": "Conquista 98",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531425169164-0300)/",
                    "AchievementDescription": "In nisi laudantium. Est ut voluptatem et est aut quaerat eos dolore. Eius soluta exercitationem aut maxime repellendus numquam dolore ipsam et.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
                    "AchievementName": "Conquista 99",
                    "AchievementType": 1
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "ut",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 180,
                    "CoinName": "Convertible Marks",
                    "TotalCoins": 35
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Quasi animi qui nisi sint.\nUt corrupti consequatur quo aut.\nQuia dolores dolor voluptas temporibus voluptatem accusantium nulla omnis.\nIllo quas voluptas rem ut.\nAut ut ea voluptatum doloremque recusandae itaque qui.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 181,
                    "CoinName": "Norwegian Krone",
                    "TotalCoins": 990
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Beatae voluptas modi non voluptate commodi minus modi dignissimos porro.\nCulpa est perspiciatis necessitatibus quas dignissimos molestiae quaerat nobis.\nEt voluptate vel enim.\nEaque recusandae repudiandae qui ipsa velit quis.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 182,
                    "CoinName": "US Dollar",
                    "TotalCoins": 2228
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Quasi aut a possimus modi.\nNumquam mollitia quas consequatur rerum.\nIure et nulla facilis ex velit expedita.\nVoluptas quibusdam enim fuga cum id exercitationem ex similique.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                    "CoinId": 183,
                    "CoinName": "US Dollar",
                    "TotalCoins": 2701
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Voluptatum et officia. Nisi odio et unde recusandae atque consequatur atque occaecati suscipit. Quia necessitatibus facilis voluptatem ad cumque. Beatae et inventore eos doloremque. Deleniti maiores dolorum deleniti amet.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                    "CoinId": 184,
                    "CoinName": "UIC-Franc",
                    "TotalCoins": 2112
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Commodi omnis eligendi consectetur quibusdam consequatur fugiat incidunt omnis soluta.\nNostrum rerum laboriosam.\nQui sunt ut eos atque velit.\nEt hic et.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 185,
                    "CoinName": "Tanzanian Shilling",
                    "TotalCoins": 2392
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Dolores dolores voluptates itaque.\nRerum qui dolore accusantium quibusdam mollitia et aut.\nDeserunt pariatur corporis accusantium magni.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 186,
                    "CoinName": "Yuan Renminbi",
                    "TotalCoins": 80
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Quod voluptas totam sint eaque et beatae exercitationem.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 187,
                    "CoinName": "Liberian Dollar",
                    "TotalCoins": 2260
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Nobis ratione laborum blanditiis laborum deleniti.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                    "CoinId": 188,
                    "CoinName": "North Korean Won",
                    "TotalCoins": 1601
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Eos omnis provident ad odit expedita.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 189,
                    "CoinName": "Somali Shilling",
                    "TotalCoins": 2700
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Molestias fugit quia voluptas esse dolorem non. Nihil voluptatem sunt et consequatur et. Autem minus et perspiciatis molestiae cupiditate omnis qui ab. Consequatur labore animi. Temporibus aut totam aut.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Awesome Plastic Fish",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "libero",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/fashion",
                    "PrizeName": "Refined Plastic Salad",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Dolores voluptas fuga nam dignissimos aut asperiores maxime provident. Maxime id qui non. Repudiandae eum aut voluptatibus nulla. Et iusto quo aperiam officiis ipsam quam recusandae. Excepturi corporis repellat molestiae totam ea dolorem. Voluptatem architecto ut aut.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Refined Steel Hat",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Et et consequatur ut eos tempora sit temporibus et sunt.\nIn vel sapiente laborum dignissimos est.\nPraesentium a placeat dolorem.\nVoluptates debitis distinctio.\nSed est est autem harum harum sit.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Rustic Cotton Car",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "doloremque",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Sleek Steel Ball",
                    "QuantityAvailable": 6
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "consequatur",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Practical Rubber Shirt",
                    "QuantityAvailable": 7
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Ut ut sunt voluptatum est magni. Sit omnis at. Autem sit sed hic culpa officiis modi non quis culpa.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Licensed Frozen Bike",
                    "QuantityAvailable": 3
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Accusamus esse et at deleniti qui deserunt itaque consequatur.\nEveniet ad similique tempore qui ducimus ea.\nVitae possimus ut ab repellat.\nAutem aut porro in est perferendis odio unde sed tempora.\nOdio qui itaque ut aut ex facilis et et doloremque.\nPerferendis sapiente mollitia.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/abstract",
                    "PrizeName": "Sleek Granite Bike",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Ut veritatis mollitia perferendis perferendis sit.\nSequi ut sequi laboriosam omnis quis nemo laudantium consequatur.\nIn officia maiores consequatur et.\nAccusamus facere voluptatibus sunt tenetur in ab eveniet.\nSunt accusantium labore debitis earum autem nisi ipsam.\nVoluptatum nobis earum tempore velit.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Refined Granite Bike",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Quae aperiam consequatur est quaerat aperiam possimus quo in. Quaerat tempore tempore voluptatem et. Et corrupti inventore ad porro saepe sit. Velit iste cum nulla ea non eum architecto optio. Voluptatibus sed molestias eius provident. Iste et ut eum soluta.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Generic Steel Bike",
                    "QuantityAvailable": 5
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "distinctio",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/abstract",
            "ChallengeId": 8,
            "ChallengeName": "Desafio 8",
            "IsCompleted": true,
            "PercentCompletion": 74,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531349701197-0300)/",
                    "AchievementDescription": "Sequi at et. Nihil ex repudiandae deleniti ab totam sit. Esse veniam et beatae est tenetur placeat quisquam veniam doloribus. Quasi velit accusantium harum sit aliquid nisi explicabo enim. Eos dolorem aliquid.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 100",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Repudiandae et voluptatem aut omnis autem molestiae provident dolor.\nAut fugiat neque.\nPerspiciatis voluptas cum.\nMinus consequuntur nihil autem officiis aut ad blanditiis.\nAmet a magni et beatae sit eos.\nSunt dolor repudiandae accusamus iure molestiae vel ipsam ullam accusantium.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/cats",
                    "AchievementName": "Conquista 101",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530676408453-0300)/",
                    "AchievementDescription": "Tempora voluptates dolorem voluptatem.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 102",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530781093705-0300)/",
                    "AchievementDescription": "Id sunt est non eveniet.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "AchievementName": "Conquista 103",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531240556846-0300)/",
                    "AchievementDescription": "voluptas",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/technics",
                    "AchievementName": "Conquista 104",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "sunt",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/transport",
                    "AchievementName": "Conquista 105",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Sunt dolorem quas doloribus nisi rerum dolores beatae error odit. Labore nam dicta magni et rerum dolores autem. Eum autem similique consequuntur. Atque illo aspernatur eos sint. Eveniet reiciendis nam.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 106",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Nobis nostrum ut. Et reprehenderit atque. Ipsum voluptatem vitae laudantium vel animi velit animi autem.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
                    "AchievementName": "Conquista 107",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530861655582-0300)/",
                    "AchievementDescription": "ab",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/abstract",
                    "AchievementName": "Conquista 108",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530737922621-0300)/",
                    "AchievementDescription": "Aut id nemo aliquid sed cumque.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/animals",
                    "AchievementName": "Conquista 109",
                    "AchievementType": 1
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Commodi maiores iusto mollitia et odio consequuntur dolorum.\nDelectus dolores reiciendis totam et.\nModi reprehenderit reprehenderit aperiam.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 190,
                    "CoinName": "Burundi Franc",
                    "TotalCoins": 1643
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "dolor",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 191,
                    "CoinName": "Baht",
                    "TotalCoins": 799
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "voluptas",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 192,
                    "CoinName": "Fiji Dollar",
                    "TotalCoins": 1577
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "aliquid",
                    "CoinIconUrl": "http://lorempixel.com/640/480/people",
                    "CoinId": 193,
                    "CoinName": "Rwanda Franc",
                    "TotalCoins": 24
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "ullam",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 194,
                    "CoinName": "Lari",
                    "TotalCoins": 674
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Non cumque sed accusamus quia illum non quia quam dolorem. Eos ea quia velit illum. Earum iste dolores accusamus.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                    "CoinId": 195,
                    "CoinName": "Egyptian Pound",
                    "TotalCoins": 79
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "dolore",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 196,
                    "CoinName": "Belarussian Ruble",
                    "TotalCoins": 2859
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Commodi sint et.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/sports",
                    "CoinId": 197,
                    "CoinName": "New Leu",
                    "TotalCoins": 601
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Voluptas nobis esse dolorem. Qui qui repellat exercitationem. Consequatur accusantium deleniti labore excepturi.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/nature",
                    "CoinId": 198,
                    "CoinName": "Vatu",
                    "TotalCoins": 1709
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Et illo id asperiores quaerat magni.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                    "CoinId": 199,
                    "CoinName": "Somoni",
                    "TotalCoins": 2220
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Nisi quisquam ex quia quis et tenetur quis.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Handcrafted Plastic Pizza",
                    "QuantityAvailable": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Inventore ullam veritatis id.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/sports",
                    "PrizeName": "Incredible Cotton Bacon",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Et omnis animi porro amet. Perspiciatis dolorem perferendis repellendus ducimus quos molestiae excepturi magni et. Expedita qui corporis assumenda sed nobis iure.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Generic Metal Bacon",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "non",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Handmade Cotton Fish",
                    "QuantityAvailable": 3
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Voluptatem dignissimos veniam aut magni enim.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/technics",
                    "PrizeName": "Rustic Plastic Bacon",
                    "QuantityAvailable": 6
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Quae impedit officia qui.\nNon corrupti tenetur minima fugit blanditiis ut quaerat adipisci.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Handcrafted Concrete Keyboard",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "quas",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Intelligent Plastic Chicken",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Ducimus exercitationem voluptatem voluptatibus aliquid non sunt.\nAt rerum quia repudiandae velit neque ipsum.\nNesciunt aut expedita ea eveniet illo qui debitis.\nLibero libero est et vel praesentium tempore fugiat qui.\nIllum corporis maiores et maiores rerum incidunt ex consequatur.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "PrizeName": "Handcrafted Steel Shirt",
                    "QuantityAvailable": 3
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "voluptates",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/food",
                    "PrizeName": "Incredible Concrete Pizza",
                    "QuantityAvailable": 9
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Qui soluta ut aut et.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/nightlife",
                    "PrizeName": "Incredible Metal Shirt",
                    "QuantityAvailable": 5
                }
            ]
        },
        {
            "Error": false,
            "ErrorList": [],
            "ChallengeDescription": "Et sit ex.",
            "ChallengeIconUrl": "http://lorempixel.com/640/480/city",
            "ChallengeId": 9,
            "ChallengeName": "Desafio 9",
            "IsCompleted": true,
            "PercentCompletion": 10,
            "UserAchievements": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530671113928-0300)/",
                    "AchievementDescription": "Optio qui quis ut commodi blanditiis voluptas ut.\nInventore autem sed quod iusto laboriosam.\nNulla tempora dignissimos.\nAnimi rerum aut aut modi quas aut quos cum.\nUllam non culpa doloribus optio voluptatem ut id.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 110",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530689916310-0300)/",
                    "AchievementDescription": "et",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
                    "AchievementName": "Conquista 111",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530832969428-0300)/",
                    "AchievementDescription": "ipsam",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 112",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530910555239-0300)/",
                    "AchievementDescription": "vel",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/fashion",
                    "AchievementName": "Conquista 113",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531485849472-0300)/",
                    "AchievementDescription": "Qui possimus qui tenetur.\nQuod ipsam consequuntur et voluptates ea quisquam officiis debitis.\nCorporis tempore odio voluptatibus deleniti ea.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/food",
                    "AchievementName": "Conquista 114",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "Perspiciatis quis blanditiis molestias eligendi et. Tempore quia mollitia enim sequi. Amet dicta ut accusamus ut adipisci recusandae quia. Facilis quam deserunt. Accusamus ipsam laboriosam animi voluptas eum vero et qui. Qui pariatur doloremque autem id omnis sit beatae magni dolorem.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/sports",
                    "AchievementName": "Conquista 115",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": null,
                    "AchievementDescription": "reprehenderit",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/nature",
                    "AchievementName": "Conquista 116",
                    "AchievementType": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531391649703-0300)/",
                    "AchievementDescription": "Dolorem et sapiente suscipit occaecati enim deleniti ullam fugiat id.\nSint voluptatem quia illum.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/city",
                    "AchievementName": "Conquista 117",
                    "AchievementType": 1
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1530998548461-0300)/",
                    "AchievementDescription": "Vitae optio maiores necessitatibus corrupti recusandae aut voluptates sed.",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/animals",
                    "AchievementName": "Conquista 118",
                    "AchievementType": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "AchievementDate": "/Date(1531208236376-0300)/",
                    "AchievementDescription": "maxime",
                    "AchievementIconUrl": "http://lorempixel.com/640/480/people",
                    "AchievementName": "Conquista 119",
                    "AchievementType": 1
                }
            ],
            "UserCoins": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Velit recusandae explicabo amet voluptates et reiciendis.\nBeatae maxime voluptatem quod recusandae aut ducimus.\nSuscipit autem reprehenderit.\nQuas qui aspernatur sunt alias.\nEst voluptates non.\nQuidem labore magni consequuntur repellendus tenetur reprehenderit maxime adipisci.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/cats",
                    "CoinId": 200,
                    "CoinName": "Guarani",
                    "TotalCoins": 1456
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Vel libero doloribus et rem ad.\nDistinctio veritatis vel fugiat.\nAmet quo non.\nIn quia odit.\nLaborum aut amet quos rerum officia sit aspernatur id sit.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 201,
                    "CoinName": "Egyptian Pound",
                    "TotalCoins": 932
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Sint qui veniam.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 202,
                    "CoinName": "Ouguiya",
                    "TotalCoins": 1411
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Reprehenderit natus ea.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/city",
                    "CoinId": 203,
                    "CoinName": "Convertible Marks",
                    "TotalCoins": 254
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Consequatur deleniti et maiores aut explicabo eaque et quae.\nVoluptate eligendi est in repudiandae sequi illum eaque maxime.\nQui quod dolor quis magnam doloremque qui id magnam.\nCum vero dignissimos est aliquam sed quam mollitia in ut.\nUnde sit et.\nOptio repudiandae repellendus ducimus sit ut accusamus qui.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/abstract",
                    "CoinId": 204,
                    "CoinName": "European Unit of Account 9(E.U.A.-9)",
                    "TotalCoins": 792
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "id",
                    "CoinIconUrl": "http://lorempixel.com/640/480/technics",
                    "CoinId": 205,
                    "CoinName": "Seychelles Rupee",
                    "TotalCoins": 902
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "fugit",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 206,
                    "CoinName": "Serbian Dinar",
                    "TotalCoins": 2872
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Eius quidem deleniti placeat deserunt quisquam neque et.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/fashion",
                    "CoinId": 207,
                    "CoinName": "Hong Kong Dollar",
                    "TotalCoins": 110
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 0,
                    "CoinDescription": "Eaque reprehenderit maiores doloribus fugiat quis eos unde asperiores. Debitis voluptates et dolorem ducimus tenetur laudantium architecto mollitia. Ut nisi corporis. Ut sed voluptatum. Id ut perferendis facere.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/food",
                    "CoinId": 208,
                    "CoinName": "Gibraltar Pound",
                    "TotalCoins": 1528
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "CoinChangeType": 1,
                    "CoinDescription": "Ducimus ea sunt atque maiores porro vel. Corrupti odit neque sunt numquam quia et sunt. Sunt officiis ducimus ullam vel cum consequatur omnis. Consequuntur laudantium adipisci expedita deserunt voluptatibus eos provident.",
                    "CoinIconUrl": "http://lorempixel.com/640/480/animals",
                    "CoinId": 209,
                    "CoinName": "Bolivar Fuerte",
                    "TotalCoins": 423
                }
            ],
            "UserPrizes": [
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Beatae sunt nam quibusdam molestiae eum minus vel voluptas aspernatur.\nEt quidem soluta veniam quisquam ut deserunt ut totam eum.\nDolor et soluta dolor et et quo.\nVoluptatum quisquam nihil dolorem animi ut explicabo hic cumque.\nPraesentium nulla dolorem aut quaerat quis excepturi aut.\nDolores vitae aut vel voluptate sequi error qui incidunt.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Refined Plastic Shirt",
                    "QuantityAvailable": 2
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Qui consequatur vitae quae. Veniam necessitatibus quo consequatur maiores nobis exercitationem quia. Nam voluptates sunt cumque est tempore. Sit libero aperiam voluptas et. Qui qui nesciunt accusamus eum voluptatem aut totam nihil.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Unbranded Plastic Chips",
                    "QuantityAvailable": 8
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Aut aspernatur inventore quisquam.\nAsperiores qui enim nemo hic illum aut.\nQuae sed omnis ducimus.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/food",
                    "PrizeName": "Sleek Soft Salad",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "quasi",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/transport",
                    "PrizeName": "Refined Wooden Pizza",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Et et sequi quod consequatur fugit accusamus id. Animi occaecati ipsam veniam distinctio similique. Est maxime ut rem est unde inventore accusantium et maiores. Dolorum perferendis ut beatae esse amet voluptatem amet quidem. Laudantium tenetur suscipit sunt dolore quam sint sit quisquam temporibus. Qui explicabo ratione ducimus ut.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/cats",
                    "PrizeName": "Tasty Soft Mouse",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Dolore quisquam blanditiis occaecati aut.\nDolores voluptatum non asperiores.\nAutem perferendis ut dignissimos.\nPerspiciatis eligendi nisi adipisci.\nModi sint qui harum debitis ut ipsum.\nAdipisci voluptas repellendus.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/animals",
                    "PrizeName": "Ergonomic Cotton Keyboard",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Et temporibus laudantium aut alias expedita non. Sed earum ut iusto sit fuga. Voluptatem et harum necessitatibus tempora modi delectus ea id.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Incredible Granite Chips",
                    "QuantityAvailable": 3
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Laudantium placeat perspiciatis quod omnis illum qui. Ut excepturi quidem quia nostrum sit qui quas modi corporis. Sit aut alias quis nobis et qui officiis.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/people",
                    "PrizeName": "Handcrafted Frozen Towels",
                    "QuantityAvailable": 10
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "Culpa vitae ab voluptatem maiores vel repudiandae aut impedit sit. Dignissimos eveniet voluptates sequi. Ad velit fugiat ducimus laudantium vel vero nemo doloremque. Sit voluptatibus illum cumque voluptatem in earum ea accusamus nihil.",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/business",
                    "PrizeName": "Awesome Soft Soap",
                    "QuantityAvailable": 0
                },
                {
                    "Error": false,
                    "ErrorList": [],
                    "PrizeDescription": "distinctio",
                    "PrizeIconUrl": "http://lorempixel.com/640/480/city",
                    "PrizeName": "Handmade Granite Mouse",
                    "QuantityAvailable": 2
                }
            ]
        }
    ],
    "Total": 0
});
});

app.post('/UBIMobileService/User/Logoff', (req, res) => {
  res.status(200).json({
      "Error": false,
      "ErrorList": []
  });
});

app.listen(8809, () => {
  console.log('App up and running on port 8809');
});