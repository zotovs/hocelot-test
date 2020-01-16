import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <NavLink to="/autocomplete">Autocomplete</NavLink>
      <NavLink to="/free-text">Free text</NavLink>
    </div>
  );
}

export default Header;
