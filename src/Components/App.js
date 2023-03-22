import '../App.css';
import {Route, Routes} from "react-router-dom"
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path = "/" element={<LandingPage/>}/>
        <Route path = "/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
