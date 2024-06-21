"use strict";
var count = 0; //숫자
count += 1;
// counst = '갑자기 문자열'    //  에러 발생 !! ... count
//  typescript의 경우 선언 시 타입을 설정하지 않으면 처음으로 할당되는 값의 타입으로 자동 설정됨
var message = 'Hello World';
var done = true; //  불리언 값
// let done2 = true;
// done2 = 'false';
var numbers = [1, 2, 3]; //숫자형 배열
var messages = ['hello', 'world']; //문자열 배열
numbers.push(5);
// messages.push(1); //  에러 발생 (문자열 배열에 숫자를 할당할 수 없음)
//  undefined 와 null 허용
var mightBeUndefined = undefined; //  String 또는 undefined 사용 가능
var nullable = null;
// let count2: number = null;  //  null은 계산할 수 없는 값이기 때문에 숫자형에 사용 불가
//  enum 타입
// let color : 'red' | 'yellow' | 'orange' = 'purple';   //  앞에 정의된 3개의 값 이외에는 할당할 수 없음
var color = 'red';
color = 'yellow';
