import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

function Profiles() {

  return (
    <div>
      <h3>유저 정보 목록 : </h3>
      <ul>
        <li>
          <Link to='/profiles/testuser'>회원정보 1</Link>
        </li>
        <li>
          <Link to='/profiles/testuser2'>회원정보 2</Link>
        </li>
      </ul>

      <Outlet />
      {/* 하위 경로 설정.... */}
    </div>
  )


}

export default Profiles;