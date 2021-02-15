
var url = 'http://mylogger.io/log';
const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message) {
    //Send an http request
    console.log(message);
//Raise an event (below)
    emitter.emit('messageLogged', { id: 1, url: 'http://' })

}

module.exports = log; //you can export a function or a single object

