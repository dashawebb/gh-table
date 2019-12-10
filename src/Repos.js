import React from 'react'

const Repos = ( {repos, loading }) => {
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
                        <td key={item.id} className="table__row__item">
                            {item.id}
                        </td>
                        <td key={item.id + 'div'} className="table__row__item table__row--col-2">
                            {item.owner.login}
                        </td>
                        <td className="table__row__item">
                            <img src={item.owner.avatar_url} width="25px" height="25px" />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
        // <div>
        //     {repos.map(item => (
        //         <tr className="table__row">
        //             <td key={item.id} className="table__row__item">
        //                 {item.id}
        //             </td>
        //             <td key={item.id + 'div'} className="table__row__item table__row--col-2">
        //                 {item.owner.login}                        
        //                 </td>
        //             <td className="table__row__item">
        //                 <img src={item.owner.avatar_url} width="30px" height="30px" />
        //             </td>
        //         </tr>
        //     ))}
        // </div>
    );
};
export default Repos;