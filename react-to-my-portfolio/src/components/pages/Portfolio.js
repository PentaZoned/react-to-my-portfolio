import React from 'react';
import FeedMe from '../images/feed-me.jpg';
import WeatherDashboard from '../images/weatherDashboard.jpg';
import NoteTaker from '../images/noteTaker.jpg';
import TextEditor from '../images/textEditor.jpg';
import Dontfundme from '../images/dontfundme.jpg';
import WorkdayScheduler from '../images/workdayScheduler.jpg';
import '../styles/Project.css';

const currentProjects = [
    {
        title: 'Restaurant Locater - "Feed Me"',
        deployed: "https://pentazoned.github.io/feed-me/",
        repo: "https://github.com/PentaZoned/feed-me",
    },
    {
        title: 'Weather Dashboard',
        deployed: "https://pentazoned.github.io/weather-dashboard/",
        repo: "https://github.com/PentaZoned/weather-dashboard",
    },
    {
        title: 'Note Taker',
        deployed: "https://shielded-shelf-75023.herokuapp.com/",
        repo: "https://github.com/PentaZoned/note-taker-sacred-treasure",
    },
    {
        title: 'DontFundMe',
        deployed: 'https://still-headland-20752.herokuapp.com/',
        repo: 'https://github.com/PentaZoned/DontFundMe',
    },
    {
        title: 'My Own Text Editor',
        deployed: 'https://whispering-woodland-68116.herokuapp.com/',
        repo: 'https://github.com/PentaZoned/my-own-text-editor',
    },
    {
        title: 'Work Dat Scheduler',
        deployed: 'https://pentazoned.github.io/work-day-scheduler/',
        repo: 'https://github.com/PentaZoned/work-day-scheduler',
    },

]

const styles = {
    links: {
        color: 'blue'
    }
}

function Portfolio() {
    return (
        <section className='projectSection'>
            <h2 className='text-center p-4'>
                Projects
            </h2>
            <hr />

            <div>
                <h4 class="text-center py-2">
                    {currentProjects[0].title}
                </h4>
                <p class="text-center">
                    <a href={currentProjects[0].deployed} style={styles.links}>Deployed Link</a> |
                    <a href={currentProjects[0].repo} style={styles.links}>Github Repository</a>
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
                    <a href={currentProjects[1].deployed} style={styles.links}>Deployed Link</a> | 
                    <a href={currentProjects[1].repo} style={styles.links}>Github Repository</a>
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
                    <a href={currentProjects[2].deployed} style={styles.links}>Deployed Link</a> | 
                    <a href={currentProjects[2].repo} style={styles.links}>Github Repository</a>
                </p>

                <div class="d-flex justify-content-center pb-5">
                    <img src={NoteTaker} class="img-fluid order-1" alt="screenshot of Note Taker app" />
                </div>
            </div>
            <hr />
            <div>
                <h4 class="text-center pb-2 p2-5">
                    {currentProjects[3].title}
                </h4>

                <p class="text-center">
                    <a href={currentProjects[3].deployed} style={styles.links}>Deployed Link</a> | 
                    <a href={currentProjects[3].repo} style={styles.links}>Github Repository</a>
                </p>

                <div class="d-flex justify-content-center pb-5">
                    <img src={Dontfundme} class="img-fluid order-1"
                        alt="screenshot of fundraising app" />
                </div>
            </div>
            <hr />
            <div>
                <h4 class="text-center pb-2 p2-5">
                    {currentProjects[4].title}
                </h4>

                <p class="text-center">
                    <a href={currentProjects[4].deployed} style={styles.links}>Deployed Link</a> | 
                    <a href={currentProjects[4].repo} style={styles.links}>Github Repository</a>
                </p>

                <div class="d-flex justify-content-center pb-5">
                    <img src={TextEditor} class="img-fluid order-1"
                        alt="screenshot of the Text Editor" />
                </div>
            </div>
            <hr />
            <div>
                <h4 class="text-center pb-2 p2-5">
                    {currentProjects[5].title}
                </h4>

                <p class="text-center">
                    <a href={currentProjects[5].deployed} style={styles.links}>Deployed Link</a> | 
                    <a href={currentProjects[5].repo} style={styles.links}>Github Repository</a>
                </p>

                <div class="d-flex justify-content-center pb-5">
                    <img src={WorkdayScheduler} class="img-fluid order-1"
                        alt="screenshot of the calendar for the workday app" />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;