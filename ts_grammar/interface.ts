type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string; //optional
  readonly birthYear: number; //수정x
  [grade: number]: Score;
}

let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1: 'A',
};

user.age = 10;
user.gender = 'male';

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (x, y) => {
  return x + y;
};

add(10, 20);

interface isAdult {
  (age: number): boolean;
}

const aa: isAdult = (age) => {
  return age > 19;
};

//implements
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(q: string) {
    this.color = q;
  }
  start() {
    console.log('goo...');
  }
}

const q = new Bmw('green');
console.log(q);
q.start();

interface Toy {
  name: string;
}
//extends
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log('stop');
  },
  color: 'black',
  wheels: 4,
  start() {
    console.log('go');
  },
};

interface ToyCar extends Car, Toy {
  price: number;
}
