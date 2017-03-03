console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var result = notes.add(1, 2);
console.log(result);
