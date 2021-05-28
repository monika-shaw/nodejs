//20
const EventEmitter=require("events");

const event = new EventEmitter();

event.on('sayMyName',()=>{
    console.log('My name is tom');
});
event.on('sayMyName',()=>{
    console.log('My name is kumar');
});
event.on('sayMyName',()=>{
    console.log('My name is cruice');
});

// event.emit('sayMyName');
event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and page is ${msg}`);
})

event.emit('checkpage',200,'ok');


