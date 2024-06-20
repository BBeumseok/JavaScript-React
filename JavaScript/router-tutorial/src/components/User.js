import React from 'react';
import { Link, Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom';

/* 
  id 객체 2개를 생성합니다.   
  const profileData = {
    testUser: {
      name: '홍길동',
      age: '미상',
      description: '동해번쩍 서해번쩍 ... 신출귀몰 도적'
    };

    testUser2: {
      name: '이순신',
      age: '46',
      description: '세계사에 유래없는 해군제독 ... 왜란 종결자'
    }
  };
  
  해당 프로파일 데이터가 각각의 정보로 출력되게 만들어 주세요
*/

/* 
  Profiles 라는 컴포넌트 생성

  해당 컴포넌트에서는 ProfileData가 출력되고,
  출력된 ProfileData를 선택하면 하단에 그 정보를 출력하게 만듭니다.

  예시 )
  testuser
  testuser2

  결과 : testuser(홍길동) .....  ~~~~
*/

function User() {
  
  //  useLocation() 사용
  //  쿼리스트링 문자열을 나눠서 작업해야 합니다
  const location = useLocation();
  console.log(location);
  console.log(location.search); //  문자열로 해당 값을 전달

  //  useSearchParams() 사용
  //  알아서 쿼리스트링을 나눠줍니다.
  const [obj, setObj] = useSearchParams();
  let id = obj.get('id');
  let key = obj.get('key');
  // console.log('obj : ' + obj);
  // console.log('id : ' + id)
  // console.log('key : ' + key);
  // obj.forEach(i => console.log(i));
  // obj.set('id', 'test1111');
  // console.log('obj.set 처리 후 : ' + obj.get('id'));

  //  useParam() Hook을 사용한 객체 불러오기
  const profileData = {
    testuser: {
      name: '홍길동',
      age: '미상',
      description: '동해번쩍 서해번쩍 ... 신출귀몰 도적'
    },
    testuser2: {
      name: '이순신',
      age: 46,
      description: '세계사에 유래없는 해군제독 ... 왜란 종결자'
    }
  };

  //  요정 정보를 param에 담기
  const param = useParams();
  console.log(param);

  const {username} = param;
  const profile = profileData[username];

  return (
    <div>
      <ul>
        <Link to='/'>홈</Link>
        <li><Link to='/info'>회원 정보 페이지</Link></li>
      </ul>
      <h2>User 페이지</h2>

      {/* 쿼리스트링 확인하기 (삼항연산자를 이용하여 출력) */}
      <p>이 페이지는 사용자의 정보를 처리하여 보여주는 페이지 입니다.</p>
      <div>
        {obj.get('id') && <h1>{id}</h1>}
        <h3>Profile : </h3>
        {profile ?
          <div>
            <h4>{username}({profile.name})</h4>
            <h5>나이는 : {profile.age}</h5>
            {profile.description && <p>{profile.description}</p>}
          </div>
          :
          <div>존재하지 않는 유저입니다.</div>
        }
      </div>
    </div>
  )
}

export default User;