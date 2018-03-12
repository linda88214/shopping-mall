import React, { Component } from 'react';
// import { BrowserRouter, Switch, Redirect, Router, Route, Link } from 'react-router-dom';
import axios from 'axios'

export default class Signup extends Component {
constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
    });
  }

  handleSubmit(el) {
    el.preventDefault();
    axios({
      url: 'http://localhost:3000/sellers',
      method: 'POST'
    }).then(response => {
      console.log('handleSubmit: ', response.data);
    });
  }

  componentDidMount() {
    axios({ url: 'http://localhost:3000/sellers' }).then(response => {
      console.log('data:', response.data);
    });
  }

render(){

return(
  <div id="signup-page">
    <a href="/sellers/login" className="login-link">Login</a>
    <form onSubmit={this.handleSubmit}>
      <h1>SIGN UP</h1>
      <label htmlFor="username">
        <p>Username:</p>
        <input type="text" name="Username" onChange={this.handleChange} />
      </label>
      <br />
      <label htmlFor="firstname">
        <p>First Name:</p>
        <input type="text" name="firstname" onChange={this.handleChange} />
      </label>
      <br />
      <label htmlFor="lastname">
        <p>Last Name:</p>
        <input type="text" name="lastname" onChange={this.handleChange} />
      </label>
      <br />
      <label htmlFor="email">
        <p>Email:</p>
        <input type="text" name="email" onChange={this.handleChange} />
      </label>
      <br />
      <label htmlFor="password">
        <p>Password:</p>
        <input type="password" name="password" onChange={this.handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  </div>
)
}
}








