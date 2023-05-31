import React from "react";
import { Link, Outlet } from "react-router-dom"

export default function Home() {
    return(
    <div className="home-container">
        <h1>Snuxedo</h1>
        <p>Best sneaker marketplace in EU.</p>
        <Link to="/sneakers">Find your sneakers</Link>
    </div>
    )
}