import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignUpFormModal from '../SignupFormModal';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <NavLink to="/upload" user={sessionUser} className="uploadBtn"> + Upload Song</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <div className='modalBtn'>
        <a><LoginFormModal /></a>
        <a><SignUpFormModal /></a>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </div>
    );
  }

  return (

    <div>
      <NavLink exact to="/" ><img src="homebutton.png" alt="image" className='homeBtn' /></NavLink>
      {isLoaded && sessionLinks}
    </div>

  );
}

export default Navigation;
