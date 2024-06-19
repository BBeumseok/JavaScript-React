import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  let [raw, setRaw] = useState();

  //  1. 클릭 시 비동기 통신
  // const handleClick = () => {
  //   fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setRaw(data);
  //   }).catch(e => console.log(e));
  // }
  
  //  2. useEffect() 사용
  //  화면 렌더링 완료 시 데이터 처리를 위해서 사용
  //  이 때에 비동기 작업을 컴포넌트에서 바로 쓰고, state를 변경하면 무한루프에 빠지게 된다.
  //  useEffect() 훅을 이용해서 첫 번째 렌더링 완료 시에만 데이터를 가져오게 처리

  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //   .then(response => response.json())   /* response 객체타입 데이터를 json 형태로 변경 */
  //   .then(data => setRaw(data))
  //   .catch(e => console.log(e));
  // }, []);

  ///////////////////////// axios를 이용한 통신 테스트 /////////////////////////
  // const handleClick = () => {
  //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //   .then(response => {
  //     console.log(response);
  //     console.log(response.data);
  //     setRaw(response.data);
  //   });
  // }

  //  async(비동기임을 알림), await(순차적으로) 적용
  //  => 비동기 방식의 통신을 동기적 통신으로 바꿔줌 (순차적으로 처리)

  //  async, await 규칙
  //  1. async 함수에 안에 await가 존재함.
  //  2. function 앞에 async 키워드를 추가. 함수는 언제나 Promise를 반환
  //  3. 리턴이 프로미스라면 await 적용하고, then을 없앨 수 있음.

  const handleClick = async () => {
    let response = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    /* .then(response => {
      console.log(response.data);
      console.log(1);
    }); */
    console.log(response.data);
    setRaw(response.data);
    console.log(1);

    let response2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    /* .then(response => {
      console.log(response.data);
      console.log(3);
    }); */
    console.log(response2.data);
    setRaw(response2.data);
    console.log(2);

    let response3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    /* .then(response => {
      console.log(response.data);
      console.log(5);
    }); */
    console.log(response3.data);
    setRaw(response3.data);
    console.log(3);
  }


  return (
    <div>
      <h3>클릭 시 fetch로 데이터 가져오기</h3>
      <button type='button' onClick={handleClick}>데이터로드</button>
      {raw !== undefined ? 
      <div>
        {raw.userId}<br />
        {raw.userPw}<br />
        {raw.userName}<br />
      </div>
      : undefined
    }
    </div>
  );
}

export default App;
