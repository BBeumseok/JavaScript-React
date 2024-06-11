import React from "react";
import './App.css';
import Wrapper from "./Wrapper";
import PropTypes from "prop-types"; //prop타입 검증을 모듈..
function App() {

    const name = 'React';

    const style = {
        backgroundColor: 'gray',
        coloer:'white',
        fontSize: 24,
        padding : '1rem'
    }

    return (
        <>
            <Wrapper>
            <Mycomponent name = {"홍길동"} age = {20} email = {"aaa@bbb.com"} isSpecial />
            <div className='test-box'>
                <WelcomeClass name="Cahal" />
                <WelcomeFunction name = {name} />
            </div>
            <div style={style}>Hello world!!</div>{/*태그를 받아야한다 하나의 태그로 묶여야한다.*/}
            </Wrapper>
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


//화살표 함수를 이용한 컴포넌트
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

// props 기본값 설정하기... 중요 * 대소문자를 구분한다.
// 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하는 경우에 사용함
// syntax 컴포넌트 defalutProps = {프로퍼티명 : 값}

Mycomponent.defaultProps ={
    addr : '서울시',
    age : 0
}


//props 타입검증(주의 사항 대소문자를 정확하게 구분함)
// npminstall prop-types
// 컴포넌트명.propTypes={}
//PropTypes이 기대하는 값을 가지는지 여부를 확인!

//prop-types
Mycomponent.prototype={
    name:PropTypes.string,
    age:PropTypes.number,
    email:PropTypes.string.isRequired //필수 값 (상위 컴포넌트에서 반들시 전달)
}
export default App;