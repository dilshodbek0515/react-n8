import { Route, Routes } from "react-router-dom";
import React from 'react';
import Compane from "../pages/compane/Compane";
import Dastafka from "../pages/dastafka/Dastafka";
import Vozvrat from "../pages/vozvrat/Vozvrat";
import Garant from "../pages/garant/Garant";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import Catalog from "../pages/catalog/Catalog";
import Error from "../pages/error/Error";
import Service from "../pages/service/Service";
import ProductPage from "../pages/productPage/ProductPage";
import Heart from "../pages/heart/Heart";
import Tovar_p from "../pages/tovar_page/Tovar_page"
import Cart from "../pages/cart/Cart";
import Layout from "../pages/layout/Layout";

const Routesone = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/compane" element={<Compane />} />
                    <Route path="/dastafka" element={<Dastafka />} />
                    <Route path="/vozvrat" element={<Vozvrat />} />
                    <Route path="/garant" element={<Garant />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/heart" element={<Heart />} />
                    <Route path="/tovar" element={<Tovar_p />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Route >
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default Routesone;
