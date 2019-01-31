import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  }

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => this.setState({
        friends: res.data.friend
      }))
      .catch(err => console.log(err));
  }

  updateFriend = () => {
    axios
      .put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data.friend
        });
      })
      .catch(err => console.log(err));
  }

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err));
    }

  render() {
    return (
      <div className="App">
        <div className='friendsForm'>
          <h2>Friend</h2>
          <form onSubmit={ () => this.addFriend(this.state.friend) }>
            <input 
              type='text'
              name='name'
              placeholder='Name'
              onChange={this.handleChanges}
              value={this.state.friend.name}
            />
            <input
              type='text'
              name='age'
              placeholder='Age'
              onChange={this.handleChanges}
              value={this.state.friend.age}
            />
            <input
              type='text'
              name='email'
              placeholder='Email'
              onChange={this.handleChanges}
              value={this.state.friend.email}
            />
            <div className='buttonCont'>
              <button type='submit'>Add Friend</button>
              <button>Update Friend</button>
            </div>
          </form>
        </div>
        <FriendsList
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}

export default App;

// initial push
