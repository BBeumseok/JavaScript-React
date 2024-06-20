import React from 'react';
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function MyPage() {

  //  useNavigate() Hook - 이벤트 처리 시 사용
  
  //  렌더링 과정에서 useNavigate() 훅을 사용할 수 없다는 경고 후 동작 X
  // let nav = useNavigate();
  // let loginYN = false;    //  로그인이 아닌 상태

  // if(!loginYN) {
  //   nav('/');
  // }

  //  쿼리스트링을 사용하여 login 여부를 전달 (true or false)
  //  로그인 여부에 따라서 동작하는지 확인하세요.
  const [obj] = useSearchParams();

  //  Navigate Component
  let loginYN = obj.get('login');    //  로그인 아님 !!
  if(!loginYN) {
    return <Navigate to='/' replace={true} />   //  replace - 교체할 것인지 여부
  }

  return (
    <div>
      여기는 로그인한 사용자만 접근 가능합니다.
    </div>
  );
}

export default MyPage;