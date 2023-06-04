import React from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { getShoe } from "../../api";


export async function loader({ params, request }) {
  await (request);
  return getShoe(params.id);
}

export default function SellerSneakersDetail() {
  const currentShoe = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        <span>Back to your sneakers</span>
      </Link>
      <div className="sellerSpace-shoe-detail-layout-container">
        <div className="sellerSpace-shoe-detail">
          <img src={currentShoe.imageUrl} />
          <div className="sellerSpace-shoe-detail-info-text">
            <i className={`sellerSpace-type shoe-type-${currentShoe.type}`}>
              {currentShoe.type}
            </i>
            <h3>{currentShoe.name}</h3>
            <h4>${currentShoe.price}/day</h4>
          </div>
        </div>
        <nav className="sellerSpace-shoe-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentShoe }} />
      </div>
    </section>
  );
}