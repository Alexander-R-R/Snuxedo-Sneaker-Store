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
            
            <Outlet />
        </>
    )
}