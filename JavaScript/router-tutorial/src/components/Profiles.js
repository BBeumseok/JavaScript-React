import React from 'react';
import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom';
import User from './User';
import Header from './Header';

function Profiles() {

  return (
    <div>
      <Header />
      <hr />
      <h3>유저 정보 목록 : </h3>
      <ul>
        <li>
          <Link to='/profiles/testuser'>회원정보 1</Link>
        </li>
        <li>
          <Link to='/profiles/testuser2'>회원정보 2</Link>
        </li>
      </ul>

      {/* <Outlet /> */}
      {/* 하위 경로 설정.... */}
      {/* Outlet이 아닌 다른 방법 */}
      <Routes>
        <Route 
          path='/'  /* 자기 자신 */
          element={<div>유저를 선택하세요.</div>}
          />
          <Route path=':username' element={<User />} />
      </Routes>
    </div>
  )


}

export default Profiles;