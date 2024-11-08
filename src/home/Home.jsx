import React from 'react'
import Main from "../components/main/Main"
import Katalog from "../components/katalog/Katalog"
import Kompany from "../components/kompany/Kompany"
import Tovar from "../components/tovar/Tovar"
import Brend from "../components/brend/Brend"
import Blog from "../components/blog/Blog"
import Rate from "../components/rate/Rate"
const Home = () => {
    return (
        <div>
            <Main />
            <Katalog />
            <Kompany />
            <Tovar />
            <Brend />
            <Blog />
            <Rate />
        </div >
    )
}

export default Home