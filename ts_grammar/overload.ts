interface User3 {
  name: string;
  age: number;
}

function join(same: string, age: number): User;
function join(same: string, age: string): string;
function join(name: string, age: number | string): User3 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력해주세요.';
  }
}

const sam: User3 = join('Sam', 30);
const jane: string = join('Jane', '30');
