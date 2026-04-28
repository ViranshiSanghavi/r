var events = require('events');
var eventEmitter = new events.EventEmitter();

// using ON (can run multiple times)
eventEmitter.on('greet', function(){
    console.log("Hello from ON function");
});

// using ONCE (runs only one time)
eventEmitter.once('greetOnce', function(){
    console.log("Hello from ONCE function");
});

// using EMIT to trigger events
eventEmitter.emit('greet');
eventEmitter.emit('greet');      // runs again

eventEmitter.emit('greetOnce');
eventEmitter.emit('greetOnce');  // will NOT run again

//on() → listens to event, runs every time event is emitted
//once() → runs only first time
//emit() → triggers the event