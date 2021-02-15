
var url = 'http://mylogger.io/log';
const EventEmitter = require('events');

//by using extends EventEmitter, this class Logger
//now has all the functionality that is defined in EventEmitter
class Logger extends EventEmitter {
    log(message) {
        //Send an http request
       console.log(message);
    //Raise an event (below)
       this.emit('messageLogged', { id: 1, url: 'http://' })
    
    }
}


module.exports = Logger; //you can export a function or a single object

