console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./notes.js');

console.log(_.isString('test'));
console.log(_.isString(true));

console.log(_.uniq([2,1,2]));

var result = notes.add(1, 2);
console.log(result);
