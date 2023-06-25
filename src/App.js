
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
