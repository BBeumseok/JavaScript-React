import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

//  글로벌 스타일을 추가하고 싶을 때 사용하는 createGlobalStyle
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>  {/* TodoTemplate 하위에 컴포넌트들은 TodoProvider에 의해 연결되어야 함 */}
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
