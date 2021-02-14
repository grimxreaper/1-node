var x =;
var url = 'http://mylogger.io/log';

function log(message) {
    //Send an http request
    console.log(message)
}

module.exports = log; //you can export a function or a single object

