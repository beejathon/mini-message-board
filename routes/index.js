var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "sup dogg",
    user: "soup dogg",
    added: new Date()
  },
  {
    text: "we out here dogg",
    user: "outside dogg",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages, key: process.env.SECRET_KEY });
});

/* GET new post form. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Mini Messageboard' });
});

/* POST new message */
router.post('/new', function(req, res, next) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  })
  res.redirect('/')
})

module.exports = router;
