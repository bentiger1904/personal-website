import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         Personal Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Journal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/list"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Shopping
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/exercise"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Exercise
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                to="/food"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Food
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
