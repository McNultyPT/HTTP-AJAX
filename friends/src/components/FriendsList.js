import React from 'react';

function FriendsList(props) {
    return (
        <div className='friendListContainer'>
            {props.friends.map(friend => (
                <div className='friendCard' key={friend.id}>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    );
}

export default FriendsList;