// import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';
import MyPage from './components/MyPage';

function App() {

  const {pathname} = useLocation();

  return (
    <>
    {/* path의 모든 경로는 순차적으로 확인 후 처리 */}
    <Routes>
      {/* useNavigate() Hook */}
      <Route path='/' element={<Home />} /> 

      {/* Navigate Component */}
      <Route path='/mypage' element={<MyPage />} />

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
      {/* <Route path='/profiles' element={<Profiles />} >
        <Route path=':username' element={<User />} />
      </Route> */}

      {/* /*(all) : 모든 경로 */} 
      <Route path='/profiles/*' element={<Profiles />} />

      {/* 잘못된 경로로 접근 시 404 띄우기 */}
      <Route path='/*' element={    /* Switch(v5)를 사용할 경우 이 경로는 마지막에 작성해야 한다. */
        <div>
          <h1>HTTP 404</h1>
          <h2>{pathname} - 이 페이지는 존재하지 않습니다.</h2>
        </div>
      } />
      </Routes>
      </>
  );
}

export default App;
