const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let dogu = new Person('Dogu');
dogu.on('name', () => {
  console.log('my name is ' + dogu.name);
});
let hazal = new Person('Hazal');
hazal.on('name', () => {
  console.log('my name is ' + hazal.name);
});

dogu.emit('name');
hazal.emit('name');