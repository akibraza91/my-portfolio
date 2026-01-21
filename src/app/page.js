'use client';

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main>
      {/* <!-- Navigation --> */}
    <nav className="navbar">
        <div className="nav-container">
            <div className="logo">MA</div>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
                <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
                <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
            </ul>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    {/* <!-- Hero Section --> */}
    <section id="home" className="hero">
        <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Akib</h1>
            <p className="hero-subtitle">Aspiring React Developer</p>
            <p className="hero-description">I build scalable web applications and solve complex problems with clean, efficient code.</p>
            <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
        </div>
    </section>

    {/* <!-- About Section --> */}
    <section id="about" className="about">
        <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>I'm a passionate software engineer with 2 years of hands-on experience in developing web applications. I love working with modern technologies and creating solutions that make a real impact.</p>
                    <p>I thrive in collaborative environments, Always hungry to learn, I stay on the pulse of emerging tech trends, continuously refining my skills to push the boundaries of what great software can do.</p>
                </div>
                <div className="about-info">
                    <div className="info-item">
                        <h3>2+ Years</h3>
                        <p>Experience</p>
                    </div>
                    <div className="info-item">
                        <h3>30+ Projects</h3>
                        <p>Completed</p>
                    </div>
                    {/* <!-- <div className="info-item">
                        <h3>[X]+ Clients</h3>
                        <p>Satisfied</p>
                    </div> --> */}
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Skills Section --> */}
    <section id="skills" className="skills">
        <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3>Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>HTML/CSS</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Django</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Tools & Platforms</h3>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>AWS</li>
                        {/* <!-- <li>CI/CD</li> --> */}
                    </ul>
                </div>
            </div>  
        </div>
    </section>

    {/* <!-- Projects Section --> */}
    <section id="projects" className="projects">
        <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">
                        <img src="/Images/project1.jpg" alt="IP Address Tracker Project" />
                    </div>
                    <div className="project-info">
                        <h3>IP Address Tracker</h3>
                        <p className="project-description">Get info and giolocation of a IP Address.</p>
                        <div className="project-tags">
                            <span className="tag">React</span>
                            <span className="tag">API's</span>
                            <span className="tag">Next.js</span>
                        </div>
                        <div className="project-links">
                            <a href="https://akibraza91.github.io/ip-address-tracker/" className="project-link">Live Demo</a>
                            <a href="https://github.com/akibraza91/ip-address-tracker" className="project-link">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="/Images/project2.jpg" alt="OCR App Project" />
                    </div>
                    <div className="project-info">
                        <h3>OCR App</h3>
                        <p className="project-description">Recognize driving licence text from image file.</p>
                        <div className="project-tags">
                            <span className="tag">Next.js</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">React</span>
                        </div>
                        <div className="project-links">
                            <a href="https://ocr-app-ten.vercel.app/" className="project-link">Live Demo</a>
                            <a href="https://github.com/akibraza91/ocr-app" className="project-link">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="/Images/project3.jpg" alt="News App Project" />
                    </div>
                    <div className="project-info">
                        <h3>News App</h3>
                        <p className="project-description">A news app that can help you to be daily updated from the world.</p>
                        <div className="project-tags">
                            <span className="tag">JavaScript</span>
                            <span className="tag">React</span>
                            <span className="tag">Next</span>
                        </div>
                        <div className="project-links">
                            <a href="https://akibraza91.github.io/news-app/" className="project-link">Live Demo</a>
                            <a href="https://github.com/akibraza91/news-app" className="project-link">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact" className="contact">
        <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-subtitle">I'm always interested in hearing about new projects and opportunities.</p>
            
            <div className="contact-content">
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>

                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Email</h3>
                        <a href="mailto:your.email@example.com">akibraza91@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <a href="tel:+1234567890">+91 9557724380</a>
                    </div>
                    <div className="contact-item">
                        <h3>Social Media</h3>
                        <div className="social-links">
                            <a href="https://github.com/akibraza91" className="social-link">GitHub</a>
                            <a href="https://www.linkedin.com/in/mohd-akib-986369121/" className="social-link">LinkedIn</a>
                            {/* <a href="#" className="social-link">Twitter</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="footer">
        <div className="container">
            <p>&copy; 2026 Akib. All rights reserved.</p>
        </div>
    </footer>
    </main>
  );
}
