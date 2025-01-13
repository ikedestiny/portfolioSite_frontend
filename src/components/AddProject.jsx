import '../style/Project.css';
import useProjectStore from '../state/ProjectStore';
import { useNavigate } from 'react-router-dom';

export default function AddProject() {
    const {
        add_project,
        repository,
        name,
        description,
        website,
        set_project_name,
        set_project_description,
        set_project_website,
        set_project_repository
    } = useProjectStore();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        await add_project();
        navigate('/projects'); // Navigate to the home page or any other route after adding the project
    };

    return (
        <div className="main">
            <div className="card shadow" >
                <div className="card-header text-center bg-secondary text-white">
                    <h3 className="page-title">ADD PROJECT!</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name of Project</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                onChange={(e) => set_project_name(e.target.value)}
                                value={name}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="site" className="form-label">Project Website</label>
                            <input
                                type="text"
                                className="form-control"
                                id="site"
                                name="site"
                                onChange={(e) => set_project_website(e.target.value)}
                                value={website}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="repo" className="form-label">Github Repository</label>
                            <input
                                type="text"
                                className="form-control"
                                id="repo"
                                name="repo"
                                onChange={(e) => set_project_repository(e.target.value)}
                                value={repository}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Project Description</label>
                            <textarea
                                className="form-control"
                                id="desc"
                                name="desc"
                                rows="4"
                                onChange={(e) => set_project_description(e.target.value)}
                                value={description}
                                required
                            ></textarea>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-success">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
