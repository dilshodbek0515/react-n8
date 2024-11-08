import "./Tovar.scss"
import { TOVAR } from "../../static"
const tavar = [
    TOVAR?.map((tavar) => (
        <div key={tavar} className="tovar_card">
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
const Tovar = () => {
    return (
        <div className="tovar">
            <div className="tovar_top">
                <h2 className="tovar_title">Популярные товары</h2>
                <button className="tovar_btn">Все товары</button>
            </div>
            <div className="tovar_bottom">
                {tavar}
            </div>
        </div>
    )
}

export default Tovar