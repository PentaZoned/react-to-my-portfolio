import React from 'react';
import ResumePdf from '../assets/resume.pdf';
import '../styles/Resume.css';

function Resume() {
    return (
        <section className='p-2 resumeSection'>
            <h2>Resume</h2>
            <p>Download my <a href={ResumePdf} target="_blank">Resume</a></p>

            <h5>
                Front-End Proficiencies
            </h5>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>AJAX</li>
            </ul>

            <h5>
                Back-End Proficiencies
            </h5>

            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        </section>
    );
}

export default Resume;