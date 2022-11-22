import React from 'react';
import "./Navbar.css";
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';


const Navbar = () => {
  return (
    <div className="div navbar">
      <div className="search">
        <FiSearch className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <BiMessageRoundedDetail className='nav-icon' />
      </div>

    </div>
  )
}

export default Navbar