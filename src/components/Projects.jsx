import useProjectStore from '../state/ProjectStore';
import { useEffect } from 'react';
import Project from "./Project";
import '../style/Project.css';

export default function Projects() {
    const { get_all, projects } = useProjectStore();

    useEffect(() => {
        get_all();
    }, [get_all]);

    return (
        <div className="main">
            <h1 className='page-title mt-5'>All projects</h1>
            <div className="projects">
                {projects.map(project => (
                    <Project
                        key={project.id} // Assuming each project has a unique 'id'
                        name={project.name}
                        link={project.website}
                        description={project.description}
                        github={project.repository}
                    />
                ))}
            </div>
            <a className="download-button" href="/add_project">Add Project</a>
        </div>
    );
}
