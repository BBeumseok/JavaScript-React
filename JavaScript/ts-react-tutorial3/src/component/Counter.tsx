//  useState()를 사용하는 카운트
// import { count } from 'console';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);    //count의 state 타입을 number로 지정

  //  어떨 때에 사용하는가?
  // type information = {name: string; description: string};
  // const [info, setInfo] = useState<information | null>(null);


  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter; 
