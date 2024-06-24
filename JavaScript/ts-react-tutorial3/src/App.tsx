// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { SampleProvider } from './SampleContext';
// import Counter from './component/Counter';
// import CounterReducer from './component/CounterReducer';
// import Greetings2 from './component/Greetings';
// import Greetings from './component/Greetings';
// import MyForm from './component/MyForm';
// import ReducerSample from './component/ReducerSample';
import ReducerSample2 from './component/ReducerSample2';

function App() {

  // const onClick = (name: string) => {
  //   console.log(`${name} say hello`);
  // }

  // const onSubmit = (form: {name: string, description: string}) => {
  //   console.log(form);
  // }

  return (
    <div className="App">
      {/* <Greetings name='park' />  */}
      {/* Greetings.tsx 파일에서 props 값으로 name을 설정 했기 때문에 반드시 포함해야 함 */}
      {/* <Greetings name='park' onClick={onClick}/>
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <CounterReducer />
      <ReducerSample /> */}

      <SampleProvider>
        <ReducerSample2 />
      </SampleProvider>
    </div>
  );
}

export default App;
