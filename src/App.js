import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Repos from './components/Repos';
import SearchBar from './components/SearchBar';
import ArrowIcons from './components/ArrowIcons';
import './App.css';

const USER = 'facebook';
const REP_PER_PAGE = 10;
// const URL = `https://api.github.com/users/${USER}/repos?page=1&per_page=${REP_PER_PAGE}`;

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(REP_PER_PAGE);
  const [totalRepos, setTotalRepos] = useState(0);

  const paginate = pageNumber => {
    // component starts numeration with 0, hence + 1
    let selectedPage = pageNumber.selected + 1;
    fetchRepos(selectedPage);
  }

  const handleUserQuery = (query) => {
    fetchRepos(1, query);
  }

  const threeDotsBtn = <div className="nav__button">...</div>;

  useEffect(() => {
    // since you can only get 100 entries from one request, it's required to
    // get the link to the last page from header to find out how many repos are there 
    // but that was complicated, so I just hard-coded the total num
    const getReposNumber = async () => {
      fetchRepos(1);
      setTotalRepos(157);
      // try {
      //   const firstPage = await axios.get(`https://api.github.com/users/${USER}/repos?page=1&per_page=100`);
      //   setTotalRepos(firstPage.data.length);
      //   setRepos(firstPage.data.slice(0, reposPerPage));
      //   if (firstPage.headers.link) {
      //     const lastPageStrIndex = firstPage.headers.link.indexOf('rel="next"');
      //     const lastPageLink = firstPage.headers.link.slice(lastPageStrIndex + 13, firstPage.headers.link.length - 13);
      //     const lastPage = await axios.get(lastPageLink);
      //     const pageNum = (lastPageLink.indexOf('repos?page='));
      //     const pageNum1 = lastPageLink[pageNum + 11];
      //     setTotalRepos((pageNum1 - 1) * 100 + lastPage.data.length);
      //   }
      //   // Should I replace this with the Error Boundary?
      // } catch (error) {
      //   console.log(error);
      // }
    }
    getReposNumber();
  }, []);

  const fetchRepos = async (currentPage, query) => {
    try {
      setCurrentPage(currentPage);
      setLoading(true);
      let res = {};
      if (query) {
        res = await axios.get(`https://api.github.com/repositories/${query}`);
      } else {
        res = await axios.get(`https://api.github.com/users/${USER}/repos?page=${currentPage}&per_page=${REP_PER_PAGE}`);
      }
      setRepos(res.data);
      setLoading(false);
    } catch (error) {
      alert("Repository not found");
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Facebook repos
        </p>
      </header>
      <SearchBar 
      handleUserQuery={handleUserQuery}
      fetchRepos={fetchRepos} />
      <div className="container">
        <Repos
          repos={repos}
          loading={loading}
        />
        <ReactPaginate
        pageCount={Math.ceil(totalRepos / reposPerPage)}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        containerClassName="nav__panel"
        pageClassName="nav__button"
        activeClassName="nav__button--selected"
        previousLabel={<ArrowIcons direction="backwards" />}
        nextLabel={<ArrowIcons direction="forward" />}
        breakLabel={threeDotsBtn}
        onPageChange={paginate}
        />
      </div>
    </div>
  );
}

export default App;
