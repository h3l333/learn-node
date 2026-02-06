/*
const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

const { readFile, readFileSync } = require('fs');

const txt = readFile('./hello.txt', 'utf8', (err, txt) => {
	console.log(txt);
})*/

const { readFile } = require('fs').promises;

const file = await readFile('./hello.txt', 'utf8');