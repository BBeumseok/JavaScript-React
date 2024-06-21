//  함수 타입 정의하기
function sum(x:number, y: number): number {
  return x + y;
}

console.log(sum(10, 20));

//  typescript를 활용하면 문법적 에러를 사전에 방지할 수 있습니다.

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc+current, 0);
}

const total = sumArray([10, 20, 30, 40, 50]);
console.log(total);

function noneReturnFunction(): void {   //반환값 없는 타입의 함수, 타입 지정 - void
  console.log('반환값 없는 함수');
}

//  Interface 사용해보기  (Java의 Interface 처럼 사용할 수 있음)
//  Interface는 클래스 또는 객체를 위한 타입 지정을 할 때 사용되는 문법.

//  Shape라는 Interface 만들기
interface Shape {
  //  number : 정수, 실수 모두 포함
   getArea(): number;   //  Shape interface에는 getArea 라는 함수가 꼭 있어야 함 !!
}

class Circle implements Shape {
  //  implememt 키워드를 통해 interface를 구현한다는 것을 명시함.
  radius: number; //  멤버 변수 선언

  constructor(radius: number) {
    this.radius = radius;
  }

  //  너비를 가져오는 함수
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {

  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

