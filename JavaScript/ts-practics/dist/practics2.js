"use strict";
//  함수 타입 정의하기
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 20));
//  typescript를 활용하면 문법적 에러를 사전에 방지할 수 있습니다.
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([10, 20, 30, 40, 50]);
console.log(total);
