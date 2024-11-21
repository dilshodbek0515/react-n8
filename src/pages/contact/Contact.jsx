import "./Contact.scss"
import { memo, useEffect } from "react"
import { Link } from "react-router-dom"
import location from "../../assets/images/location.png"
import MapComponent from '././MapComponent';

const Contact = ({ language }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="contact">
            <div className="contact_top">
                <div className="oplata">
                    <div className="flex gap-5">
                        <Link to={"/"}>
                            <p>{language === "RU" ? "Главная" : "Home"}</p>
                        </Link>
                        <Link to={"/contact"}>
                            <p>{language === "RU" ? "Контакты" : "Контакты"}</p>
                        </Link>
                    </div>
                    <h2>{language === "RU" ? "Контакты" : "Contact"}</h2>
                </div>
                <div className="contact_wrap">
                    <p className="contact_text1">8 (800) 890-46-56</p>
                    <p className="contact_text2">{language === "RU" ? "Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину Телефоны:" : "Mon-Fri: 10:00 to 19:00 Sat-Sun: order via cart Phones:"}</p>
                </div>
            </div>
            <MapComponent />
        </div>
    )
}

export default memo(Contact)