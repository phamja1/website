import React from 'react'
import '../App.css'
import NavBar from "./NavBar";
import '../styles/ProjectPage.css'
import CountCard from "./CountCard";
import {Link} from 'react-router-dom';

function ProjectPage() {

    const projects: ProjectCardProps[] = [{
        title: 'Counter',
        description: "This is a basic object which uses React state and React hooks to make a counter.",
        linkTo: '/projects/counter'
    }]
    return (
        <>
            <NavBar/>
            <div className='project-page'>
                <h1> Projects </h1>
                {projects.map((project) =>
                    <ProjectCard key={project.title} title={project.title} description={project.description} linkTo={project.linkTo}/>
                )}
            </div>
        </>
    )
}

function ProjectCard(props: ProjectCardProps) {
    return (
        <div className='floating-card project-card'>
            <h2> {props.title} </h2>
            <p>{props.description}</p>
            <Link to={props.linkTo}>
                <button className='project-button'>Visit Project!</button>
            </Link>
        </div>
    )
}

type ProjectCardProps = {
    title: string,
    description: string,
    linkTo: string
}

export default ProjectPage