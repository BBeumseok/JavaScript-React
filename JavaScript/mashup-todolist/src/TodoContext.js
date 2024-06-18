//  useReducer()를 사용하여 상태를 관리하는 TodoProvider Component
import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들어 사용하기',
    done: true
  },
  {
    id: 4,
    text: '기능구현하기',
    done: false
  },
  {
    id: 5,
    text: '복습하기',
    done: false
  }
];

function todoReducer(state, action) {
  //  생성, 제거, 토글(완료여부)
  switch(action.type) {
    case 'CREATE':
      return state.concat(action.todo);
      case 'TOGGLE':
        return state.map(todo =>
          todo.id === action.id ? {...todo, done: !todo.done} : todo
        )
        case 'REMOVE':
          return state.filter(todo => todo.id !== action.id);
          default:
            throw new Error(`Unhandled action type : ${action.type}`);
  };
}

//  Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
//  NextId를 넘겨야 하는 이유 : 생성 시 NextId가 필요함 (고유값을 전달받아 작업할 수 있게 하기위해서)
const TodoNextId = createContext();

export function TodoProvider({children}) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);   //기본값 설정이 되어 있어서 초기값이 0이 아님

  return (
    <TodoStateContext.Provider value={state}> {/* state를 Context로 전달 */}
      <TodoDispatchContext.Provider value={dispatch}> {/* dispatch를 Context로 전달 */}
        <TodoNextId.Provider value={nextId}>
        {children}
        </TodoNextId.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

/* useContext에 직접 사용하는 대신에 useContext를 사용하는 Hook 만들어 내보내기 */
/* 불러오거나 별도의 선언없이 Custom Hook을 만들어서 사용 */
/* Custom Hook Error */
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if(!context) {
    throw new Error('Cannot find TodoContextProvider')  /* Context가 존재하지 않을 경우 */
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if(!context) {
    throw new Error('Cannot find TodoContextProvider')
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextId);
  if(!context) {
    throw new Error('Cannot find TodoContextProvider')
  }
  return context;
}