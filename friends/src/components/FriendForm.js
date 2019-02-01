import React from 'react';

function FriendForm(props) {
    function handleSubmit(e) {
      e.preventDefault();
      if (props.updating) {
        props.updateFriend();
      } else {
        props.addFriend();
      }
    }

    return(
      <div className='friendsForm'>
        <h2>Friend</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='name'
            placeholder='Name'
            onChange={props.handleChanges}
            value={props.friend.name}
          />
          <input
            type='text'
            name='age'
            placeholder='Age'
            onChange={props.handleChanges}
            value={props.friend.age}
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={props.handleChanges}
            value={props.friend.email}
          />
          <div className='buttonCont'>
            <button type='submit'>{props.updating ? 'Update Friend' : 'Add Friend'}</button>
            {/* <button type='submit'>Update Friend</button> */}
          </div>
        </form>
      </div>
    );
}

export default FriendForm;