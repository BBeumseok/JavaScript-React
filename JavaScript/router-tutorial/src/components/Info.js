import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';

function Info() {

  //  useParams() 훅
  let param = useParams();
  console.log(param);

  return (
    <div>
      <Header />
      <li><Link to='/'>홈</Link></li>
      <li><Link to='/user'>회원 페이지</Link></li>
      <h2>{param.num}번 Info 페이지</h2>
      <p>이 페이지는 React Router를 이용한 페이지 처리 결과입니다.</p>
    </div>
  )
}

export default Info;