import React from 'react';
import Logo from "../../assets/nav-logo.png";
import "./Header.css";
import { FaAmazon } from "react-icons/fa";

const Header = () => {
  return (
    <>
        <nav>
            <section>
                <img src={Logo} alt="logo" className='img-logo'/>
            </section>
            <section>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">offers</a></li>
                    <li><a href="">cart</a></li>
                    <li><a href="">contact</a></li>
                    <li><a href="" className='signInBtn'>Sign in</a></li>
                </ul>
            </section>
        </nav>
    </>
  )
}

export default Header;