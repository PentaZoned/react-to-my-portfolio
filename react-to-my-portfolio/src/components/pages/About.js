import React from 'react';
import selfPortrait from '../images/self-portrait.jpg';
import '../styles/About.css';


function About() {
    return (
        <section id="about" class="p-4 ">
            <h2 class="text-center">
                    About Me
            </h2>
            <hr />

            <div class="d-flex flex-row">
                <div class="aboutPic order-1">
                    <img src={selfPortrait} alt="portrait of Bradley"/>
                </div>

                <div class="p-4 order-2">
                    <p>
                        My name is Bradley Le. I was born and raised in Hayward, CA. I live in a very diverse urban
                        community.
                    </p>
                    <p>
                        Ever since I was young, I would be interested in technology. I remember being four years old and
                        pressing random buttons on a keyboard just because I was interested in what it does. I had constant
                        access to computers so I developed a deep interest in a future occupation that would involve around
                        the use of a computer. During my time in college, I narrowed my interests to web developer and UI/UX
                        designer because I enjoy visually seeing my work and how it affects users. Naturally, I decided to
                        choose web developer as a more hands-on, technical occupation to persue.
                    </p>
                    <p>
                        After beginning my training as a web developer. I started to understand that web development is more
                        than just creating static webpages and displaying forms. It's about creating, building, and
                        maintaining websites to ensure a smooth experience for the user.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;