import React, { Component } from 'react';
import { auth } from '../../firebase';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    auth.doSignInWithEmailAndPassword(email, password).catch((error) => console.log(error));
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
    const { email, password } = this.state;
    return (
      <div>
        <h1>Sign In</h1>
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

      </div>
    )
  }
}

export default SignInForm;
