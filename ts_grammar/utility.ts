//keyof key값을 빼줌

interface User77 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKey = keyof User77; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = 'gender';

//Partial<T> property를 optional하게 바꿔줌

interface User88 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}
// interface User88 {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: 'm' | 'f';
// }
let admin: Partial<User88> = {
  id: 1,
  name: 'Bob',
};

//Required<T> 모든 property를 필수로 포함하게함

interface User99 {
  id: number;
  name: string;
  age?: number;
  gender?: 'm' | 'f';
}
let admin2: Required<User99> = {
  id: 1,
  name: 'Bob',
  gender: 'm',
  age: 1,
};

//Readonly<T> 읽기전용, 바꾸기 못함

let admin3: Readonly<User99> = {
  id: 1,
  name: 'Bob',
};
// admin3.id = 4;

//Record<K,T> k는 키, t는 타입

// interface Score2 {
//   '1': 'A' | 'B' | 'C' | 'D';
//   '2': 'A' | 'B' | 'C' | 'D';
//   '3': 'A' | 'B' | 'C' | 'D';
//   '4': 'A' | 'B' | 'C' | 'D';
// }
type Grade = '1' | '2' | '3' | '4';
type Score22 = 'A' | 'B' | 'C' | 'D';
const score: Record<Grade, Score22> = {
  1: 'A',
  2: 'A',
  3: 'A',
  4: 'A',
};

interface User111 {
  id: number;
  name: string;
  age: number;
}
function isValid(user: User111) {
  const result: Record<keyof User111, boolean> = {
    id: user.id > 0,
    name: user.name !== '',
    age: user.age > 0,
  };
  return result;
}

//Pick<T,K> 특정 키만 가져와서 사용

interface User222 {
  id: number;
  name: string;
  age: number;
  gender: 'M' | 'W';
}

const admin222: Pick<User222, 'id' | 'name'> = {
  id: 0,
  name: 'Bob',
};

//Omit<T,K> 특정 프로퍼티 생략
const admin333: Omit<User222, 'age' | 'gender'> = {
  id: 0,
  name: 'Bob',
};

// Exclude<T1,T2> 타입1에서 타입2를 제거 (겹치는 타입)

type T1 = string | number | boolean;
type T2 = string | number;
type T3 = Exclude<T1, T2>; // boolean

//NonNullable<Type> Null,undefined를 제외한 타입 생성

type t11 = string | null | undefined | void;
type t22 = NonNullable<t11>;
