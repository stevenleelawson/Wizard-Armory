import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './styles.css';

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      color: ''
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ color: value });

    this.props.formState(value);
  }

  render() {
    return (
        <select className='select' onChange={this.handleChange}>
          <option>Select a Color of Magic</option>
          <option>White</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Red</option>
          <option>Black</option>
        </select>
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
