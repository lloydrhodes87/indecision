console.log('starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log(process.argv);
console.log(argv)

console.log('Command: ', command);

if (command === 'add') {
    console.log('adding new note');
} else if (command === 'list') {
    console.log('listing all notes');
} else if (command === 'read') {
    console.log('reading note')
} else if (command === 'remove') {
    console.log('removing note')
} else {
    console.log('command not recognised');
}
