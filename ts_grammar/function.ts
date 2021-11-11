function add2(num1: number, num2: number): number {
  return num1 + num2;
}

function hello(name?: string): string {
  //선택적 매개변수
  return `Hello, ${name || 'world'}`;
}
function hello2(name = 'world'): string {
  return `Hello, ${name}`;
}
const result = hello();
const result2 = hello('Sam');

function hello3(name: string, age?: number): string {
  //선택적 매개변수를 앞에다 두고 싶으면 age?: number 가 아닌 age: number|undefined로 놓고 함수의 인수에 undefined를 넣어줘야한다.
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello,${name}`;
  }
}
console.log(hello3('sam'));
console.log(hello3('Sam', 30));

function add3(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}
add3(1, 2, 3);

//this
interface User1 {
  name: string;
}

const Sam: User1 = { name: 'Sam' };
function showName(this: User1) {
  console.log(this.name);
}

const aaa = showName.bind(Sam);
aaa();
