import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../../css/Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {

  const profile = localStorage.getItem('testObject')
  console.log(profile)
  

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav className={'nav-menu active'}>
            
          <ul className='nav-menu-items' >
            {/* <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}
            <div className='sidebar-profile'>
                <p><label className="sidebar-profile-dental" >Dental</label> For Home</p>
                {/* <img src={image} className='profile-image'/> */}
                <div className='profile-image' />
                <p>Jesson George</p>
                <div className='sidebar-profile-edit'>
                  <FaIcons.FaUserEdit style={{padding:`20px 15px 0 0`,}} />
                    <p>Edit Profile</p>
                </div>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;