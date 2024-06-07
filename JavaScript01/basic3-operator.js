//  연산자
//  1. 산술연산자
//  +, -, *, /
let a = 1;
console.log(a);
a = 1 + 2 - (3 * 4) / 4;
console.log(a);
let b = 1;
b++; //  후위
++b; //  전위
console.log(b);
console.log(b++);
console.log(++b);

b = 1;
b--;
console.log(b);

//  2. 복합 대입연산자
let c = 1;
c = c + 1;
//  이 코드를 복합 대입연산자로
c = 1;
c += 1;
//  다른 연산자도 가능
let d = 1;
d %= 10;
console.log(d);

//  3. 논리연산자
//  논리연산자는 Boolean을 위한 연산자
//  반환 결과는 true 또는 false
//  ! : not,  && : AND,   || : OR
const e = !true;
console.log(e);

const f = true && true;
console.log(f);
const g = true && false;
console.log(g);

let h = true || true;
console.log(h);
h = true || false;
console.log(h);
h = false || true;
console.log(h);
h = false || false;
console.log(h);

//  연산 순서
//  논리연산자 순서...  NOT -> AND -> OR의 순서를 가진다.
const value = !((true && false) || (true && false) || !false);
console.log(value);

//  4. 비교 연산자
//  ==, ===
//  == : 타입 검사를 하지 않는다.
//  === : 값, 타입 둘 다 비교
const x = 1;
const y = 1;
const equal = x == y;
console.log(equal);

//  !=, !==
//  != : 타입 검사 X
//  !== : 타입 검사 O
const notEqual = 'a' !== 'b';
console.log(notEqual);
console.log(1 != '1');
console.log(1 !== '1');
//  <, >, <=, >=

//  문자열 붙이기...
const t1 = '안녕';
const t2 = '하세요';
console.log(t1 + t2);
