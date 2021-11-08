let car:string = 'bmw';

car = "차";

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon','tue','wed'];
let week2:Array<string>=['mon','tue','wed'];

week1.push('hi')

//튜플(tuple)

let b:[string, number];
b = ['z',1];
b[0].toLowerCase();


//void
function sayHello():void{
  console.log('hello');
}

//never
function showError():never{
  throw new Error();
}
function infLoop():never{
  while(true){
    
  }
}

//enum
enum Os{
  window = 3,
  Ios =10,
  Android //11
} //자동으로 1씩 증가 (설정하지 않으면)

enum OsOs{
  window = 'win',
  Ios = 'ios',
  android = 'and'
}

let myOs:Os;
myOs = Os.window;

//null, undefined

let c:null = null;
let d:undefined = undefined;