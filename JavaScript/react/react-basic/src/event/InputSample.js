import React, { useState } from 'react';

function InputSample() {

  const [inputs, setInputs] = useState({
    name: '',
    nickName: ''
  });

  const {name, nickName} = inputs;
  
  //  change 이벤트 객체
  const onChange = (e) => {
    const {value, name} = e.target;   //  name과 value를 추출
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  //  초기화 버튼 이벤트
  const onReset = () => {
    setInputs({
      name: '',
      nickName: ''
    });
  };

  return (
    <div>
      <input name='name' placeholder='이름' onChange={onChange} value={name} />
      <input name='nickName' placeholder='닉네임' onChange={onChange} value={nickName} />
      <button onClick={onReset}>초기화</button>
      {/* 텍스트 박스 내부 값도 초기화 하는 경우 value값도 동기화 */}
      <div>
        <b>값 : </b>
        {name} ({nickName})
      </div>
    </div>
  );
};

export default InputSample;