console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var userInfo = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${userInfo.username}!`, (err) => {
  if (err) {
    throw err;
  }

  console.log('Appended some data to the file')
});
