const userName1 = 'bob';
let userName2: string | number = 'Tom';

userName2 = 3;

type Job = 'police' | 'developer' | 'teacher';

interface User4 {
  name: string;
  job: Job;
}

const user1: User4 = {
  name: 'Bob',
  job: 'police',
};

//union types
interface Car1 {
  name: 'car';
  color: string;
  start(): void;
}
interface Mobile1 {
  name: 'mobile';
  color: string;
  call(): void;
}
function getGift(gift: Car1 | Mobile1) {
  console.log(gift.color);
  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  } //검사할 게 많으면 switch를 쓰는게 더 좋음
}

//intersection types
interface Car2 {
  name: string;
  start(): void;
}
interface Toy2 {
  name: string;
  color: string;
  price: number;
}
const toyCar: Toy2 & Car2 = {
  name: '타요',
  color: 'red',
  price: 1200,
  start() {},
};
