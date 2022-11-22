import React from 'react';
import './App.css'
import CountCard from './Components/CountCard';
import NavBar from './Components/NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Sandbox from "./Components/Sandbox";
import ProjectPage from "./Components/ProjectPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='projects' element={<ProjectPage />} />
                <Route path='/projects/counter' element={<CountCard/>}/>
                <Route path='/sandbox' element={<Sandbox/>}/>
            </Routes>
        </div>
    );
}

export default App;
