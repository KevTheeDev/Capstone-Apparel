import React from 'react';
import "../styles/NavbarMenu.css";
import '../App.css'
import { Link } from 'react-router-dom';

function NavbarMenu(){
    return(
        <div className="navbar-list">

            <nav> 
                <ul>
                    <li> <Link to=""> Features </Link> </li>

                    <li> <Link to="/">About</Link></li>
                    
                    <li> <Link to=""> Testimonials </Link></li>

                    <li> <Link to=""> Contact</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarMenu;