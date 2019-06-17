
import React from "react";
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    //  setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    return (
        <nav className="nav-wrapper teal lighten-2">
            <div className="container">
                <Link className="brand-logo" to="/">TV Bland</Link>
                <ul className="right">
                    <li><Link to="/">HOME</Link></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
   
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar);