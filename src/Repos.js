import React from 'react'

const Repos = ( {repos, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
return (
    <ul>
        {repos.map(item => (
            <div>
                <li key={item.id}>
                    {item.id}
                </li>
                <div key={item.id + 'div'}>
                    {item.owner.login}
                    {/* <img src={item.owner.avatar_url}/> */}
                </div>
            </div>
        ))}
    </ul>
    );
};
export default Repos;