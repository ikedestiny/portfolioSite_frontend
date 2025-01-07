import "../style/Project.css";

export default function Project({ name, link, github, description }) {
    const deleteProject = () => {
        // Implement delete logic here
    };

    return (
        <div className="project-card">
            <div className="project-card-header">
                <h3 className="project-title">{name}</h3>
            </div>
            <div className="project-card-body">
                <p className="project-description">{description}</p>
                <div className="project-controls">
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">Website</a>
                    <a href={github} className="project-link" target="_blank" rel="noopener noreferrer">GitRepo</a>
                    <button className="project-delete-btn" onClick={deleteProject}>DELETE</button>
                </div>
            </div>
        </div>
    );
}
