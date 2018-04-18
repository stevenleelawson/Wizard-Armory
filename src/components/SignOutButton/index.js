import React from 'react';
import './styles.css';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    type='button'
    onClick={auth.doSignOut}
    className='nav-btn'
  >
    Sign Out
  </button>;

export default SignOutButton;
