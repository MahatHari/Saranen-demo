import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = { color: '#F15B2A' };
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg navbar-light fixed-top '
        style={{ backgroundColor: '#e3f2fd' }}
      >
        <div className='container-fluid'>
          <NavLink to='/home' className='navbar-brand display-6 text-uppercas'>
            Brand
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon '></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item '>
                <NavLink
                  exact
                  to='/'
                  activeStyle={activeStyle}
                  className='nav-link display-6'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item '>
                <NavLink
                  to='/course'
                  activeStyle={activeStyle}
                  className='nav-link display-6'
                >
                  Course
                </NavLink>
              </li>
              <li className='nav-item display-6'>
                <NavLink
                  to='/author'
                  activeStyle={activeStyle}
                  className='nav-link'
                >
                  Author
                </NavLink>
              </li>
              <li className='nav-item display-6'>
                <NavLink
                  to='/about'
                  activeStyle={activeStyle}
                  className='nav-link'
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
