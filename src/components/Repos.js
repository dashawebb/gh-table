import React from 'react'

const Repos = ({ repos, loading }) => {
    if (loading) {
        return <h2 className="App-header">Loading...</h2>;
    }

    // checks for null and undefined in case we only pass obj with one entry
    function isIterable(obj) {
        if (obj == null) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    const tableContent = item => {
        return (
            <tr className="table__row" key={item.id}>
                <td></td>
                <td>
                    {item.id}
                </td>
                <td className="table__row--col-2">
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

    return (
        <table className="table fixed">
            <thead>
                <tr className="table__header">
                    <td></td>
                    <td className="table__row--col-1">ID</td>
                    <td>login</td>
                    <td>avatar</td>
                    <td>some info</td>
                    <td>more</td>
                </tr>
            </thead>
            <tbody>
                {isIterable(repos) ?
                    repos.map(item => tableContent(item))
                    : tableContent(repos)
                }
            </tbody>
        </table>
    );
};
export default Repos;