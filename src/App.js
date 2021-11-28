import './style/App.css';
import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from './components/Profil';
import Nav from './components/Nav';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Text from './text';

function App() {

  const [Active, setActive] = useState(0)
  const changActive = value => {
    setActive(value)
  }
  const [Language, setLanguage] = useState('en')
  const changeLanguage = e => {
    setLanguage(e.target.value)
  }

  return (
    <Router>
      <div className="App">
        <Nav Language={Language} Text={Text} changeLanguage={changeLanguage} Active={Active} />
        <Routes>
          <Route path="/" element={<Profil Language={Language} Text={Text} changActive={changActive} />}>
          </Route>
          <Route path="/Projets" element={<Projets Language={Language} Text={Text} changActive={changActive} />}>
          </Route>
          <Route path="/Contact" element={<Contact Language={Language} Text={Text} changActive={changActive} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
