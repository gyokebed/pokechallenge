import React from 'react';
import { NavLink } from 'react-router-dom';
import './common.styles.scss';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'>Pokemon Cards</NavLink>
      <NavLink to='/sets'>Sets</NavLink>
    </div>
  );
}
 
export default NavBar;