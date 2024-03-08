import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

//import SignUp from './pages/signUp';
import QuestionPage from './pages/questionPage';
//import FolderDownloader from './pages/folderDownloader';
//<FolderDownloader folderUrl="testBoi.zip" />

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<QuestionPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;