import React, { useState } from 'react'
import './Navbar.scss';
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="navbar_container">
                <div className="nav_left">
                    <h1>Streamers</h1>
                    <Link className="link" to="/">
                    <span>Home</span>
                    </Link>
                    <Link className="link" to="/series">
                    <span>Series</span>
                    </Link>
                    <Link className="link" to="/movies">
                    <span>Movies</span>
                    </Link>
                    <span>Popular</span>
                    <span>My List</span>
                </div>
                <div className="nav_right">
                    <Search className="icons"/>
                    <span className="icons">Kid</span>
                    <Notifications className="icons"/>
                    <img className="user_img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img"/>
                    <div className="profile_container">
                    <ArrowDropDown className="icons"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
