import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import SignUp from './pages/signUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<SignUp />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;