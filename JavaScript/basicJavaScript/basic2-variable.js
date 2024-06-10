//  변수와 상수
//  자바스크립트 변수 : var(예전부터), let, const
//  var -> let, const 권장... 이유 호이스팅
//  let, const는 블럭 변수

// {
//   let a = 1;
//   function A() (
//     console.log(a);
//   )
// }

//  let 선언
//  변수 선언.  바뀔 수 있는 값을 지정할 때 사용...
//  재선언은 가능, 재할당 불가.
let value = 1;
console.log(value);
value = 2;
console.log(value);

//  재선언 (불가)
// let value2 = 1;
// let value2 = 2;

//  const 상수 선언
//  const는 한번 선언하고 바뀌지 않는 값
//  재할당, 재선언 둘 다 불가능
const a = 1;
a = 2;
console.log(a);

//  데이터 타입
//  1. 숫자(Number)
//  2. 문자열(String)
//  문자열은 ''(싱글 쿼터) or ""(더블 쿼터)룰 사용하여 표현
let text = 'Hello';
let name = '홍길동';

//  3. Boolean (참/거짓)
let good = true;
let loading = false;

//  4. null과 undefined
//  데이터가 없음을 의미함... 하지만 용도가 다름
//  null => 값이 없음을 나타냄
//  undefined => 값이 설정되지 않음을 의미함
let friend = null; //  고의적인 설정
console.log(friend);

let testUndefined; //  설정하지 않았음을 의미함.
console.log(testUndefined);
