import "./Katalog.scss"
import { KATALOG } from "../../static"

const obj = [
    KATALOG?.map((item) => (
        <div key={item} className="catalog_card">
            <div className="catalog_text_wrapper">
                <p className="name">{item.name}</p>
                <p className="price">{item.price}</p>
            </div>
            <img className="catalog_img" src={item.image} alt="img" />
        </div>
    ))
]
const Katalog = () => {
    return (
        <section className="catalog">
            <div className="catalog_top">
                <p className="catalog_title">Каталог</p>
                <button className="catalog_btn">Весь каталог</button>
            </div>
            <div className="catalog_bottom">
                {obj}
            </div>
        </section>
    )
}

export default Katalog