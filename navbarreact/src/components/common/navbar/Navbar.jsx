import React from 'react';
import {FaSistrix, FaAlignJustify, FaCartPlus} from "react-icons/fa";
import './Navbar.css'

function Navbar () {
    return (
        <section className="navbar">
            <a href="/" className="navbar-item">Home</a>
            <a href="/shop" className="navbar-item"> Shop</a>
            <a href="/categories" className="navbar-item">Categories</a>
            <a href="/blog" className="navbar-item">Blog</a>
            <a href="/pages" className="navbar-item">Pages</a>
            <a href="/contact" className="navbar-item">Contact Us</a>
            <span className="navbar_search"> <span className="search"> <a href="#" className="search"> Search </a> </span> <FaSistrix className="search_icon"/> </span>
            <span className="dropdown"><FaAlignJustify className="dropdown_icon"/></span>
            <section className="navbar_right">
                <FaCartPlus className="carticon"/> 
                <a href="#" className="mycart" > My Cart </a>
            </section>
        </section>
    )
}

export default Navbar;

