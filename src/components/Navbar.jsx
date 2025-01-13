import '../style/navbar.css';
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
    return (
        <nav id="navbar">
            <div className="navbar-container">
                <a className="navbar-logo" href="#">
                    <img src="/logo.webp" className="logo" alt="Logo" />
                </a>

                <form className="search-form">
                    <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                    <button className="search-btn" type="submit">Search</button>
                </form>

                <div className="navbar-links">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blogs">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}
