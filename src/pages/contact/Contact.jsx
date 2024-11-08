import "./Contact.scss"
import location from "../../assets/images/location.png"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact_top">
                <div className="oplata">
                    <p><span>Главная</span>Контакты</p>
                    <h2>Контакты</h2>
                </div>
                <div className="contact_wrap">
                    <p className="contact_text1">8 (800) 890-46-56</p>
                    <p className="contact_text2">Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину Телефоны:</p>
                </div>
            </div>
            <a href="https://www.google.com/maps/place/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@55.580257,36.7261877,126021m/data=!3m1!1e3!4m15!1m8!3m7!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!3b1!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q!3m5!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D">
                <img className="location" src={location} alt="location" />
            </a>
        </div>
    )
}

export default Contact