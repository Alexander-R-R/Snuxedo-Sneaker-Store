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
          <div className="sneaker-info">
            <p>
              <span>€</span>
              {shoe.price}
            </p>
            <span> {shoe.type} </span>
            <h3>{shoe.name}</h3>
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
            <button 
            onClick={() => handleFilterChange("type", "")}
            className={`shoe-type air-jordan ${
              typeFilter === "" ? "selected" : ""
            }`}>
              ALL SNEAKERS
            </button>
            <button
              onClick={() => handleFilterChange("type", "Air Jordan")}
              className={`shoe-type air-jordan ${
                typeFilter === "Air Jordan" ? "selected" : ""
              }`}
            >
              AIR JORDAN
            </button>
            <button
              onClick={() => handleFilterChange("type", "Nike")}
              className={`shoe-type air-jordan ${
                typeFilter === "Nike" ? "selected" : ""
              }`}
            >
              NIKE
            </button>
            <button
              onClick={() => handleFilterChange("type", "Yeezy")}
              className={`shoe-type yeezy ${
                typeFilter === "Yeezy" ? "selected" : ""
              }`}
            >
              YEEZY
            </button>
            <button
              onClick={() => handleFilterChange("type", "Adidas")}
              className={`shoe-type adidas ${
                typeFilter === "Adidas" ? "selected" : ""
              }`}
            >
              ADIDAS
            </button>
          </div>
          <div className="shoe-list">{shoesElements}</div>
        </div>
      </>
    );
  }

  return (
    <div className="shoe-list-container">

      <React.Suspense fallback={<h2>Loading sneakers ...</h2>}>
        <Await resolve={dataPromise.shoes}>{renderShoeElements}</Await>
      </React.Suspense>
    </div>
  );
}
