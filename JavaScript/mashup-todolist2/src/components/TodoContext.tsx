import React, { Dispatch, ReactNode, createContext, useContext, useReducer, useRef } from 'react';

type State = {
  id: number;
  text: string;
  done: boolean;
};

type Action = 
| {type: 'CREATE'; todo: State}
| {type: 'TOGGLE'; id: number}
| {type: 'REMOVE'; id: number}

type TodoDispatch = Dispatch<Action>

const initialTodos: State[]= [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들어 사용하기',
    done: true,
  },
  {
    id: 4,
    text: '기능구현하기',
    done: false,
  },
  {
    id: 5,
    text: '복습하기',
    done: false,
  },
];

const TodoStateContext = createContext<State[] | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);
const TodoNextId = createContext<{current : number} | null>(null);

function reducer(state: State[], action: Action): State[] {
  switch(action.type) {
    case 'CREATE':
      return state.concat(action.todo);
      case 'TOGGLE':
        return state.map(todo =>
          todo.id === action.id ? {...todo, done: !todo.done} : todo
        );
        case 'REMOVE':
          return state.filter(todo => todo.id !== action.id);
          default:
            throw new Error(`Unhandled action type:`);
  }
}

export function TodoProvider({children} : {children : ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  const nextId = useRef(6);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
       <TodoNextId.Provider value={nextId}>
        {children}
       </TodoNextId.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if(!context) {
    throw new Error('Cannot find TodoContextProvider')
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


export default TodoProvider;