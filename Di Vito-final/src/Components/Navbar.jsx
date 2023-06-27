import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, changeTheme } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <NavLink className="nav-link" to="/home">Home</NavLink>
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
      <NavLink className="nav-link" to="/favs">Favs</NavLink>
      <button onClick={handleThemeChange}>Change theme</button>
    </nav>
  );
};

export default Navbar;