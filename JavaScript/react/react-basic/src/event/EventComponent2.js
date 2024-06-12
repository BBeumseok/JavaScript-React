//  useState를 하나로 관리하기 ...

import React, { useState } from 'react';

const EventComponent2 = () => {

  const [form, setForm] = useState({name: '', topic: ''});  //  name, topic은 객체 state

  let handleChange = (e) => {
    const copy = {...form, [e.target.name]: e.target.value};  //  [e.target.name] -> name은 input 태그 name 값을 가리킴
    //  spread 문법으로 복사 후 key 수정
    setForm(copy);  //state 변경
  }

  let handleClick = () => {
    alert(`결과: ${form.name} 님의 할 일 : ${form.topic}`)
    setForm({name: '', topic: ''}); //  state 변경
  }

  return (
    <div>
      <h3>리액트 이벤트 핸들링(객체로 핸들링)</h3>
      <input 
      type='text' 
      name='name' 
      onChange={handleChange} 
      value={form.name} />
      <br />
      <h3>변화된 값 : {form.name}</h3>
      <input type='text'
      name='topic'
      onChange={handleChange}
      value={form.topic} />
      <br />
      <h3>체인지 된 결과 : {form.topic} </h3>
      <button type='button' onClick={handleClick}>클릭미</button>
    </div>
  );
}

export default EventComponent2;