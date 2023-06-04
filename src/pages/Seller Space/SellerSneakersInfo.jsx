import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SellerSneakersInfo () {
    const { currentShoe } = useOutletContext()
    return (
    
       <section className="sellerSpace-shoe-detail-info">
          <h4>Name: <span>{currentShoe.name}</span></h4>
          <h4>Category: <span>{currentShoe.type}</span></h4>
          <h4>Description: <span>{currentShoe.description}</span></h4>
          
       </section>

    )
}