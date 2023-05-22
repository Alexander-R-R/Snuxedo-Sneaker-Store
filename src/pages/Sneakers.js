import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import SneakersBanner from "../resourses/images/sneakers-page-banner.png"


export default function Sneakers() {

      const [searchParams, setSearchParams] = useSearchParams()
      const [shoesData, setShoesData] = React.useState([]);

      const typeFilter = searchParams.get("type")
    
      React.useEffect(() => {
        fetch("/api/sneakers")
          .then((res) => res.json())
          .then((data) => setShoesData(data.shoes));
      }, []);

      const displayedShoes = typeFilter ? shoesData.filter(shoe => shoe.type === typeFilter) : shoesData
    
      const shoesElements = displayedShoes.map((shoe) => (
        <div key={shoe.id} className="shoe-tile">
          <Link to={`/sneakers/${shoe.id}`}>
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
        <div className="sneaker-list-container">
            <img src={SneakersBanner} className="sneakers-banner"/>
            <div className="sneaker-list-filter-buttons">
                <Link 
                    to="."
                    className="van-type all-sneakers"
                >All Sneakers</Link>
                <Link 
                    to="?type=air-jordan"
                    className="van-type air-jordan"
                >Air Jordan</Link>
                <Link 
                    to="?type=nike"
                    className="van-type nike"
                >Nike</Link>
                <Link 
                    to="?type=yeezy"
                    className="van-type yeezy"
                >Yeezy</Link>
                <Link 
                    to="?type=adidas"
                    className="van-type adidas"
                >Adidas</Link>
            
            </div>
          <div className="shoe-list">{shoesElements}</div>
        </div>
      );
    
}