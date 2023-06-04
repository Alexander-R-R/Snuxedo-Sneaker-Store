import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SellerSneakersPricing() {

     const { currentShoe } = useOutletContext()
     return <h3 className="host-van-price">${currentShoe.price.toFixed(2)}<span></span></h3>

}