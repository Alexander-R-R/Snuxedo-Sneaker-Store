import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sneakers, {loader as loaderSneakers} from "./pages/Sneakers/Sneakers";
import About from "./pages/About";
import Dashboard from "./pages/Seller Space/Dashboard";
import SneakersLayout from "./components/SneakersLayout";
import SellerSpaceLayout from "./components/SellerSpaceLayout";
import SneakerDetails, {
  loader as loaderSneakerDetails,
} from "./pages/Sneakers/SneakerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      
        <Route 
        path="sneakers" 
        element={<Sneakers />} 
        loader={loaderSneakers} />
        <Route index  />
        <Route
          path="sneakers/:id"
          element={<SneakerDetails />}
          loader={loaderSneakerDetails}
        />
        <Route path="/seller-space" element={<SellerSpaceLayout />}>
         <Route
          index
          element={<Dashboard />}
          loade
         />

      </Route> 
      <Route path="/about" element={<About />} />
      

      
    </Route>
  )
);

export default function App() {
  return (
  <RouterProvider router={router} />
  );
}