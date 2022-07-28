import React from 'react'

import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}></NavLink>
      <NavLink to={"about"}></NavLink>
      <NavLink to={"other"}></NavLink>
    </nav>
  )
}

export default Navbar