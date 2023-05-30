import React from "react";
import { useParams, Link, useLocation, useLoaderData, Await, defer } from "react-router-dom";
import { getShoe } from "../../api";

export function loader({ params }) {
  return defer({ shoes: getShoe(params.id) });
}


export default function ShoeDetails() {
  const location = useLocation();
  const dataPromise = useLoaderData();
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  function renderShoeDetails( shoe ) {
    return (
      <div className="van-detail-container">
      <Link to={`..${search} `} relative="path" className="back-button">
        &larr; <span>Back to {type} sneakers</span>
      </Link>
  
      <div className="van-detail">
        <img src={shoe.imageUrl} />
        <i className={`van-type ${shoe.type} selected`}>{shoe.type}</i>
        <p className="van-price">
          <span>${shoe.price}</span>/day
        </p>
        <p>{shoe.description}</p>
        <button className="link-button">Buy now</button>
      </div>
    </div>
    )
  }

  return (
    <React.Suspense fallback={<h2>Loading sneakers details...</h2>}>
        <Await resolve={dataPromise.shoes}>{renderShoeDetails}</Await>
    </React.Suspense>
    
  );
}