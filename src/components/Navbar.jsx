import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/navbar.css';
import { VscChromeClose, VscMenu } from "react-icons/vsc";

export default function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e, link) => {
        e.preventDefault();
        navigate(link);
        setIsOpen(false); // Close the menu after navigating
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav id="navbar">
            <div className="navbar-container">
                <a className="navbar-logo" href="#">
                    <img src="/logo.webp" className="logo" alt="Logo" />
                </a>

                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                    <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                    <button className="search-btn" type="submit">Search</button>
                </form>

                <div className="navbar-links">
                    <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <button className="nav-link active" onClick={(e) => handleClick(e, "/")}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={(e) => handleClick(e, "/blogs")}>Blog</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={(e) => handleClick(e, "/resume")}>Resume</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={(e) => handleClick(e, "/projects")}>Projects</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={(e) => handleClick(e, "/contact")}>Contact</button>
                        </li>
                    </ul>
                </div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <VscChromeClose /> : <VscMenu />}
                </button>
            </div>
        </nav>
    );
}
