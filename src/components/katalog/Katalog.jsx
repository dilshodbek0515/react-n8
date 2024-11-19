import "./Katalog.scss"
import { memo } from "react"
import { KATALOG } from "../../static"
import { Link } from "react-router-dom"
const obj = [
    KATALOG?.map((item) => (
        <div key={item.id} className="catalog_card">
            <div className="catalog_text_wrapper">
                <p className="name">{item.name}</p>
                <p className="price">{item.price}</p>
            </div>
            <img className="catalog_img" src={item.image} alt="img" />
        </div>
    ))
]
const Katalog = ({ language }) => {
    return (
        <>
            <section className="catalog">
                <div className="catalog_top">
                    <p className="catalog_title">{language === "RU" ? "Каталог" : "Catalog"}</p>
                    <Link to={"/catalog"}><button className="catalog_btn">{language === "RU" ? "Весь каталог" : "Entire catalog"}</button></Link>
                </div>
                <div className="catalog_bottom">
                    {obj}
                </div>
            </section>
        </>
    )
}

export default memo(Katalog)