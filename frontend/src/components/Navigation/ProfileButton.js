// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

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
  };

  return (
    <>
      {/* <button onClick={openMenu} >
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && ( */}
        <div className="modalBtn">
          <h1>Hi, {user.username}</h1>
          <NavLink exact to="/" ><button onClick={logout} className='logOutBtn'>Log Out</button></NavLink>
        </div>
      {/* )} */}
    </>
  );
}

export default ProfileButton;
