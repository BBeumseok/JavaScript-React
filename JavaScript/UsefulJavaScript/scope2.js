//  var
var value = 'hello';

function myFunction() {
  var value = 'bye!';
  if (true) {
    var value = 'world';
    console.log('block scope');
    console.log(value);
  }
  console.log('function scope');
  console.log(value); //  호이스팅 발생 => if문 내부에 value 값 출력됨
}

myFunction();
console.log('global scope: ');
console.log(value);

//  Hoisting
//  자바스크립트에서 아직 선언되지 않은 함수/변수를 끌어올려서 사용할 수 있는
//  작동 방식을 의미한다.

myFunctionHoisting();

function myFunctionHoisting() {
  console.log('hello world !!');
}

console.log(number);
var number = 2;
/*
var number;
console.log(number);
number = 2;
에러가 발생하지 않고, undefined 출력
호이스팅으로 인해 끌어올렸지만 초기화되지 않은 변수여서 undefined가 나오는 것
*/
