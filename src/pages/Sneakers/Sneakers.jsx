import React from "react";
import SneakersBanner from "../../resourses/images/sneakers-page-banner.png"
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getShoes } from "../../api";


export function loader() {
  return defer({ shoes: getShoes() });
  
}

export default function Sneakers() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();
  
  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderShoeElements(shoes) {
    const displayedShoes = typeFilter
      ? shoes.filter((shoe) => shoe.type === typeFilter)
      : shoes;

    const shoesElements = displayedShoes.map((shoe) => (
      <div key={shoe.id} className="shoe-tile">
        <Link 
        to={shoe.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
          <img src={shoe.imageUrl} />
          <div className="van-info">
            <h3>{shoe.name}</h3>
            <p>
              {shoe.price}
              <span>€</span>
            </p>
          </div>
          {/* <i className={`van-type ${shoe.type} selected`}>{shoe.type}</i> */}
        </Link>
      </div>
    ));

    return (
      <>
        <div className="sneaker-list-container">
          <img src={SneakersBanner} className="sneakers-banner" />
          <div className="sneaker-list-filter-buttons">
            <button to="." className="van-type all-sneakers">
              All Sneakers
            </button>
            <button
              onClick={() => handleFilterChange("type", "air-jordan")}
              className={`shoe-type air-jordan ${
                typeFilter === "air-jordan" ? "selected" : ""
              }`}
            >
              Air Jordan
            </button>
            <button
              onClick={() => handleFilterChange("type", "nike")}
              className={`shoe-type air-jordan ${
                typeFilter === "nike" ? "selected" : ""
              }`}
            >
              Nike
            </button>
            <button
              onClick={() => handleFilterChange("type", "yeezy")}
              className={`shoe-type yeezy ${
                typeFilter === "yeezy" ? "selected" : ""
              }`}
            >
              Yeezy
            </button>
            <button
              onClick={() => handleFilterChange("type", "adidas")}
              className={`shoe-type adidas ${
                typeFilter === "adidas" ? "selected" : ""
              }`}
            >
              Adidas
            </button>
          </div>
          <div className="shoe-list">{shoesElements}</div>
        </div>
      </>
    );
  }

  return (
    <div className="shoe-list-container">
      <h1>Explore our sneaker options</h1>
      <React.Suspense fallback={<h2>Loading sneakers ...</h2>}>
        <Await resolve={dataPromise.shoes}>{renderShoeElements}</Await>
      </React.Suspense>
    </div>
  );
}
