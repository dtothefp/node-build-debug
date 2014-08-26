#!/usr/bin/env node

require('shelljs/global');

var cmd = process.argv[2];
var task    = process.argv[3];

console.log('Runing the ' + cmd + ' ' + task + ' task.'); 
exec('node-debug $(which ' + cmd + ') ' +  task);