import React from 'react';
import { useSampleDispatch, useSampleState } from '../SampleContext';

function ReducerSample2() {

//  Context에 지정된 값을 호출  -> Custom Hook 사용.
//  개발 시 상황에 맞추어 Context 사용 여부를 결정하는 것이 가장 좋음 !!
const state = useSampleState();
const dispatch = useSampleDispatch();

const setCount = () => dispatch({type: 'SET_COUNT', count: 1});
const setText = () => dispatch({type: 'SET_TEXT', text: '리듀서 샘플'});
const setColor = () => dispatch({type: 'SET_COLOR', color: 'red'});
const setToggle = () => dispatch({type: 'TOGGLE_GOOD'});

  return (
    <div>
    <p>
      <code>count : </code> {state.count}
    </p>
    <p>
      <code>text : </code> {state.text}
    </p>
    <p>
      <code>color : </code> {state.color}
    </p>
    <p>
      <code>isGood : </code> {state.isGood ? 'true' : 'false'}
    </p>
    <div>
      <button onClick={setCount}>SET_COUNT</button>
      <button onClick={setText}>SET_TEXT</button>
      <button onClick={setColor}>SET_COLOR</button>
      <button onClick={setToggle}>TOGGLE_GOOD</button>
    </div>
  </div>
  );
}

export default ReducerSample2;