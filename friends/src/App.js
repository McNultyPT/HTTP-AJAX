import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';

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
          friends: res.data.friend,
          friend: this.state.friend
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
        <div>
          <FriendForm
            friend={this.state.friend}
            handleChanges={this.handleChanges}
            addFriend={this.addFriend}
          />
          <UpdateFriendForm
            friend={this.state.friend}
            handleChanges={this.handleChanges}
            updateFriend={this.updateFriend}
          />
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
