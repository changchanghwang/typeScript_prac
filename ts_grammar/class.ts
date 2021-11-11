class Car11 {
  #name: string = 'car'; //private 해당 클래스 내부에서만 접근 가능
  protected price: number; //protected 자식클래스에서 접근 가능
  color: string; //public 자식클래스, 클래스 인스턴스 모두 접근 가능
  static wheels = 4;
  constructor(color: string, price: number) {
    this.color = color;
    this.price = price;
  }
  start() {
    console.log('start');
    console.log(this.#name);
    console.log(Car11.wheels); //static은 this가 아닌 클래스.으로 불러옴
  }
}
class Bmw3 extends Car11 {
  constructor(color: string, price: number) {
    super(color, price);
  }
  showPrice() {
    console.log(super.price);
  }
}
const bmw = new Bmw3('red', 3000);
console.log(bmw.color);
console.log(Car11.wheels);

//추상 class
abstract class Car22 {
  //new를 이용한 객체생성 x, 오직 상속을 통해서만 가능
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
  abstract doSomething(): void;
  //추상 클래스의 추상메소드는 반드시 상속받은쪽에서 구체화 시켜야함
}

class Bmw22 extends Car22 {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    console.log('do');
  }
}
