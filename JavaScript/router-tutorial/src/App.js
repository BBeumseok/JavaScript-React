// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> 
      {/* 
        element : 어떤 컴포넌트를 보여줄지 설정해주면 된다. (태그형식) 
        Component : 컴포넌트 그 자체를 불러와야 합니다.
      */}
      <Route path='/user' element={<User />} />
      <Route path='/info/:num' element={<Info />} />

      {/* useParams() 훅을 이용한 유저 정보 불러오기 */}
      <Route path='/user/:username' Component={User} />

      {/* 
        중첩라우트 처리를 위한 설정
        상위 컴포넌트 포함되는 하위 컴포넌트를 넣어줍니다.
      */}
      <Route path='/board' element={<Board />} >
        <Route path=':num' element={<BoardContent />} />
      </Route>

      {/* Profile 중첩 테스트  */}
      <Route path='/profiles' element={<Profiles />} >
        <Route path=':username' element={<User />} />
      </Route>

      </Routes>
  );
}

export default App;
