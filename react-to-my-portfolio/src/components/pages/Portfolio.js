import React from 'react';
import FeedMe from '../images/feed-me.jpg';
import WeatherDashboard from '../images/weatherDashboard.jpg';
import NoteTaker from '../images/noteTaker.jpg';
import '../styles/Project.css';

const currentProjects = [
    {
        title: 'Restaurant Locater - "Feed Me"',
        deployed: "https://pentazoned.github.io/feed-me/",
        repo: "https://github.com/PentaZoned/feed-me"
    },
    {
        title: 'Weather Dashboard',
        deployed: "https://pentazoned.github.io/weather-dashboard/",
        repo: "https://github.com/PentaZoned/weather-dashboard"
    },
    {
        title: 'Note Taker',
        deployed: "https://shielded-shelf-75023.herokuapp.com/",
        repo: "https://github.com/PentaZoned/note-taker-sacred-treasure"
    }
]

function Portfolio() {
    return (
        <section className='projectSection'>
            <h2 className='text-center'>
                Projects
            </h2>
            <hr />

            <div>
                <h4 class="text-center py-2">
                    {currentProjects[0].title}
                </h4>
                <p class="text-center">
                    <a href={currentProjects[0].deployed}>Deployed Link</a> |
                    <a href={currentProjects[0].repo}>Github Repository</a>
                </p>
                <div class="d-flex justify-content-center pb-5">
                    <img src={FeedMe} class="img-fluid order-1" alt="screenshot of Feed Me project" />
                </div>
            </div>
            <hr />
            <div>
                <h4 class="text-center pb-2 p2-5">
                    {currentProjects[1].title}
                </h4>

                <p class="text-center">
                    <a href={currentProjects[1].deployed}>Deployed Link</a> |
                    <a href={currentProjects[1].repo}>Github Repository</a>
                </p>

                <div class="d-flex justify-content-center pb-5">
                    <img src={WeatherDashboard} class="img-fluid order-1"
                        alt="screenshot of weather report project" />
                </div>
            </div>
            <hr />
            <div>
                <h4 class="text-center pb-2 p2-5">
                    {currentProjects[2].title}
                </h4>

                <p class="text-center">
                    <a href={currentProjects[1].deployed}>Deployed Link</a> |
                    <a href={currentProjects[2].repo}>Github Repository</a>
                </p>

                <div class="d-flex justify-content-center pb-5">
                    <img src={NoteTaker} class="img-fluid order-1" alt="screenshot of Note Taker app" />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;