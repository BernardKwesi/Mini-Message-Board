var express = require('express');
var router = express.Router();
const moment = require('moment');

const messages =[
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },{
    text:"Hello World!",
    user:"Charles",
    added : new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board',
messages:messages });
});



router.post('/new', (req, res, next) => {
     
      let newMessage = {
        text :  req.body.message,
        user : req.body.user,
        added : new Date()
      }

      messages.unshift(newMessage);
      res.redirect('/');
});
module.exports = router;
