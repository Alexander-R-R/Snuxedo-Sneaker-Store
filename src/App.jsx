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
import Dashboard, { loader as loaderDashboard} from "./pages/Seller Space/Dashboard";
import SneakersLayout from "./components/SneakersLayout";
import SellerSpaceLayout from "./components/SellerSpaceLayout";
import SneakerDetails, {
  loader as loaderSneakerDetails,
} from "./pages/Sneakers/SneakerDetails";
import Income from "./pages/Seller Space/Income";
import Reviews from "./pages/Seller Space/Reviews";
import SellerSneakers from "./pages/Seller Space/SellerSneakers"

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
        <Route path="seller-space" element={<SellerSpaceLayout />}>
         <Route
          index
          element={<Dashboard />}
          loader={loaderDashboard}
         />
         <Route
          path="income"
          element={<Income />}
          errorElement={<Error />}
          loader={async ({ request }) => {
            await requireAuth(request)
            return null
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          errorElement={<Error />}
          loader={async ({ request }) => {
            await requireAuth(request)
            return null
          }}
        />
        <Route path="vans" element={<SellerSneakers />} errorElement={<Error />} loader={loaderHostVans} />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={loaderHostVanDetail}
        >
          <Route 
            index 
            element={<HostVanInfo />}
            loader={async ({ request }) => {
              await requireAuth(request)
              return null
            }}
          />
          <Route
              path="pricing" 
              element={<HostVanPricing />} 
              loader={async ({ request }) => {
                await requireAuth(request)
                return null
              }}
          />
          <Route
             path="photos" 
             element={<HostVanPhotos />}
             loader={async ({ request }) => {
            return await requireAuth(request) || null
            }}
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
