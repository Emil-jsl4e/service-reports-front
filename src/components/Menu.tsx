import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to={'/users'} className="nav-link active" aria-current="page">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/spareparts'} className="nav-link active" aria-current="page">
              Spare Parts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
