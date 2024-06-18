import React, { useState } from 'react';
import Styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = Styled.button`
    background: #38d9a9;
    &:hover{
        background: #63e6be;
    }
    &:active{
        background: #20c997;
    }
    
    //해당내용을 우선시해서 올려준다
    z-index:5;
    cursor:pointer;
    width: 80px;
    height: 80px;
    display:block;
    align-items:center;
    justify-content:center;
    font-size:60px;
    position:absolute;
    left:50%;
    bottom:0px;
    transform:translate(-50%,50%);
    color:white;
    border-radius:50%;
    border:none;
    outline:none;
    display:flex;
    align-items:center;

    transition: 0.125s all ease-in;
    ${props =>
      props.open &&
      css`
        background: #ff6b6b;
        &:hover {
          background: #ff8787;
        }
        &:active {
          background: #fa5252;
        }
          transform: translate(-50%, 50%) rotate(45deg); /* deg: degree 약어 */
      `
    }
`;
const InsertFormPositioner = Styled.div`
    width:100%;
    bottom:0;
    position:absolute;
`;

const InsertForm = Styled.form` /* div가 아닌 form */
    background: #f8f9fa;
    padding-left:32px;
    padding-top:32px;
    padding-right:32px;
    padding-bottom:72px;
    border-bottom-left-radius:16px;
    border-bottom-right-radius:16px;
    border-top:1px solid #e9ecef;
`;

const Input = Styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate(){
    //TodoCreate 컴포넌트 상태
    const [open,setOpen] = useState(false);
    const [value, setValue] = useState('');

    //  추가 버튼 클릭 이벤트 시 동작 설정
    const onToggle = () => setOpen(!open);

    //  input 입력값 처리
    const onChange = e => setValue(e.target.value);
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    // 입력한 값을 처리하는 기능
    const onSubmit = e => {
        e.preventDefault();    //폼 기본 동작 방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');   // 입력값 초기화
        setOpen(false); //  모달 닫기
        nextId.current += 1;    //  다음 ID 준비
    };

    return(
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}> {/* form tag */}
                        <Input 
                        autoFocus placeholder='할 일을 입력 후, Enter를 누르세요'
                        onChange={onChange} value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )
}
export default TodoCreate;
