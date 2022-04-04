// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="userAuthNav">
          <a><NavLink to="/login">Log In</NavLink></a>
          <a><NavLink to="/signup">Sign Up</NavLink></a>
        </div>
      </>
    );
  }

  return (
    <div>
      <NavLink exact to="/">Home</NavLink>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
