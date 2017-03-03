console.log('Starting app...');

const fs = require('fs');
const os = require('os');

var userInfo = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${userInfo.username}!`, (err) => {
  if (err) {
    throw err;
  }

  console.log('Appended some data to the file')
});
