import React from 'react';
import styles from './Repos.module.css';

// checks for null and undefined in case we only pass obj with one entry
const isIterable = obj => {
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

const generateTableContent = item => {
    return (
        <tr className={styles.row} key={item.id}>
            <td></td>
            <td>
                {item.id}
            </td>
            <td className={styles.col2Text}>
                {item.owner.login}
            </td>
            <td>
                <img src={item.owner.avatar_url} width="25px" height="25px" alt="" />
            </td>
            <td></td>
            <td></td>
        </tr>
    )
}

const Repos = ({ repos, loading }) => {
    if (loading) {
        return <h2 className={styles.AppHeader}>Loading...</h2>;
    }

    return (
        <table className={`${styles.table}${styles.fixed}`}>
            <thead>
                <tr className={styles.header}>
                    <td className={styles.col1}></td>
                    <td className={styles.col2}>ID</td>
                    <td className={styles.col3}>login</td>
                    <td className={styles.col4}>avatar</td>
                    <td className={styles.col5}>some info</td>
                    <td className={styles.col6}>more</td>
                </tr>
            </thead>
            <tbody>
                {isIterable(repos) ?
                    repos.map(item => generateTableContent(item))
                    : generateTableContent(repos)
                }
            </tbody>
        </table>
    );
};
export default Repos;