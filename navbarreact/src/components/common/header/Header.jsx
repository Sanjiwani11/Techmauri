import React from 'react';
import {Navbar}  from '../../common';
import {FaHeart, FaPhoneAlt, FaLock, FaRegHeart, FaUserPlus} from "react-icons/fa";
import medibazar from "./medibazar.jpeg";

import './Header.css';

function Header (){
    return (
        <section className="header">
                <section className="contact_details">
                    <span><FaHeart className="heart"/> Welcome to MediBazaar. We provide <a href="#">Covid-19</a> accessories.</span>
                    <span className="header_contact"> <a href="#" className="phone_number"> <FaPhoneAlt className="cell"/>  +911 987303827</a> </span>
                    <span className="header_right">
                        <p className="header_rightitems"><FaLock/> Sign In</p>
                        <p className="header_rightitems"><FaUserPlus/> Sign Up </p>
                        <p className="header_rightitems"><FaRegHeart/> Wishlist </p>
                    </span>
                    <hr className="solid"></hr>
                </section>
                <section className="header_bottom">
                    <section className="header_bottom__logo">
                        <img src={medibazar} alt="logo"></img>
                    </section>
                    <section className="header_bottom__navbar">
                        <Navbar />
                    </section>
                </section>
        </section>
    )
}

export default Header;