import React from 'react'

const Repos = ({ repos, loading }) => {
    if (loading) {
        return <h2 className="App-header">Loading...</h2>;
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
                {repos.map(item => (
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
                ))}
            </tbody>
        </table>
    );
};
export default Repos;