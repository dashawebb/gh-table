import React from 'react';
import ReactPaginate from 'react-paginate';
import ArrowIcons from '../ArrowIcons/ArrowIcons';
import styles from './Paginate.module.css';

const threeDotsBtn = <div className={styles.button}>...</div>;

const Paginate = ({ fetchRepos, pageCount }) => {

    const paginate = (pageNumber) => {
        // component starts numeration with 0, hence + 1
        const selectedPage = pageNumber.selected + 1;
        fetchRepos(selectedPage);
    }

    return (
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            containerClassName={styles.panel}
            pageClassName={styles.button}
            activeClassName={styles.buttonSelected}
            previousLabel={<ArrowIcons direction="backwards" />}
            nextLabel={<ArrowIcons direction="forward" />}
            breakLabel={threeDotsBtn}
            onPageChange={paginate}
        />
    );
}

export default Paginate;