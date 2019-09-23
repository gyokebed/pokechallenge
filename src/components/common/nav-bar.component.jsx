import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <NavLink to='/'>Pokemon Cards</NavLink>
      <NavLink to='/sets'>Sets</NavLink>
    </React.Fragment>
  );
}
 
export default NavBar;