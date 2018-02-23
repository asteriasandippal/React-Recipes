import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between px4">
      <h1 className="h1">Header</h1>
      <nav>
        <NavLink
          exact
          className="p2 mx2 black text-decoration-none rounded"
          to="/"
          activeClassName="bg-white"
        >Home
        </NavLink>
        <NavLink
          className="p2 mx2 black text-decoration-none rounded"
          to="/favarites"
          activeClassName="bg-white"
        >Favarites
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
