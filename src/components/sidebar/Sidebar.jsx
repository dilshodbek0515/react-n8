import { memo } from "react";
import "./Sidebar.scss";
import { IoCloseCircleOutline, IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar = ({ sidebar, setSidebar, language, setLanguage }) => {
    return (
        <>
            {
                <div className={`sidebar_collection ${sidebar ? 'transition-class' : ''}`}>
                    <div className="sidebar_nav">
                        <button className="closed" onClick={() => setSidebar(false)}>
                            <IoCloseCircleOutline />
                        </button>
                        <div className="sidebar_left_nav">
                            <Link><CiHeart onClick={() => setSidebar(false)} to={"/heart"} className="sidebar_left_icons" /></Link>
                            <button className="language">
                                <div className="language_content">{language}
                                    <IoMdArrowDropdown className="language_icon" />
                                </div>
                                <div className="language_ru">
                                    <p className="langu" onClick={() => setLanguage("EN")}>EN</p>
                                    <p className="langu" onClick={() => setLanguage("RU")}>RU</p>
                                </div>
                            </button>
                            <Link to={"/cart"}><IoCartOutline onClick={() => setSidebar(false)} className="sidebar_left_icons" /></Link>
                        </div>
                    </div>
                    <nav className="sidebar_wrapper">
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/compane"}
                        >
                            {language === "RU" ? "О компании" : "About "}
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/dastafka"}
                        >
                            {language === "RU" ? "Доставка и оплата" : "Delivery"}
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/vozvrat"}
                        >
                            {language === "RU" ? "Возврат" : "Return"}
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/garant"}
                        >
                            {language === "RU" ? "Гарантии" : "Guarantees"}
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/contact"}
                        >
                            {language === "RU" ? "Контакты" : "Контакты"}
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/blog"}
                        >
                            {language === "RU" ? "Блог" : "Blog"}
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/catalog"}
                        >
                            {language === "RU" ? "Каталог" : "Catalog"}
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/tovar"}
                        >
                            {language === "RU" ? "Товары" : "Goods"}
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            to={"/catalog"}>
                            <button
                                className="sidebar_catalog_btn"
                            >
                                <HiOutlineMenuAlt1 />
                                {language === "RU" ? "Каталог" : "Catalog"}
                            </button>
                        </NavLink>
                        <a href="tel:8 (800) 890-46-56">
                            <p className="sidebar_call">8 (800) 890-46-56</p>
                        </a>
                        <p className="sidebar_call_text">{language === "RU" ? "Заказать звонок" : "Request a call"}</p>
                    </nav>
                </div>
            }
        </>
    );
};

export default memo(Sidebar);
