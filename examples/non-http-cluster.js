
/**
 * Module dependencies.
 */

var cluster = require('../');

function Server() {
    console.log('server construct');
}

Server.prototype.start = function()
{
    console.log('starting server');
}

Server.prototype.stop = function(callback)
{
    console.log('gracefully stopping after 5 sec');
    setTimeout(function(){
        callback();
    }, 5000)
}

cluster(new Server).listen(3000);