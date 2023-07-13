import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Scribe from './component/Scribe';
import Signup from './component/Signup';
import Login from './component/Login';
import Files from './component/Files';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Scribe />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/files' element={<Files />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
