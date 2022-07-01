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
        description: "The overall objective of our application is to have a restaurant randomly shown to the user when they can't decide where to eat.",
        technologies: "HTML, CSS, Bulma CSS Framework, JavaScript, jQuery, Yelp Fusion API, Google Places API, Google Maps API, Anime.js, Zdog API",
    },
    {
        title: 'Weather Dashboard',
        deployed: "https://pentazoned.github.io/weather-dashboard/",
        repo: "https://github.com/PentaZoned/weather-dashboard",
        description: "This project presents the user some weather data for a specified city.",
        technologies: "HTML, CSS, JavaScript, jQuery, Bootstrap CSS Framework, Geocoding API, One Call API",
    },
    {
        title: 'Note Taker',
        deployed: "https://shielded-shelf-75023.herokuapp.com/",
        repo: "https://github.com/PentaZoned/note-taker-sacred-treasure",
        description: "This project allows this user to use a note-taker and create notes about their daily life.",
        technologies: "HTML, CSS, JavaScript, Node.js, Express, Short Unique ID Package, Util Package",
    },
    {
        title: 'DontFundMe',
        deployed: 'https://still-headland-20752.herokuapp.com/',
        repo: 'https://github.com/PentaZoned/DontFundMe',
        description: "Contrary to the project name, this app allows users to crowdfund specific goals. It doesn't have to be a life-changing goal.",
        technologies: "bcrypt, Bulma CSS Framework, handlebars, Express, Sequelize",
    },
    {
        title: 'My Own Text Editor',
        deployed: 'https://whispering-woodland-68116.herokuapp.com/',
        repo: 'https://github.com/PentaZoned/my-own-text-editor',
        description: "The focus of this app is to build a single-page editor that runs on the browser. The application can also run offline.",
        technologies: "HTML, CSS, JavaScript, Express, style-loader, webpack, workbox-webpack-plugin, @babel/core",
    },
    {
        title: 'Work Day Scheduler',
        deployed: 'https://pentazoned.github.io/work-day-scheduler/',
        repo: 'https://github.com/PentaZoned/work-day-scheduler',
        description: "The objective is to create a small calendar application that saves events for each hour of a standard workday schedule. By using this application, the user should be able to manage time more effectively.",
        technologies: "HTML, CSS, JavaScript, Moment.js, jQuery",
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
                <p> {currentProjects[0].description}</p>
                <p> Technologies: {currentProjects[0].technologies}</p>
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
                <p> {currentProjects[1].description}</p>
                <p> Technologies: {currentProjects[1].technologies}</p>
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
                <p> {currentProjects[2].description}</p>
                <p> Technologies: {currentProjects[2].technologies}</p>
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
                <p> {currentProjects[3].description}</p>
                <p> Technologies: {currentProjects[3].technologies}</p>
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
                <p> {currentProjects[4].description}</p>
                <p> Technologies: {currentProjects[4].technologies}</p>
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
                <p> {currentProjects[5].description}</p>
                <p> Technologies: {currentProjects[5].technologies}</p>
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