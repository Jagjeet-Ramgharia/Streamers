import React, { useState,useContext } from 'react'
import './Navbar.scss';
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../context/authContext/AuthContext'

const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false)
    const {dispatch} = useContext(AuthContext)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
    }

    const handleLogout = (e) =>{
        e.preventDefault()
        // dispatch(logout())
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="navbar_container">
                <div className="nav_left">
                    <Link to="/" className="link">
                    <h1>Streamers</h1>
                    </Link>
                    <Link className="link" to="/">
                    <span>Home</span>
                    </Link>
                    <Link className="link" to="/series">
                    <span className="navbarmainLinks">Series</span>
                    </Link>
                    <Link className="link" to="/movies">
                    <span className="navbarmainLinks">Movies</span>
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
                            <span onClick={handleLogout}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
