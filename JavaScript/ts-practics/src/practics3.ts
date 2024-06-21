//  Generics
//  타입스크립트에서 함수, 클래스, interface, type alias를 사용할 때
//  여러 종류의 타입에 대해서 호환을 맞춰야 하는 상황에서 사용하는 문법

//  함수에서 Generics 사용하기

//  객체와 객체를 합쳐주는 함수
function merge(a: any, b:any):any {   //  any : 어떤 타입이든 상관이 없다.(all)
  return {
    ...a,
    ...b
  };
}

//  typescript에서 타입을 any로 지정하는 경우 검증의 의미가 없어지게 되는데
//  이러한 경우에 사용하는 것이 Generics
const merged = merge({name: '홍길동'}, {age: 100});
console.log(merged);

//  Generics 사용
function merge2<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged2 = merge2({name: '홍길동2'}, {age: 1000});
console.log(merged2);

function wrap<T>(param: T) {  //타입을 직접 지정하고 싶은 경우 T를 지정하고 싶은 타입으로 변경
  return {
    param
  };
}

const wraped = wrap(10);
console.log(wraped);
const wraped2 = wrap('hello');
console.log(wraped2);
// const wraped3 = wrap<string>(1);   //  에러 발생 : string 타입에 number를 할당할 수 없음 !!

//  interface에서 Generic 사용
interface Items<T> {  
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c', 'd']
}
console.log(items);

//  type에서 Generics 사용
type TypeItems<T> = {
  list2: T[];
}
const typeItems: TypeItems<number> = {
  list2: [10, 20, 30, 40, 50, 60]
}
console.log(typeItems.list2);

//  Class에서 Generics 사용
class Queue<T> {
  list: T[] = [];

  //  배열의 길이 반환
  getLength() {
    return this.getLength.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());