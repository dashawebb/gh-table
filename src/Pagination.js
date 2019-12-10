import React from 'react';
import ArrowIcons from './ArrowIcons';

const Pagination = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="nav__panel">
            <div className="nav__button">
                <ArrowIcons direction="backwards" />
            </div>
            {pageNumbers.map(number => (
                <div key={number} className="nav__button" id={"button-" + number}>
                    <a onClick={() => paginate(number)} href="!#">
                        {number}
                    </a>
                </div>
            ))}
            <div className="nav__button">
                <ArrowIcons direction="forward" />
            </div>
        </nav>
    )
}

export default Pagination;