import React from 'react';
import ResumePdf from '../assets/resume.pdf';
import '../styles/Resume.css';

function Resume() {
    return (
        <section className='p-2 text-center'>
            <h2>Resume</h2>
            <a href={ResumePdf}>Downloadable Resume</a>
        </section>
    );
}

export default Resume;