import React from "react";
import { NavLink, Outlet } from "react-router-dom";


export default function SneakersLa() {

    const activeStyle = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
    }

    return (
        <>
            <nav className="host-nav"> 
              <NavLink 
              to="."
              end
              style={({isActive}) => isActive ? activeStyle : null}
              >
                All Sneakers
              </NavLink>
              <NavLink 
              to="air-jordan"
              style={({isActive}) => isActive ? activeStyle : null}
              >
                Air Jordan
              </NavLink>
              <NavLink 
              to="nike"
              style={({isActive}) => isActive ? activeStyle : null}
              >
                Nike
                </NavLink>
              <NavLink 
              to="yeezy"
              style={({isActive}) => isActive ? activeStyle : null}
              >
                Yeezy
                </NavLink>
                <NavLink 
              to="adidas"
              style={({isActive}) => isActive ? activeStyle : null}
              >
                Adidas
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}