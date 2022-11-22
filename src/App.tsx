import React from 'react';
import './App.css'
import CountCard from './Components/CountCard';
import NavBar from './Components/NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/counter/' element={<CountCard />} />
      </Routes>
    </div>
  );
}

export default App;
