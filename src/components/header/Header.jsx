import { Link } from "react-router-dom"
import { memo, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import "./Header.scss"

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <header className="header">
            <div className="header_top">
                <nav>
                    <ul className={`navbar ${toggle }`}>
                        <Link onClick={() => setToggle(false)} to={"/compane"}>О компании</Link>
                        <Link onClick={() => setToggle(false)} to={"/dastafka"}>Доставка и оплата</Link>
                        <Link onClick={() => setToggle(false)} to={"/vozvrat"}>Возврат</Link>
                        <Link onClick={() => setToggle(false)} to={"/garant"}>Гарантии</Link>
                        <Link onClick={() => setToggle(false)} to={"/contact"}>Контакты</Link>
                        <Link onClick={() => setToggle(false)} to={"/blog"}>Блог</Link>
                        <Link onClick={() => setToggle(false)} to={"/service"}>Servis</Link>

                    </ul>
                    <div className="header_top_contact">
                        <a href="tel:8 (800) 890-46-56">8 (800) 890-46-56</a>
                        <p>Заказать звонок</p>
                    </div>
                </nav>
            </div>
            <div className="header_bottom">
                <BiMenuAltRight className="font-bold text-4xl hidden sidebar_icon" />
                <Link to={"/"}>
                    <img className="logo w-[300px] " src={logo} alt="logo" />
                </Link>
                <div className="flex gap-5 text-[24px] act">
                    <FaRegHeart className="ico" />
                    <FiShoppingCart className="ico" />
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

export default memo(Header)