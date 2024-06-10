//  자바스크립트 문법 아니지만 알아야 할 개념.
function print(person) {
  // if (person === undefined || person === null) {
  if (!person) {
    //  undefined 또는 null인 경우 falsy
    console.log('person이 없습니다.');
    return;
  }
  console.log(person.name);
}

const person = null;

//  print() == null인 경우 에러발생
print(person);

//  falsy 값
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!''); //공백을 하나라도 포함할 경우 false
console.log(!NaN); //  Not a Number (문자열을 숫자로 변환할 때 parseInt())
console.log('===============================');
//  truthy 값
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{ value: 1 });

const value = { a: 1 };
const truthy = value ? true : false;
console.log('truthy? : ' + truthy);
console.log('!truthy? : ' + value);
