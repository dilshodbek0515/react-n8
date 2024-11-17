import "./Footer.scss"
import { memo, useEffect } from "react";
import foo_logo from "../../assets/images/footer.png"
import { RiVkLine } from "react-icons/ri";
import visa from "../../assets/images/visa.png"
import { Link } from "react-router-dom";
const Footer = ({ language }) => {
    useEffect(() => {
        scrollTo(0, 0)
    }, [])
    return (
        <footer className="foo">
            <div className="footer">
                <div className="footer_one">
                    <Link to={"/"}>
                        <img className="footer_logo" src={foo_logo} alt="logo" />
                    </Link>
                    <a href="tel:8 (800) 890-46-56">8 (800) 890-46-56</a>
                    <img className="visa" src={visa} alt="visa" />
                    <p className="foo_one_text1">{language === "RU" ? "Политика конфидециальности" : "Privacy Policy"}</p>
                    <p className="foo_one_text2">{language === "RU" ? "Пользовательское соглашение" : "User Agreement"}</p>
                    <div className="vk">
                        <RiVkLine className="vk_i" />
                        <RiVkLine className="vk_i" />
                        <RiVkLine className="vk_i" />
                    </div>
                </div>
                <div className="footer_two">
                    <h3 className="foo_two_text">{language === "RU" ? "Покупателям" : "For buyers"}</h3>
                    <Link className="foo_link" to={"/compane"}>{language === "RU" ? "О компании" : "About "}</Link>
                    <Link className="foo_link" to={"/dastafka"}>{language === "RU" ? "Доставка и оплата" : "Delivery"}</Link>
                    <Link className="foo_link" to={"/vozvrat"}>{language === "RU" ? "Возврат" : "Return"}</Link>
                    <Link className="foo_link" to={"/garant"}>{language === "RU" ? "Гарантии" : "Guarantees"}</Link>
                    <Link className="foo_link" to={"/contact"}>{language === "RU" ? "Контакты" : "Контакты"}</Link>
                    <Link className="foo_link" to={"/blog"}>{language === "RU" ? "Блог" : "Blog"}</Link>
                    <Link className="foo_link" to={"/catalog"}>{language === "RU" ? "Каталог" : "Catalog"}</Link>
                    <Link className="foo_link" to={"/tovar"}>{language === "RU" ? "Товары" : "Goods"}</Link>
                </div>
                <div className="footer_two">
                    <h3 className="foo_two_text">{language === "RU" ? "Товары" : "Goods"}</h3>
                    <p className="foo_link" >{language === "RU" ? "Люстры" : "Chandeliers"}</p>
                    <p className="foo_link" >{language === "RU" ? "Светильники" : "Lamps"}</p>
                    <p className="foo_link" >{language === "RU" ? "Бра" : "Sconce"}</p>
                    <p className="foo_link" >{language === "RU" ? "Торшеры" : "Floor lamps"}</p>
                    <p className="foo_link">{language === "RU" ? "Комплектуюшие" : "Accessories"}</p>
                    <p className="foo_link" >{language === "RU" ? "Настольные лампы" : "Table lamps"}</p>
                </div>
                <div className="footer_four">
                    <p className="foo_link">{language === "RU" ? "Споты" : "Spots"}</p>
                    <p className="foo_link">{language === "RU" ? "Трековые светильники" : "Track lights"}</p>
                    <p className="foo_link">{language === "RU" ? "Уличные светильники" : "Street lamps"}</p>
                    <p className="foo_link">{language === "RU" ? "Технические светильники" : "Technical luminaires"}</p>
                    <p className="foo_link">{language === "RU" ? "Светодиодные ленты" : "LED strips"}</p>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)