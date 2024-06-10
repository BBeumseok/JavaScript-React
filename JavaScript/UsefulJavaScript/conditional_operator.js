//  삼항연산자 연습
const array = [];
// if (array.length === 0) {
//   text = '배열이 비어있습니다.';
// } else {
//   text = '배열이 비어있지 않습니다.';
// }

let text =
  array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다';

console.log(text);

//  삼항연산자 중첩 사용
const condition1 = false;
const condition2 = false;

const value = condition1 ? '와우!' : condition2 ? '비비디' : '바비디 부';
console.log(value);
