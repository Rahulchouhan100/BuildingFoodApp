import React, { useState } from "react";
import Logo from "../../assets/nav-logo.png";
import "./Header.css";
import { FaAmazon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const userLoggedIn = () => {
  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <nav>
        <section>
          <img src={Logo} alt="logo" className="img-logo" />
        </section>
        <section>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instamart">Instamart</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart - {cartItems.length} </Link>
            </li>

            <li>
              <Link to="/login">
                {isLoggedIn ? (
                  <button
                    className="logInBtn"
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                  >
                    Log in
                  </button>
                ) : (
                  <button
                    className="logInBtn"
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                  >
                    Log out
                  </button>
                )}
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Header;
