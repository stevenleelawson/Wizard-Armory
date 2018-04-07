import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      color: ''
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ color: value })
    console.log('form',event.target.value)
  }
  render() {
    return (
      <div>
        <select onChange={this.handleChange}  value={this.state.color}>
          <option>Select a Color of Magic</option>
          <option>White</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Red</option>
          <option>Black</option>
        </select>
      </div>
    )
  }
}

export default Form;
