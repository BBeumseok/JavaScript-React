import React, { useRef, useState } from "react";
import './App.css';
// import Wrapper from "./Wrapper";
import PropTypes from "prop-types"; //prop타입 검증을 모듈..
// import StateComponent from './useState/StateTest';
// import Counter from './useState/Counter';
// import Mycomponent2 from './useState/MyComponent2';
// import EventComponent from './event/EventComponent';
// import InputSample from './event/InputSample';
// import EventComponent2 from './event/EventComponent2';
import UserList from './array/UserList';
// import ArrayKey from './array/ArrayKey';
// import InputSample2 from './array/InputSample2';
import CreateUser from './array/CreateUser';


function App() {

    const name = 'React';

    const style = {
        backgroundColor: 'gray',
        coloer:'white',
        fontSize: 24,
        padding : '1rem'
    }

    //  users 배열 객체를 useState로 변경 =>  
    const [users, setUsers] = useState ([
        {
          id: 1,
          username: '홍길동',
          email: 'hong@naver.com'
        },
        {
          id: 2,
          username: '이순신',
          email: 'leeSS@naver.com'
        },
        {
          id: 3,
          username: '유관순',
          email: 'Youks@naver.com'
        }
      ]);

      //    useState 입력값 처리를 위해서
      const [inputs, setInputs] = useState({
        username: '',
        email: ''
      });

      const {username, email} = inputs;

      const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
      }
      //    useRef를 이용한 컴포넌트에서 사용할 변수 지정
      //    useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않음
      //    때문에 useRef로 관리하고 있는 변수는 설정 후 바로 조회 가능함
      //    setTimeout, setInterval을 통해 만들어진 id
      //    외부 라이브러리를 사용하여 생성된 인스턴스
      //    scroll 위치
      const nextId = useRef(4);
      const onCreate = () => {  
        //  나중에 구현할 배열에 항목 추가 로직
        const user = {
            id: nextId.current,
            username,
            email
        };
        //  추가
        setUsers([...users, user]);

        //  입력값 정리
        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;    //  onCreate가 동작하면, useRef에 현재값에 +1 처리
      };

    return (
        <>
            {/* 2nd Day : useState 테스트 */}
{/*             <StateComponent />
            <Mycomponent2 name={'홍길동'} age={20} />
            <hr />
            <Counter />
            <hr /> */}

            {/* 2nd Day : event */}
{/*             <EventComponent />
            <EventComponent2 />
            <InputSample />
            <hr /> */}

            {/* 2nd Day : Coponent Array */}
            {/* <ArrayKey />
            <InputSample2 />
            <hr /> */}
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} /> {/* 등록 사용자 출력 */}
            
            {/* 1st Day :  */}
            {/* <Wrapper>
            <Mycomponent name = {"홍길동"} age = {20} email = {"aaa@bbb.com"} isSpecial />
            <div className='test-box'>
                <WelcomeClass name="Cahal" />
                <WelcomeFunction name = {name} />
                <br /> */} {/* or <br></br> 태그는 닫아야 합니다. */}
            {/* </div>
            <div style={style}>Hello world!!</div> */}{/*태그를 받아야한다 하나의 태그로 묶여야한다.*/}
            {/* </Wrapper> */}
        </>
    );
}

//  함수형 컴포넌트
function WelcomeFunction(props) {
    console.log(props)
    return <h1>Hello, {props.name}</h1>;
}

//  클래스형 컴포넌트
class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

//  화살표 함수를 이용한 컴포넌트
const Mycomponent = ({name, age, addr, email, isSpecial}) => {
    return(
        <div>
            {isSpecial ?
            <div>
                {"나의 첫번째  Mycomponent 입니다."}<br/>
                {"프로퍼티 1: " + name}<br/>
                {"프로퍼티 2: " + age}<br/>
                {"기본값 프로퍼티 3: " + addr}<br/>
                {"프로퍼티 4: " + email}<br/>
            </div>
            : null
            }
        </div>
    )
}

//  props 기본값 설정하기... 중요 * 대소문자를 구분한다.
//  컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하는 경우에 사용함
//  syntax 컴포넌트 defalutProps = {프로퍼티명 : 값}

Mycomponent.defaultProps ={
    addr : '서울시',
    age : 0
}


//  props 타입검증(주의 사항 대소문자를 정확하게 구분함)
//  npm install prop-types
//  컴포넌트명.propTypes={}
//  PropTypes이 기대하는 값을 가지는지 여부를 확인!

//  prop-types
Mycomponent.prototype={
    name:PropTypes.string,
    age:PropTypes.number,
    email:PropTypes.string.isRequired //    필수 값 (상위 컴포넌트에서 반들시 전달)
}
export default App;