import { Link, NavLink } from "react-router-dom"
import { memo, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import "./Header.scss"
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    return (
        <header className="header">
            <div className="header_top">
                <nav>
                    <ul className={`navbar ${toggle}`}>
                        <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/compane"}>О компании</NavLink>
                        <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/dastafka"}>Доставка и оплата</NavLink>
                        <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/vozvrat"}>Возврат</NavLink>
                        <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/garant"}>Гарантии</NavLink>
                        <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/contact"}>Контакты</NavLink>
                        <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/blog"}>Блог</NavLink>
                        <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/catalog"}>Каталог</NavLink>
                        <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/tovar"}>Товары</NavLink>
                    </ul>
                    <div className="header_top_contact">
                        <a href="tel:8 (800) 890-46-56">8 (800) 890-46-56</a>
                        <p>Заказать звонок</p>
                    </div>
                </nav>
            </div>
            <div className="header_bottom">
                <BiMenuAltRight onClick={() => setSidebar(true)} className="font-bold text-4xl hidden sidebar_icon" />
                <Sidebar
                    setSidebar={setSidebar}
                    sidebar={sidebar}
                    setToggle={setToggle}
                />
                <Link to={"/"}>
                    <img className="logo w-[300px] " src={logo} alt="logo" />
                </Link>
                <div className="flex gap-5 text-[24px] act">
                    <Link to={"/heart"}><FaRegHeart className="ico" /></Link>
                    <Link to={"/cart"}><FiShoppingCart className="ico" /></Link>
                </div>
                <div className="header_search_wrap flex gap-5 items-center w-full">
                    <Link to={"/catalog"}>
                        <button className="katalog_btn"><HiOutlineMenuAlt1 /> Каталог</button>
                    </Link>
                    <form className="forma" action="">
                        <input type="text" placeholder="Поиск по товарам" />
                        <button className="search_icon"><IoSearch /></button>
                    </form>
                </div>
                <div className="header_statistic_wrapper">
                    <Link to={"heart"} className="icons_content">
                        <FaRegHeart />
                        <span>Избранное</span>
                    </Link>
                    <div className="icons_content">
                        <TbAntennaBars5 />
                        <span>Сравнение</span>
                    </div>
                    <Link to={"/cart"} className="icons_content">
                        <FiShoppingCart />
                        <span>Корзина</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)