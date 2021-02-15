

const EventEmitter = require('events');
//convention to camel case to show that EventEmitter is a CLASS
//a class is a container for properties and functions which we call functions (related methods and properties)

const emitter = new EventEmitter();
//Register a listener [a listener is a function that will be called
//when that event is raised]
emitter.on('messageLogged', (eventArg) => {
    console.log('Listener called', eventArg)
})

const log = require('./logger');
log('message');

//Raise an event called logging (data: message)

// emitter.emit('message', {date: message})