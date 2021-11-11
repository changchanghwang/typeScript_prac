function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ['a', 'b', 'c'];
getSize<string>(arr2);

interface Mobile33<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile33<object> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};
const m2: Mobile33<string> = {
  name: 's20',
  price: 900,
  option: 'good',
};

interface M {
  name: string;
  price: number;
}
interface F {
  name: string;
  price: number;
}
interface L {
  price: number;
}

const m: M = { name: 'a', price: 10 };
const f: F = { name: 'b', price: 20 };
const l: L = { price: 30 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(m);
showName(f);
// showName(l);
