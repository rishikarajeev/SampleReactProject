import logo from './logo.svg';
import './App.css';
import {Route,Routes} from'react-router-dom'
import HomePage from './Pages/HomePage';
import SignUpPage1 from './Pages/SignUpPage1';

import PersonalProfile from './Pages/ProfileTest';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<SignUpPage1/>}></Route>
      <Route path="/profile" element={<PersonalProfile/>}></Route>
    </Routes>
  );
}

export default App;
