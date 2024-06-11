import React from "react";


/*
*props.children
*   -> 컴포넌트 태그사이에 넣은 값을 조회하고 싶을때, props.children을 조회해서 사용하면 된다.
*/
function Wrapper(props) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };



    return (
        <div style={style}>
            {props.children} {/*children으로 들어온 컴포넌트를 렌더링에 추가함*/}
        </div>
    );
}
export default Wrapper;