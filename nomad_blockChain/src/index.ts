interface Human {
  name: string;
  age: number;
  gender: string;
}
class Human2 {
  public;
}

const person = {
  name: 'Hwang',
  age: 27,
  gender: 'male',
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(person));

export {};
