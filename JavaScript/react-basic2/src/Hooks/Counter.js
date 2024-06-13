import React, { useReducer } from 'react';

  //  state - 어떤 상태, action - 동작과 관련된 타입
  //  리듀서 함수 : 업데이트 정보를 통해서 새로운 상태를 만듬
function reducer(state, action) { 

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
      case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // const [number, setNumber] = useState(0);
  //  reducer 적용
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({type: 'INCREMENT'});
  };

  const onDecrease = () => {
    dispatch({type: 'DECREMENT'});
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );

}

export default Counter;