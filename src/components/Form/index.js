import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import PropTypes from 'prop-types';

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      color: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.formState(this.state.color);

  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ color: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleChange}  value={this.state.color}>
          <option>Select a Color of Magic</option>
          <option>White</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Red</option>
          <option>Black</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  formState: color => dispatch(actions.formState(color))
});

export default withRouter(connect(null, mapDispatchToProps)(Form));

Form.propTypes = {
  formState: PropTypes.func
};
