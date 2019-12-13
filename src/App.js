import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Repos from './components/Repos/Repos';
import SearchBar from './components/SearchBar/SearchBar';
import Paginate from './components/Paginate/Paginate';
import './App.css';

const USER = 'facebook';
const REP_PER_PAGE = 10;

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(REP_PER_PAGE);
  const [totalRepos, setTotalRepos] = useState(157);

  const handleUserQuery = query => {
    fetchRepos(1, query);
  }

  // if you change user, change this parameter manually here and above, when initializing state
  const switchTotalRepos = query => {
    if (query) {
      setTotalRepos(1);
    } else {
      setTotalRepos(157);
    }
  }

  useEffect(() => {
    fetchRepos(1);
  }, []);

  const fetchRepos = async (currentPage, query) => {
    const url = query ? `https://api.github.com/repositories/${query}` : `https://api.github.com/users/${USER}/repos?page=${currentPage}&per_page=${REP_PER_PAGE}`;
    try {
      setCurrentPage(currentPage);
      setLoading(true);
      let res = await axios.get(url);
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
        fetchRepos={fetchRepos}
        switchTotalRepos={switchTotalRepos} />
      <div className="container">
        <Repos
          repos={repos}
          loading={loading}
        />
        <Paginate
          fetchRepos={fetchRepos}
          pageCount={Math.ceil(totalRepos / reposPerPage)}
        />
      </div>
    </div>
  );
}

export default App;
