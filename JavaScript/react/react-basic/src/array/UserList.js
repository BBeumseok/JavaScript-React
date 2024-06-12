import React, { useRef }  from 'react';

//  User Component
function User({user}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>  {/* 특정 패턴 반복 시 이런 형태로 사용 */}
    </div>
  );
}

function UserList({users}) {

  return (
    <div>
      {/* array.map() 함수를 이용한 컴포넌트 반복 */}
      {/* {users.map(user => (
        <User user={user} key={user.id} />
      ))} */}
      {/* 컴포넌트 내에 각각의 값들을 key 설정을 통해 구분함 */}
      {users.map((user, index) => (
        <User user={user} key={index} /> // key값을 인덱스 값으로 구분하여 확인
      ))}
    </div>
  );
}

export default UserList;