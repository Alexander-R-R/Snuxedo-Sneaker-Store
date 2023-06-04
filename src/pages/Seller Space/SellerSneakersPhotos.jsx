import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SellerSneakersPhotos() {
    const { currentShoe } = useOutletContext()

    return (
        <img src={currentShoe.imageUrl} className="sellerSpace-shoe-detail-image"/>
    )
}