import React, { useRef, useState } from 'react';

function HookRef() {

  const [form, setForm] = React.useState({data: '', result: ''});

  //  useRef
  const inputTag = useRef(null);
  
  //  input Handling
  const handleChange = e => {
    setForm({data: e.target.value});  //  input값 변경 시마다 data 변수의 변화
  };

  //  Button Handling - 클릭 시 state는 변경하고, input 태그에 포커스 처리
  const handleClick = e => {
    console.log('클릭 하기 전');
    console.log(inputTag);
    console.log(inputTag.current);
    setForm({data: '', result: form.data});

    //  useRef의 사용 - current로 ref의 현재 태그에 접근 가능
    inputTag.current.focus();

    // inputTag.current.type = 'email';
  }

  return (
    <div>
      할 일: <input type='text' value={form.data} onChange={handleChange}
      ref={inputTag} />
      <button type='button' onClick={handleClick}>등록하기</button>
      <br />
      결과 : {form.result}
    </div>
  )
}

export default HookRef;