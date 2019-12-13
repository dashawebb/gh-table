import React from 'react';
import ArrowIcons from './ArrowIcons';

const Pagination = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumbers.push(i);
    }
    // Здесь можно добавить защиту от !(currentPage - 1) 
    return (
        <nav className="nav__panel">
            <div className="nav__button">
                <a onClick={() => paginate(currentPage - 1)} href="!#">
                    <ArrowIcons direction="backwards" />
                </a>
            </div>
            {pageNumbers.map(number =>
                number === currentPage ?
                    (<div key={number} className="nav__button nav__button--selected">
                        <a onClick={() => paginate(number)} href="!#">
                            {number}
                        </a>
                    </div>) : (<div key={number} className="nav__button">
                        <a onClick={() => paginate(number)} href="!#">
                            {number}
                        </a>
                    </div>)
            )}
            <div className="nav__button">
                <a onClick={() => paginate(currentPage + 1)} href="!#">
                    <ArrowIcons direction="forward" />
                </a>
            </div>
        </nav>
    )
}

export default Pagination;