import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = ({ language, setLanguage }) => {
    return (
        <>
            <Header language={language} setLanguage={setLanguage} />
            <main>
                <Outlet />
            </main>
            <Footer language={language} />
        </>
    )
}

export default Layout