import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sneakers from "./pages/Sneakers"
import About from "./pages/About"
import BuyerSeller from "./pages/Buyer-Seller"
import AllSneakers from "./pages/Sneakers/AllSneakers"
import SneakersLayout from "./components/SneakersLayout"

function App() {
  return (
  <>
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="sneakers" element={<SneakersLayout />} > 
                 <Route path="sneakers" element={AllSneakers}/>
                 <Route index element={<Sneakers />}/>
                 
              
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/buyer-seller" element={<BuyerSeller />} />

              <Route path="sneakers" >

              </Route>
            </Route>
      </Routes>








    </BrowserRouter>
  </React.StrictMode>
   </>
  );
}

export default App;
