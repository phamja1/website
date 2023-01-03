// import React from "react";
import {Routes, Route} from 'react-router-dom';
import CountCard from "./Components/CountCard";
import Home from "./Components/Home";
import ProjectPage from "./Components/ProjectPage";
import QuestionsPage from './Components/QuestionsPage';
import Sandbox from "./Components/Sandbox";
import TriviaPage from './Components/TriviaPage';

function SiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="projects">
                <Route index element={<ProjectPage/>}/>
                <Route path="counter" element={<CountCard />} />
                <Route path="trivia" >
                    <Route index element={<TriviaPage />}/>
                    <Route path='questions/:questionId' element={<QuestionsPage />} />
                </Route>
            </Route>
            <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
    );
}

export default SiteRoutes;
