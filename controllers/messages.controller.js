const path = require('path');

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', '123.png'));
    // res.send('<ul><li>Hello Kath</li></ul>');
  };

function postMessage(req, res) {
    console.log('Updating messages...');
  };

module.exports ={
    getMessages,
    postMessage
};