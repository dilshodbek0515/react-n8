import "./Footer.scss"
import foo_logo from "../../assets/images/footer.png"
import { RiVkLine } from "react-icons/ri";
import visa from "../../assets/images/visa.png"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="foo">
            <div className="footer">
                <div className="footer_one">
                    <a href="#">
                        <img className="footer_logo" src={foo_logo} alt="logo" />
                    </a>
                    <a href="tel:8 (800) 890-46-56">8 (800) 890-46-56</a>
                    <img className="visa" src={visa} alt="visa" />
                    <p className="foo_one_text1">Политика конфидециальности</p>
                    <p className="foo_one_text2">Пользовательское соглашение</p>
                    <div className="vk">
                        <RiVkLine className="vk_i" />
                        <RiVkLine className="vk_i" />
                        <RiVkLine className="vk_i" />
                    </div>
                </div>
                <div className="footer_two">
                    <h3 className="foo_two_text">Покупателям</h3>
                    <Link className="foo_link" to={"/"}>О компании</Link>
                    <Link className="foo_link" to={"/dastafka"}>Доставка и оплата</Link>
                    <Link className="foo_link" to={"/vozvrat"}>Возврат</Link>
                    <Link className="foo_link" to={"/garant"}>Гарантии</Link>
                    <Link className="foo_link" to={"/contact"}>Контакты</Link>
                    <Link className="foo_link" to={"/blog"}>Блог</Link>
                    <Link className="foo_link" to={"/error"}>Error</Link>
                </div>
                <div className="footer_two">
                    <h3 className="foo_two_text">Товары</h3>
                    <p className="foo_link" >Люстры</p>
                    <p className="foo_link" >Светильники</p>
                    <p className="foo_link" >Бра</p>
                    <p className="foo_link" >Торшеры</p>
                    <p className="foo_link">Комплектуюшие</p>
                    <p className="foo_link" >Настольные лампы</p>
                </div>
                <div className="footer_four">
                    <p className="foo_link">Споты</p>
                    <p className="foo_link">Трековые светильники</p>
                    <p className="foo_link">Уличные светильники</p>
                    <p className="foo_link">Технические светильники</p>
                    <p className="foo_link">Светодиодные ленты</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer