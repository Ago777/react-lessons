import PropTypes from 'prop-types';
import React from 'react';

const User = props => {
    const {user, selectUser} = props;

    return (
        <div className="card">
            <img src={user['avatar_url']} alt={'user-image'} width={100}/>
            <h1>{user['login']}</h1>
            <p className="title"><a href={user['html_url']}>user website</a></p>
            <button className={'user-info'} onClick={() => selectUser(user['login'])}>user info</button>
        </div>
    );
};

export default User;