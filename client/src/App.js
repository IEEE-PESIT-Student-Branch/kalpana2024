import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

//import SignUp from './pages/signUp';
//import QuestionPage from './pages/questionPage';
import FolderDownloader from './pages/folderDownloader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<FolderDownloader folderUrl="testBoi.zip" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;