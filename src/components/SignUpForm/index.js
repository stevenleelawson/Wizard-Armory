import React, { Component } from 'react';
import { auth } from '../../firebase';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMsg: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    auth.doCreateUserWithEmailAndPassword(email, password).catch((error) => this.setState({errorMsg: 'User already exists, please enter alternate email and password'}));
      this.setState({
        email: '',
        password: ''
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password, errorMsg } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
        {
          errorMsg && <p>{errorMsg}</p>
        }
      </div>
    )
  }
}

export default SignUpForm;
