import React, { useState } from 'react';
import NavTabs from './NavTab';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';

const styles = {
    bodyColor: {
        backgroundColor: "gray",
        color: "white",
    }
};

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === 'About') {
            return <About />
        }
        if(currentPage === 'Contact') {
            return <Contact />
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if(currentPage === 'Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={styles.bodyColor}>
            {<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />}
            {renderPage()}
            {<Footer />}
        </div>
    );
}