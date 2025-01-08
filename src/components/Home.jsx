import { redirect } from 'react-router-dom';
import '../style/Home.css';
export default function Home() {
    return (
        <div className="home">
            <header className="header">
                <h1>Welcome to My Software Developer Portfolio</h1>
                <p>Crafting efficient and scalable systems</p>
            </header>

            <section className="about">
                <h2>About Me</h2>
                <p>I'm a fullstack (mostly backend actually) developer specializing in building scalable and performant systems. Passionate about solving complex problems with clean code and efficient solutions.you can check out my projects <a href="/projects">HERE!</a></p>
                <button><a href="/resume">More</a></button>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Java</li>
                    <li>Springboot</li>
                    <li>SQL/NoSQL Databases</li>
                    <li>RESTful APIs</li>
                    <button><a href="/resume">More</a></button>
                </ul>
            </section>

            {/* <section className="projects">
                <h2>Projects</h2>
                <ul>
                    <li>Project 1 - API development</li>
                    <li>Project 2 - Database optimization</li>
                    <li>Project 3 - Microservices architecture</li>
                </ul>
            </section> */}

            <section className="contact">
                <h2>Contact</h2>
                <p>If you'd like to collaborate or chat about backend development, feel free to reach out.</p>
                <button><a href="/contact">Contact me </a></button>

            </section>
        </div>
    );
}
