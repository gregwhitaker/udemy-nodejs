console.log('Starting app...');

const fs = require('fs');
const os = require('os');

fs.appendFile('greetings.txt', 'Hello World!', (err) => {
  if (err) {
    throw err;
  }

  console.log('Appended some data to the file')
});
