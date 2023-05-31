import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

 

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
            </nav>
          </header> 
    )
}