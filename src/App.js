import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
     <Router>
      <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Main' element={<Main/>}/>
      </Routes>

      </div>
     </Router>
    
  );
}

export default App;
