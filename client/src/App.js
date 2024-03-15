import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { UseUserContext } from './hooks/useUserContext';
import './App.css';

import SignUp from './pages/signUp';
import MainPage from './pages/mainPage';
import Home from './pages/home';
import Rules from './pages/rules';

function App() {
  const {user} = UseUserContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/rules' element={<Rules/>}/>
            <Route path='/login' element={!user ? <SignUp/> : <MainPage />}/>
            <Route path='/challenges' element={!user ? <SignUp/> : <MainPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;