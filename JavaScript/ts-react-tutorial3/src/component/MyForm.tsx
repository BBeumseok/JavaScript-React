//  input 상태 관리
import React, { useState } from 'react';

//  type 설정
type MyFormProps = {
  onSubmit: (form: {name: string, description: string}) => void;
}

function MyForm({onSubmit}: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const {name, description} = form;

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //  e 값이 무엇인지 모르면 타입을 any로 지정
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description:''
    });   //  초기화
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' value={name} onChange={onChange} />
        <input name='description' value={description} onChange={onChange} />
        <button type='submit'>등록</button>
      </form>
    </div>
  )
}

export default MyForm;