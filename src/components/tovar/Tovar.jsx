import "./Tovar.scss"
import { memo } from "react"
import { TOVAR } from "../../static"
import { Link } from "react-router-dom"
const tavar = [
    TOVAR?.map((tavar) => (
        <div key={tavar.id} className="tovar_card">
            <div className="tv_img">
                <img className="tavar_image" src={tavar.image} alt="img" />
                <img className="heart" src={tavar.heart} alt="heart" />
            </div>
            <h3 className="tavat_card_title">{tavar.title}</h3>
            <div className="tv_price_wrap">
                <div className="price_wrapper">
                    <del>{tavar.price}</del>
                    <strong>{tavar.price2}</strong>
                </div>
                <div className="cart_bg">
                    <img className="tavr_cart" src={tavar.cart} alt="cart" />
                </div>
            </div>
        </div>
    ))
]
const Tovar = ({ language }) => {
    return (
        <div className="tovar">
            <div className="tovar_top">
                <h2 className="tovar_title">{language === "RU" ? "Популярные товары" : "Popular Products"}</h2>
                <Link to={"/tovar"}><button className="tovar_btn">{language === "RU" ? "Все товары" : "All products"}</button></Link>
            </div>
            <div className="tovar_bottom">
                {tavar}
            </div>
        </div>
    )
}

export default memo(Tovar)