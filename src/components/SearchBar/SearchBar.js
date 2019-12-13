import React from 'react';
import styles from './SearchBar.module.css';
import { Form, Field } from 'react-final-form';

const SearchBar = ({ handleUserQuery, fetchRepos, switchTotalRepos }) => {

    const onSubmit = values => {
        handleUserQuery(values.IdSearch);
        switchTotalRepos(values.IdSearch);
    };

    return (
        <div className={styles.searchBar}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="IdSearch"
                                component="input"
                                placeholder="Search by ID"
                                className={styles.searchField}
                            />
                        </div>
                        <input type="submit" value="Submit" className={styles.submitButton} />
                    </form>
                )}
            />
        </div>
    );
}
export default SearchBar;