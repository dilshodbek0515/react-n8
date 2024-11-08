import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header_top">
                <nav>
                    <ul className="navbar">
                        <Link to={"/"}>О компании</Link>
                        <Link to={"/dastafka"}>Доставка и оплата</Link>
                        <Link to={"/vozvrat"}>Возврат</Link>
                        <Link to={"/garant"}>Гарантии</Link>
                        <Link to={"/contact"}>Контакты</Link>
                        <Link to={"/blog"}>Блог</Link>
                        <Link to={"/error"}>Error</Link>

                    </ul>
                    <div className="header_top_contact">
                        <a href="tel:8 (800) 890-46-56">8 (800) 890-46-56</a>
                        <p>Заказать звонок</p>
                    </div>
                </nav>
            </div>
            <div className="header_bottom">
                <a href="#">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <button className="katalog_btn"><HiOutlineMenuAlt1 /> Каталог</button>
                <form className="forma" action="">
                    <input type="text" placeholder="Поиск по товарам" />
                    <button className="search_icon"><IoSearch /></button>
                </form>
                <div className="header_statistic_wrapper">
                    <div className="icons_content">
                        <FaRegHeart />
                        <span>Избранное</span>
                    </div>
                    <div className="icons_content">
                        <TbAntennaBars5 />
                        <span>Сравнение</span>
                    </div>
                    <div className="icons_content">
                        <FiShoppingCart />
                        <span>Корзина</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header