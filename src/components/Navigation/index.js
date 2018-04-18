import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

import SignOutButton from '../SignOutButton';

const Navigation = ({ authUser }) =>
  <div>
    {
      authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>;

const NavigationAuth = () =>
  <div className='nav-container'>
    <NavLink className='nav-link' to='/'>Spells</NavLink>
    <NavLink className='nav-link' to='/deck'>MyDeck</NavLink>
    <SignOutButton className='nav-btn'/>
  </div>;

const NavigationNonAuth = () =>
  <div className='nav-container'>
    <NavLink className='nav-link' to='/'>Spells</NavLink>
    <div>
      <NavLink className='nav-link' to= 'signup'>Sign Up/</NavLink>
      <NavLink className='nav-link' to= 'signin'>Sign In</NavLink>
    </div>
  </div>;

Navigation.propTypes = {
  authUser: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

export default Navigation;
