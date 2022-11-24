// import React from "react";
import {Routes, Route} from 'react-router-dom';
import CountCard from "./Components/CountCard";
import Home from "./Components/Home";
import ProjectPage from "./Components/ProjectPage";
import Sandbox from "./Components/Sandbox";

function SiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="/projects/counter" element={<CountCard />} />
            <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
    );
}

export default SiteRoutes;
