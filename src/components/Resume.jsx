import React from 'react';
import { FaGithub, FaTelegram, FaLinkedin, FaYoutube, FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiRedux } from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { RiInstagramLine } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "../style/Resume.css";

function downloadPDF() {
    // const element = document.getElementById('content-to-print');
    // const img = document.querySelector('.resume-image');

    // if (img.complete) {
    //     html2pdf().from(element).save('my-tech-stack.pdf');
    // } else {
    //     img.addEventListener('load', () => {
    //         html2pdf().from(element).save('my-tech-stack.pdf');
    //     });
    // }
    const input = document.getElementById('content-to-print');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size in portrait mode
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
    });

}

export default function Resume() {
    return (
        <div id="content-to-print" className="resume-home">
            <div className="card rotUp">
                <h2>My Tech Stack</h2>
                <ul className="stack-list">
                    <li><span style={{ color: '#F7DF1E' }}><IoLogoJavascript className="tech-icon" /></span> JavaScript (JS)</li>
                    <li><span style={{ color: '#007396' }}><FaJava className="tech-icon" /></span> Java</li>
                    <li><span style={{ color: '#3776AB' }}><FaPython className="tech-icon" /></span> Python</li>
                    <li><span style={{ color: '#007396' }}><FaJava className="tech-icon" /></span> JSP</li>
                    <li><span style={{ color: '#007396' }}><FaJava className="tech-icon" /></span> JSF</li>
                    <li><span style={{ color: '#6DB33F' }}><SiSpringboot className="tech-icon" /></span> Spring Boot</li>
                    <li><span style={{ color: '#6DB33F' }}><BiLogoSpringBoot className="tech-icon" /></span> Spring</li>
                    <li><span style={{ color: '#336791' }}><SiPostgresql className="tech-icon" /></span> PostgreSQL</li>
                    <li><span style={{ color: '#61DAFB' }}><FaReact className="tech-icon" /></span> React</li>
                    <li><span style={{ color: '#764ABC' }}><SiRedux className="tech-icon" /></span> Redux</li>
                    <li><span style={{ color: '#FFD700' }}><GiBearFace className="tech-icon" /></span> Zustand</li>
                    <li><span style={{ color: "#E34F26" }}><FaHtml5 className="tech-icon" /></span> HTML</li>
                    <li><span style={{ color: "#1572B6" }}><FaCss3Alt className="tech-icon" /></span> CSS</li>
                </ul>
            </div>
            <div className="desc-im">
                <img src="/resumeImage.png" alt="" className="resume-image spinYR" />
                <div className="resume-desc">
                    <h1 className='spinY'>Ike Holy Destiny</h1>
                    <p>
                        Hello, and welcome to my profile! I am an enthusiastic developer, currently pursuing <span style={{ color: "#66d9ef" }}>Informatics and Computer Engineering</span> at ITMO University in Russia (as of 2024).
                        I have a passion for learning and creating new things. Born and raised in Nigeria, my interest in computer science began during high school when I served as the laboratory prefect,
                        granting me extensive access to our limited computers at the time.
                        Currently, my favorite programming language is <span style={{ color: "#f92672" }}>Java</span>, but I also enjoy working with JavaScript. I am proficient in developing desktop applications with Java,
                        and creating websites with a Java <span style={{ color: "#f92672" }}>RestAPI</span> backend and <span style={{ color: "#a6e22e" }}>React</span> frontend. I am dedicated to learning every day and continuously improving my skills.
                        You can find most of my academic and hobby projects by clicking the GitHub icon or the projects button.
                        I genuinely enjoy this field and aspire to build a successful career in IT!
                    </p>
                </div>
            </div>
            <div className="container-v">
                <div className="socials rotDown">
                    <h2>Socials</h2>
                    <a href="https://github.com/ikedestiny"><FaGithub className="icon" name="insta" style={{ color: 'white', fontSize: '24px' }} /><label htmlFor="insta">ikedestiny</label></a>
                    <a href="https://www.instagram.com/ikedestiny97/profilecard/?igsh=bHBicHl2OGozcTlp"><RiInstagramLine className="icon" name="insta" style={{ color: '#E4405F', fontSize: '24px' }} /><label htmlFor="insta">ikedestiny97</label></a>
                    <a href="www.linkedin.com/in/destiny-ike-7930b5236"><FaLinkedin className="icon" name="linkd" style={{ color: '#0077B5', fontSize: '24px' }} /><label htmlFor="linkd">destiny-ike-7930b5236</label></a>
                    <a href="https://www.youtube.com/@Dviinci"><FaYoutube className="icon" name="yout" style={{ color: '#FF0000', fontSize: '24px' }} /><label htmlFor="yout">@Dviinci</label></a>
                    <a href="https://web.telegram.org/a/"><FaTelegram className="icon" name="yout" style={{ color: '#0088CC', fontSize: '24px' }} /><label htmlFor="yout">ike_the_vinci</label></a>
                </div>
                <a href="/projects">Projects</a>
                <div className="button-container">
                    <button className="download-button" onClick={downloadPDF}>Download as PDF</button>
                </div>
            </div>
        </div>
    );
}
