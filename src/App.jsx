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
import Sneakers, { loader as loaderSneakers } from "./pages/Sneakers/Sneakers";
import About from "./pages/About";
import Dashboard, { loader as loaderDashboard } from "./pages/Seller Space/Dashboard";
import SneakersLayout from "./components/SneakersLayout";
import SellerSpaceLayout from "./components/SellerSpaceLayout";
import SneakerDetails, {
  loader as loaderSneakerDetails,
} from "./pages/Sneakers/SneakerDetails";
import Income from "./pages/Seller Space/Income";
import Reviews from "./pages/Seller Space/Reviews";
import SellerSneakers, { loader as loaderSellerSneakers } from "./pages/Seller Space/SellerSneakers"
import SellerSneakersDetail, { loader as loaderSellerSneakersDetail } from "./pages/Seller Space/SellerSneakersDetail"
import SellerSneakersPricing from "./pages/Seller Space/SellerSneakersPricing";
import SellerSneakersPhotos from "./pages/Seller Space/SellerSneakersPhotos";
import SellerSneakersInfo from "./pages/Seller Space/SellerSneakersInfo";
import Login, { loader as loaderLogin, action as actionLogin, } from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route
        path="login"
        element={<Login />}
        loader={loaderLogin}
        action={actionLogin}
      />
      <Route
        path="sneakers"
        element={<Sneakers />}
        loader={loaderSneakers} />
      <Route index />
      <Route
        path="sneakers/:id"
        element={<SneakerDetails />}
        loader={loaderSneakerDetails}
      />
      <Route path="seller-space" element={<SellerSpaceLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={loaderDashboard}
        />
        <Route
          path="income"
          element={<Income />}
          errorElement
          loader={async ({ request }) => {
            await (request)
            return null
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          errorElement
          loader={async ({ request }) => {
            await (request)
            return null
          }}
        />
        <Route path="sneakers" element={<SellerSneakers />} errorElement loader={loaderSellerSneakers} />

        <Route
          path="sneakers/:id"
          element={<SellerSneakersDetail />}
          loader={loaderSellerSneakersDetail}
        >
          <Route
            index
            element={<SellerSneakersInfo />}

          />
          <Route
            path="pricing"
            element={<SellerSneakersPricing />}


          />
          <Route
            path="photos"
            element={<SellerSneakersPhotos />}

          />
        </Route>


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
