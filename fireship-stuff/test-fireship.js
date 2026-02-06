const { EventEmitter } = require('events');
const process = require('node:process');

const userArg = Number(process.argv[2]);
const eventEmitter = new EventEmitter();

eventEmitter.on('greeting', (num) => {
   if(num<0)
	   console.log('Hi!!!');
   else
	   console.log('See u!');
})

eventEmitter.emit('greeting', userArg);
