import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Repos from './Repos';
import Pagination from './Pagination';
import './App.css';

const USER = 'facebook';
const REP_PER_PAGE = 10;
const URL = `https://api.github.com/users/${USER}/repos?page=1&per_page=${REP_PER_PAGE}`;

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(REP_PER_PAGE);
  const [totalRepos, setTotalRepos] = useState(0);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    // since you can only get 100 entries from one request, it's required to
    // get the link to the last page from header to find out how many repos are there 
    const getReposNumber = async () => {
      try {
        const firstPage = await axios.get(`https://api.github.com/users/${USER}/repos?page=1&per_page=100`);
        setTotalRepos(firstPage.data.length);
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

    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${USER}/repos?page=1&per_page=100`);
        setRepos(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRepos();
  }, []);

  //Get current repos
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  // console.log(repos);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* </header> */}
      <div>
        <Repos repos={currentRepos} loading={loading} />
        <Pagination reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate}/>
      </div>

    </div>
  );
}

export default App;
