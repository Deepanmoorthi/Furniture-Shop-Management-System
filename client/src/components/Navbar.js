import React from 'react'
import { NavLink } from 'react-router-dom'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'


import './navbar.css'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="container nav_container">
            <h2>KFS</h2>
            {/* <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="nav Logo" />
            </Link> */}
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                {
                links.map(({name, path}, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} >{name}</NavLink>
                        </li>
                    )
                    })
                }
            </ul>

            <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
            {
                isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
            }
                
            </button>
        </div>
    </nav>
  )
}

export default Navbar
