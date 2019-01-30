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

  render() {
    return (
      <div className="App">
        <div className='friendsForm'>
          <h2>Form</h2>
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
            <button>Button</button>
          </form>
        </div>
          <FriendsList
            friends={this.state.friends}
          />
      </div>
    );
  }
}

export default App;

// initial push
