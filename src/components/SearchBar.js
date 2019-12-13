import React, { useState } from 'react';

const SearchBar = ({ handleUserQuery, fetchRepos }) => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
        if (event.target.value === '') fetchRepos();
    }

    const handleSubmit = event => {
        handleUserQuery(value);
        event.preventDefault();
    };

    return (
        <div className="search__bar">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search by ID" value={value} onChange={handleChange} className="search__field" />
                {/* <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Задание-верстка-2" transform="translate(-340.000000, -1061.000000)">
                                <rect id="Rectangle-Copy-41" stroke="#E0E0E2" fill="#FFFFFF" x="244.5" y="1050.5" width="117" height="31"></rect>
                                <g id="cancel-(1)-copy-6" transform="translate(340.000000, 1061.000000)" fill="#898989">
                                    <path d="M5.70818182,4.98983471 L9.80396694,0.916446281 C10.0003306,0.722066116 10.0003306,0.407396694 9.80396694,0.213512397 C9.60809917,0.0191322314 9.28995868,0.0191322314 9.09409091,0.213512397 L5.00181818,4.28342975 L0.871694215,0.15285124 C0.675826446,-0.0435123967 0.35768595,-0.0435123967 0.161818182,0.15285124 C-0.0340495868,0.349710744 -0.0340495868,0.668347107 0.161818182,0.864710744 L4.28892562,4.99231405 L0.146900826,9.11144628 C-0.0489669421,9.30582645 -0.0489669421,9.62049587 0.146900826,9.81438017 C0.342768595,10.0087603 0.660909091,10.0087603 0.85677686,9.81438017 L4.99528926,5.69871901 L9.10896694,9.81289256 C9.30483471,10.0092562 9.62297521,10.0092562 9.81884298,9.81289256 C10.0147107,9.61603306 10.0147107,9.29739669 9.81884298,9.10103306 L5.70818182,4.98983471 Z" id="Close"></path>
                                </g>
                            </g>
                        </g>
                    </svg> */}
                <input type="submit" value="Submit" className="submit-button" />
            </form>
        </div>
    );
}
export default SearchBar;
