export default function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg bg-dark" style={{ color: 'white' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/logo.webp" className="App-logo logo img-fluid" alt="..." />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="home nav-link active" style={{ color: 'white' }} aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/blog">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/resume">
                                Resume
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
