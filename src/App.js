import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Repos from './Repos';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
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
  const [userQuery, setUserQuery] = useState('');

  const paginate = (pageNumber) => {
    fetchRepos(pageNumber);
  }

  const handleUserQuery = (query) => {
    searchById(query);
  }

  useEffect(() => {
    // since you can only get 100 entries from one request, it's required to
    // get the link to the last page from header to find out how many repos are there 
    const getReposNumber = async () => {
      try {
        const firstPage = await axios.get(`https://api.github.com/users/${USER}/repos?page=1&per_page=100`);
        setTotalRepos(firstPage.data.length);
        setRepos(firstPage.data.slice(0, reposPerPage));
        if (firstPage.headers.link) {
          const lastPageStrIndex = firstPage.headers.link.indexOf('rel="next"');
          const lastPageLink = firstPage.headers.link.slice(lastPageStrIndex + 13, firstPage.headers.link.length - 13);
          const lastPage = await axios.get(lastPageLink);
          const pageNum = (lastPageLink.indexOf('repos?page='));
          const pageNum1 = lastPageLink[pageNum + 11];
          setTotalRepos((pageNum1 - 1) * 100 + lastPage.data.length);
        }
        // Should I replace this with the Error Boundary?
      } catch (error) {
        console.log(error);
      }
    }
    getReposNumber();
  }, []);

  const fetchRepos = async (currentPage) => {
    try {
      setCurrentPage(currentPage);
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${USER}/repos?page=${currentPage}&per_page=${REP_PER_PAGE}`);
      setRepos(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const searchById = async (query) => {
    try {
      setUserQuery(query);
      // setLoading(true);
      // request below allows to find all the repositories of a specific user with a specific name
      // const res = await axios.get(`https://api.github.com/search/repositories?q=${userQuery}+user:${USER}`);
      // setRepos(res.data.items.slice(0, reposPerPage));
      const filtered = repos.filter(repo => repo.id.toString().indexOf(query) >= 0);
      setRepos(filtered);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  //Get current repos
  // const indexOfLastRepo = currentPage * reposPerPage;
  // const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  // const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Facebook repos
        </p>
      </header>
      <SearchBar handleUserQuery={handleUserQuery} />
      <div className="container">
        <Repos
          repos={repos}
          loading={loading}
        />
        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={totalRepos}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
