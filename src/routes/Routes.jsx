import { Route, Routes } from "react-router-dom"
import React from 'react'
import Home from "../home/Home"
import Dastafka from "../pages/dastafka/Dastafka"
import Vozvrat from "../pages/vozvrat/Vozvrat"
import Garant from "../pages/garant/Garant"
import Contact from "../pages/contact/Contact"
import Blog from "../pages/blog/Blog"
import Error from "../pages/error/Error"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"


const Routesone = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dastafka" element={<Dastafka />} />
                <Route path="/vozvrat" element={<Vozvrat />} />
                <Route path="/garant" element={<Garant />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/error" element={<Error />} />
            </Routes >
            <Footer />
        </ >
    )
}

export default Routesone