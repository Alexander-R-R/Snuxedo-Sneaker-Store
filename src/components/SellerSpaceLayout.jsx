import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function SellerSpaceLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }
  
      return (
          <>
              <nav className="sellerSpace-nav"> 
                <NavLink 
                to="."
                end
                style={({isActive}) => isActive ? activeStyle : null}
                >
                  Dashboard
                </NavLink>
                <NavLink 
                to="income"
                style={({isActive}) => isActive ? activeStyle : null}
                >
                  Income
                </NavLink>
                <NavLink 
                to="vans"
                style={({isActive}) => isActive ? activeStyle : null}
                >
                  Sneakers
                  </NavLink>
                <NavLink 
                to="reviews"
                style={({isActive}) => isActive ? activeStyle : null}
                >
                  Reviews
                  </NavLink>
              </nav>
              <Outlet />
          </>
      )
  
}