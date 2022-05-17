import './App.css';
import Nav from './Nav'
import Main from "./Main"
import Verify from './routes/Verify'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <div className="nav">
        <Nav/>
      </div>
      <div className="display">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
