var EventEmitter = require('events').EventEmitter;
var util = require('util');

// my own function constructor
function Greetr() {
	this.greeting = 'Hello world!';	
}


// built up the prototype chain with util.inherits
util.inherits(Greetr, EventEmitter);


// set up my own prototype object and fire the event there
Greetr.prototype.greet = function(){
	console.log('Fire the greet event');
	this.emit('greet');
}


// instantiate object
var greeter1 = new Greetr();

// implement the event listener
greeter1.on('greet', function(){
	console.log('Someone is greeted!')
});

// execute
greeter1.greet();



