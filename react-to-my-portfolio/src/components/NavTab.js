import React from 'react';

function NavTabs({currentPage, handlePageChange}) {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
            <a href='#about' onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
            </a>
            </li>
        </ul>
    );
}

export default NavTabs;