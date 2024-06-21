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

//  원 만들기
class Circle implements Shape {
  //  implememt 키워드를 통해 interface를 구현한다는 것을 명시함.
  // radius: number; //  멤버 변수 선언

  constructor(public radius: number) {  // public 사용으로 파라미터 쪽 생략
    this.radius = radius;
  }

  //  너비를 가져오는 함수
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

//  사각형 만들기
class Rectangle implements Shape {

  // width: number;
  // height: number;

  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const shape: Shape[] = [new Circle(5), new Rectangle(10, 20)];
shape.forEach(shape => console.log(shape.getArea()));

const circle = new Circle(8);
const rectangle = new Rectangle(100, 200);

console.log(circle.radius);   //  radius를 public으로 접근 제한 설정
// console.log(rectangle.width); //  width, height는 private 접근 제한 설정으로 불러올 수 없음.
//  위 코드를 js 파일에서 확인해보면 build는 정상적으로 된 것을 확인할 수 있으나, 값을 불러오진 않는다.

//  클래스가 아닌 일반 객체를 interface를 사용하여 타입지정
//  자바스크립트의 일반 객체는 DAO, DTO와 같이 값만 가지고 있는 것을 의미한다.
interface Person {
  name: string;   //  불러와서 사용할 때 반드시 넣어야 하는 값.
  age?: number;   //  물음표(?)는 설정해도 되고, 안해도 되는 값.
};

//  상속 처리
// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }

//  공통된 속성이 있는 Person을 상속받아서 사용해도 문제가 없다.
interface Developer extends Person {
  skills: string[];
};

const person: Person = {
  name: '홍길동',
  age: 50
};

const expert: Developer = {
  name: '빌게이츠',
  skills: ['C', 'C++', 'React']
};

//  다형성
const people: Person[] = [person, expert];

//  Type Alias
//  type은 특정 타입에 별칭을 붙이는 용도.  이를 사용하여 객체를 위한 타입을
//  설정할 수 있고, 배열 또는 그 어떤 타입이든 별칭을 지을 수 있음.

type Developer2 = Person & {  //  &를 사용해서 두 개 이상의 타입을 합함.  (extends를 사용하는 것과 비슷하다)
  skills: string[];
}

const expert2: Developer2 = {
  name: '이순신',
  skills: ['거북선', 'Go', 'MarkDown']
}

const people2: Person[] = [person, expert2];

//practics.ts 파일에 설정했던 enum Color와 같은 결과
type Color = 'red' | 'yellow' | 'orange';
// const color2: Color = 'green';

const colors: Color[] = ['red', 'yellow'];