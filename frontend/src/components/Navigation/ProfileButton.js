// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  return (
    <>
      {/* <button onClick={openMenu} >
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && ( */}
        <div className="modalBtn">
          <NavLink exact to="/" ><button className='roundHomeBtn'>
          <a href="#"><img src="https://res.cloudinary.com/dv3gxfdon/image/upload/v1655432624/vinyl_gevs3z.png" /></a>
            </button></NavLink>
          <h1 className="welcomeText">Welcome, {user.username}</h1>
          <NavLink exact to="/" ><button onClick={logout} className='logOutBtn'>Log Out</button></NavLink>
        </div>
      {/* )} */}
    </>
  );
}

export default ProfileButton;
