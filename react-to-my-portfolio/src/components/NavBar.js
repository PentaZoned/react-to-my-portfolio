import React from 'react';

const styles = {
    name: {
        padding: " 8px 15px",
        fontSize: "13pt",
        background: "gray"
    },
    link: {
        color: "black"

    }
}

function NavBar({currentPage, handlePageChange}) {
    return (
        <ul className='nav nav-tabs'>
            <li style={styles.name}>
                Bradley Le
            </li>
            <li className='nav-item'>
                <a href='#about' onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    style={styles.link}>
                    About Me
                </a>
            </li>

            <li className='nav-item'>
                <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    style={styles.link}>
                    Portfolio
                </a>
            </li>

            <li className='nav-item'>
                <a href='#contact' onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    style={styles.link}>
                    Contact
                </a>
            </li>

            <li className='nav-item'>
                <a href='#contact' onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    style={styles.link}>
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default NavBar;