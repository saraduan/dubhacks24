import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
          <a class="navbar-brand"><NavLink to="/homepage" style={{ textDecoration: 'none', color: 'white' }}>Connect</NavLink></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            
            <ul class="navbar-nav">
              <li class="nav-item active">
              <a class="nav-link"><NavLink to="/homepage" style={{ textDecoration: 'none', color: 'white' }}>Job Listings</NavLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><NavLink to="/savedJobs" style={{ textDecoration: 'none', color: 'white' }}>Saved Jobs</NavLink></a>
              </li>
            </ul>
            
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <NavLink to="/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</NavLink>
              </li>
            </ul>

          </div>
        </div>
    </nav>
  );
}

export default NavigationBar;
