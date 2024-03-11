import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { UseUserContext } from './hooks/useUserContext';
import './App.css';

import SignUp from './pages/signUp';
// import QuestionPage from './pages/questionPage';
// import LeaderPage from './pages/leaderboardPage';
// import TimerPage from './pages/timerpage';
import FolderDownloader from './pages/folderDownloader';
import MainPage from './pages/mainPage';

function App() {
  const {user} = UseUserContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<FolderDownloader folderUrl="https://firebasestorage.googleapis.com/v0/b/twilight-music-streaming.appspot.com/o/questions%2FPoppins.zip?alt=media&token=6459c608-01ea-4ef6-878e-62c70a5b161c" />}/>
            <Route path='/login' element={!user ? <SignUp/> : <MainPage />}/>
            <Route path='/challenges' element={!user ? <SignUp/> : <MainPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;