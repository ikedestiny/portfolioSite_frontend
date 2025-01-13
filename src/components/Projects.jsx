import useProjectStore from '../state/ProjectStore';
import { useEffect } from 'react';
import Project from "./Project";
import '../style/Project.css';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
    const { get_all, projects } = useProjectStore();
    const navigate = useNavigate()
    const handleClick = (e, link) => {
        e.preventDefault();
        navigate(link);
    };

    useEffect(() => {
        get_all();
    }, [get_all]);

    return (
        <div className="main">
            <div className="card-header text-center bg-secondary text-white">
                <h3 className="page-title">All Projects</h3>
            </div>
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
            <button className='glow-button' onClick={(e) => handleClick(e, `/add_project`)}>Add Project</button>
        </div>
    );
}
