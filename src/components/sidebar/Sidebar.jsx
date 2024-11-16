import { memo } from "react";
import "./Sidebar.scss";
import { IoCloseCircleOutline, IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Sidebar = ({ sidebar, setSidebar }) => {
    return (
        <>
            {
                <div className={`sidebar_collection ${sidebar ? 'transition-class' : ''}`}>
                    <div className="sidebar_nav">
                        <button className="closed" onClick={() => setSidebar(false)}>
                            <IoCloseCircleOutline />
                        </button>
                        <div className="sidebar_left_nav">
                            <Link to={"/heart"}><CiHeart className="sidebar_left_icons" /></Link>
                            <TbAntennaBars5 className="sidebar_left_icons" />
                            <Link to={"/cart"}><IoCartOutline className="sidebar_left_icons" /></Link>
                        </div>
                    </div>
                    <nav className="sidebar_wrapper">
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/compane"}
                        >
                            О компании
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/dastafka"}
                        >
                            Доставка и оплата
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/vozvrat"}
                        >
                            Возврат
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/garant"}
                        >
                            Гарантии
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/contact"}
                        >
                            Контакты
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/blog"}
                        >
                            Блог
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/catalog"}
                        >
                            Каталог
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            className={`sidebar_item`}
                            to={"/tovar"}
                        >
                            Товары
                        </NavLink>
                        <NavLink
                            onClick={() => setSidebar(false)}
                            to={"/catalog"}>
                            <button
                                className="sidebar_catalog_btn"
                            >
                                <HiOutlineMenuAlt1 />
                                Каталог
                            </button>
                        </NavLink>
                        <a href="tel:8 (800) 890-46-56">
                            <p className="sidebar_call">8 (800) 890-46-56</p>
                        </a>
                        <p className="sidebar_call_text">Заказать звонок</p>
                    </nav>
                </div>
            }
        </>
    );
};

export default memo(Sidebar);
