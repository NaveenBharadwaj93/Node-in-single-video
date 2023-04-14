import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor');
  setTimeout(() => {
    console.log('Please turn off the motor!, its a gentle remainder');
  }, 3000);
});

console.log('Event is runnig');
myEmitter.emit('WaterFull');
console.log('Event is still running');