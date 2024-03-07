import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

//import SignUp from './pages/signUp';
import QuestionPage from './pages/questionPage';

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