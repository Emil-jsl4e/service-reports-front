import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import axios from 'axios';

const Nav = (props: { user: User | null }) => {
  const logout = async () => {
    await axios.post('http://localhost:3333/api/admin/logout');
  };
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
        Company name
      </a>
      <ul className="navbar-nav">
        <Link to={'/profile'} className="nav-item text-nowrap">
          {props.user?.firstName} {props.user?.lastName}
        </Link>
        <Link to={'/login'} className="nav-link px-3" href="#" onClick={logout}>
          Sign out
        </Link>
      </ul>
    </header>
  );
};

export default Nav;
