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
        {/*  <div className='container-fluid'> */}
        <NavLink to='/home' className='navbar-brand display-2 text-uppercas'>
          <h2>Tutorials</h2>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <div className='navbar-nav mr-auto '>
            <NavLink
              exact
              to='/'
              activeStyle={activeStyle}
              className=' nav-item nav-link display-6'
            >
              Home
            </NavLink>

            <NavLink
              to='/course'
              activeStyle={activeStyle}
              className=' nav-item nav-link display-6'
            >
              Course
            </NavLink>

            <NavLink
              to='/author'
              activeStyle={activeStyle}
              className='nav-link'
            >
              Author
            </NavLink>

            <NavLink
              to='/about'
              activeStyle={activeStyle}
              className=' nav-item nav-link'
            >
              About Us
            </NavLink>
          </div>

          <form className='d-flex ml-auto'>
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
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Header;
