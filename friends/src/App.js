import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data);
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
          <h2>Form</h2>
          <form>
            <input 
              type='text'
              name=''
              placeholder='Name'
            />
            <input
              type='text'
              name=''
              placeholder='Age'
            />
            <input
              type='text'
              name=''
              placeholder='Email'
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
