import React from 'react';
import "../styles/NavbarMenu.css";
import '../App.css'
import { Link } from 'react-router-dom';
import FooterScss from '../styles/Footer.scss';

function Footer(){
    return(
        <div className="bottom-navbar-list">

            <nav> 
                <ul>
                    <li> <Link to="/CartContainer"> Cart </Link> </li>

                    <li> <Link to="/"> Home </Link> </li>

                    <li> <Link to="/About">About </Link></li>
                    
                    <li> <Link to="/TestimonialsContainer"> Testimonials </Link></li>

                    <li> <Link to="/ContactPage"> Contact </Link> </li>

                </ul>
            </nav>
        </div>
    )
}

export default Footer;