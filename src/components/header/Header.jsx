import { Link, NavLink } from "react-router-dom"
import { memo, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoArrowUpCircle, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import "./Header.scss"
import Sidebar from "../sidebar/Sidebar";
import { IoMdArrowDropdown } from "react-icons/io";
import { useStateValue } from "../../context";

const Header = ({ language, setLanguage }) => {
    const [toggle, setToggle] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [state] = useStateValue();
    return (
        <>
            <div className="header_large">
                <header className="header">
                    <div className="header_top">
                        <nav>
                            <ul className={`navbar ${toggle}`}>
                                <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/compane"}>{language === "RU" ? "О компании" : "About "}</NavLink>
                                <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/dastafka"}>{language === "RU" ? "Доставка и оплата" : "Delivery"}</NavLink>
                                <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/vozvrat"}>{language === "RU" ? "Возврат" : "Return"}</NavLink>
                                <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/garant"}>{language === "RU" ? "Гарантии" : "Guarantees"}</NavLink>
                                <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/contact"}>{language === "RU" ? "Контакты" : "Контакты"}</NavLink>
                                <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/blog"}>{language === "RU" ? "Блог" : "Blog"}</NavLink>
                                <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/catalog"}>{language === "RU" ? "Каталог" : "Catalog"}</NavLink>
                                <NavLink className="nav_color" onClick={() => setToggle(false)} to={"/tovar"}>{language === "RU" ? "Товары" : "Goods"}</NavLink>
                            </ul>
                            <div className="header_top_contact">
                                <a href="tel:8 (800) 890-46-56">8 (800) 890-46-56</a>
                                <p>{language === "RU" ? "Заказать звонок" : "Request a call"}</p>
                            </div>
                        </nav>
                    </div>
                    <div className="header_bottom">
                        <BiMenuAltRight onClick={() => setSidebar(true)} className="font-bold text-4xl hidden sidebar_icon" />
                        <Sidebar
                            language={language}
                            setLanguage={setLanguage}
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
                                <button className="katalog_btn"><HiOutlineMenuAlt1 />{language === "RU" ? "Каталог" : "Catalog"}</button>
                            </Link>
                            <form className="forma" action="">
                                <input type="text" placeholder={language === "RU" ? "Поиск по товарам" : "Search by product"} />
                                <button className="search_icon"><IoSearch /></button>
                            </form>
                        </div>
                        <div className="header_statistic_wrapper">
                            <Link to={"heart"} className="icons_content">
                                <div className="flex items-center justify-center">
                                    <FaRegHeart />
                                    <sup className="w-5 h-5 flex items-center justify-center text-white rounded-full bg-red-700 text-[12px]"> {state.wishlist?.length || 0}</sup>
                                </div>
                                <span>{language === "RU" ? "Избранное" : "Favorites"}</span>
                            </Link>
                            <button className="language">
                                <div className="language_content">{language}
                                    <IoMdArrowDropdown className="language_icon" />
                                </div>
                                <div className="language_ru">
                                    <p className="langu" onClick={() => setLanguage("EN")}>EN</p>
                                    <p className="langu" onClick={() => setLanguage("RU")}>RU</p>
                                </div>
                            </button>
                            <Link to={"/cart"} className="icons_content">
                                <div className="flex items-center justify-center">
                                    <FiShoppingCart />
                                    <sup className="w-5 h-5 flex items-center justify-center text-white rounded-full bg-red-700 text-[12px]">{state.cart?.length || 0} </sup>
                                </div>
                                <span>{language === "RU" ? "Корзина" : "Korzinka"}</span>
                            </Link>
                        </div>
                    </div>
                </header>
            </div>

            <a href="#" className="block fixed bottom-8 right-8 text-5xl">
                <IoArrowUpCircle />
            </a >
        </>
    )
}

export default memo(Header)