//  Custom Hooks : 직접 훅을 만들어 사용
//  반복적인 input을 관리하는 코드를 훅으로 
import React, { useCallback, useState } from 'react';

function useInputs(initialForm) {
  //  useState
  const [form, setForm] = useState(initialForm);

  //  Change
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setForm(form => ({...form, [name]: value}));
  }, []);

  //  reset(form 값 초기화)
  const reset = useCallback(() => setForm(initialForm), [initialForm])

  return [form, onChange, reset];

}

export default useInputs;