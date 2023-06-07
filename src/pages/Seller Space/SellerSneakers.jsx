import React from "react";
import { Link, useLoaderData, Await, defer } from "react-router-dom";
import { getHostShoes } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  // await requireAuth(request)
  return defer({ shoes: getHostShoes() })
}

export default function SellerSneakers() {
  const dataPromise = useLoaderData();

  function renderShoeElements(shoes) {

    const sellerSneakersEls = shoes.map((shoe) => (
      <Link to={shoe.id} key={shoe.id} className="sellerSpace-shoe-link-wrapper">
        <div className="sellerSpace-shoe-single" key={shoe.id}>
          <img src={shoe.imageUrl} alt={`Photo of ${shoe.name}`} />
          <div className="sellerSpace-shoe-info">
            <h3>{shoe.name}</h3>
            <p>${shoe.price}/day</p>
          </div>
        </div>
      </Link>
    ))
    return (
      <div className="sellerSpace-shoe-list">
        
        <section>{sellerSneakersEls}</section>
       
      </div>
    )
  }

  

  return (
    <section>
      <h1 className="sellerSpace-shoe-title">Your listed sneakers</h1>
      <React.Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={dataPromise.shoes}>{renderShoeElements}</Await>
      </React.Suspense>
    </section>
  );
}