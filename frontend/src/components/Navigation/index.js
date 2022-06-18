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
        {/* <NavLink to="/upload" user={sessionUser} className="uploadBtn">
        <img src="https://res.cloudinary.com/dv3gxfdon/image/upload/v1655256912/music_ei5z8n.png" />
        </NavLink> */}
      </>
    );
  } else {
    sessionLinks = (
      <div className='modalBtn'>
        <a><LoginFormModal /></a>
        <a><SignUpFormModal /></a>
        <a href="https://github.com/kdngaa">
          <img src="https://res.cloudinary.com/dv3gxfdon/image/upload/v1652609758/128-1280464_github-icon-download-at-icons8-github-icon-white-removebg-preview_qqz2dz.png" style={{ width: '40px', height: '40px' }} />
        </a>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </div>
    );
  }

  return (

    <div>
      {/* <NavLink exact to="/" ><img src="https://res.cloudinary.com/dv3gxfdon/image/upload/v1649376919/homebutton_leh6mk.png" alt="image" className='homeBtn' /></NavLink> */}
      {isLoaded && sessionLinks}
    </div>

  );
}

export default Navigation;
