import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
      <div>
        <ul>
          {/* 
            Link 태그를 이용하여 다른 페이지로 이동.
            to 속성을 이용하여 연결할 주소를 적습니다.
            어느 컴포넌트든 사용이 가능합니다.

            Routes 사이에 있는 경로를 이동할 때 사용합니다.
            주의 !! <Link> 와 <link>는 완전히 다른 태그입니다.
          */}
          <li><Link to='/'>홈</Link></li>
          <li><Link to='/user'>회원페이지</Link>(Link 태그)</li>
          <li><Link to='/info'>회원 정보 페이지</Link></li>
          <li><a href='/user'>회원페이지</a>(a 태그)</li>

          {/* Link 태그에 쿼리스트링을 이용하기 */}
          <li>
            <Link to='/user?id=aaa111&key=1'>회원페이지(쿼리 param 처리)</Link>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <Link to='/info/1'>1번 info</Link><br />
            <Link to='/info/2'>2번 info</Link><br />
            <Link to='/info/3'>3번 info</Link><br />
          </li>
        </ul>
        <h2>홈 페이지</h2>
        <p>지금 보여지는 곳은 홈 입니다. 사이트 대문이죠 !!!</p>
      </div>
    );
}

export default Home;