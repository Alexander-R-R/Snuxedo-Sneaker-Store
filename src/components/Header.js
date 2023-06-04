import React from "react";
import { Link, NavLink } from "react-router-dom";
import loginIcon from "../assets/images/avatar-icon.png"
import { FaUser } from "react-icons/fa"

export default function Header() {

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}

    return (
           <header>
            <Link className="site-logo" to="/">Snuxedo</Link>
            <nav>
              <NavLink 
                  to="/sneakers"
                  className={({isActive}) => isActive ? "active-link" : null}
              >
                Sneakers
                </NavLink>
              <NavLink 
                  to="/seller-space"
                  className={({isActive}) => isActive ? "active-link" : null}
              >
                Seller Space
                </NavLink>
              <NavLink 
                  to="/about"
                  className={({isActive}) => isActive ? "active-link" : null}
              >
                About
                </NavLink>
                <Link to="login" className="login-link">
                    {<FaUser/>}
                </Link>
                {/* <button onClick={fakeLogOut}>X</button> */}
            </nav>
          </header> 
    )
}