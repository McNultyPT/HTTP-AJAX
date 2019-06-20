import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      },
      updating: false
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
        friends: res.data,
        updating: false,
      }))
      .catch(err => console.log(err));
  }

  updateFriend = () => {
    axios
      .put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data
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

  populateForm = (e, id) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      updating: true
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <FriendForm
            friend={this.state.friend}
            handleChanges={this.handleChanges}
            addFriend={this.addFriend}
            updateFriend={this.updateFriend}
            updating={this.state.updating}
          />
        </div>
        <FriendsList
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          populateForm={this.populateForm}
        />
      </div>
    );
  }
}

export default App;

// initial push
