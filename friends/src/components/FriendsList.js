import React from 'react';

import './FriendsList.css';

function FriendsList(props) {
    return (
        <div className='friendListContainer'>
            <h1>Friends List</h1>
            {props.friends.map(friend => (
                <div className='friendCard' key={friend.id}>
                    <h3>Friend</h3>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <i onClick={e => props.deleteFriend(e, friend.id)} class="far fa-trash-alt"></i>
                </div>
            ))}
        </div>
    );
}

export default FriendsList;