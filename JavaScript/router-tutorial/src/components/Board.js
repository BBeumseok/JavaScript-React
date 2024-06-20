import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function Board() {

  const myStyle = {
    background: 'black',
    color: 'white'
  };

  return (
    <div>
      <h3>게시글 목록</h3>
      <ul>
        {/* <li><Link to='/board/1'>글1</Link></li>
        <li><Link to='/board/2'>글2</Link></li>
        <li><Link to='/board/3'>글3</Link></li> */}

        {/* NavLink 사용 */}
        {/* true일 경우 myStyle 적용, 그렇지 않을 경우 적용 X */}
        <li><NavLink to='/board/1' style={({isActive}) => {
          return isActive ? myStyle : undefined
        }}>
          글 1
        </NavLink>
        </li>
        <li><NavLink to='/board/2' style={({isActive}) => {
          return isActive ? myStyle : undefined
        }}>
          글 2
        </NavLink>
        </li>
        <li><NavLink to='/board/3' style={({isActive}) => {
          return isActive ? myStyle : undefined
        }}>
          글 3
        </NavLink>
        </li>
      </ul>
      <hr />
      {/* <Outlet>을 사용하여 하위 컴포넌트를 출력 */}
      <Outlet />
    </div>
  );
}

export default Board;