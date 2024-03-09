import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { UseUserContext } from './hooks/useUserContext';
import './App.css';

import SignUp from './pages/signUp';
import QuestionPage from './pages/questionPage';
import LeaderPage from './pages/leaderboardPage';
import TimerPage from './pages/timerpage';
//import FolderDownloader from './pages/folderDownloader';
//<FolderDownloader folderUrl="testBoi.zip" />

function App() {
  const {user} = UseUserContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/login' element={!user ? <SignUp/> : <QuestionPage />}/>
            <Route path='/challenges' element={!user ? <SignUp/> : <QuestionPage />}/>
            <Route path='/leaderboard' element={<LeaderPage />}/>
            <Route path='/timer' element={<TimerPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;