interface Human {
  name: string;
  age: number;
  gender: string;
}
const person = {
  name: 'Hwang',
  age: 27,
  gender: 'male',
};
class Human2 {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human2('Lynn', 18, 'female');

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(lynn));

export {};
