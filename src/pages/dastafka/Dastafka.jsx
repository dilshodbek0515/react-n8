import "./Dastafka.scss"
import { memo, useEffect } from "react"
import location from "../../assets/images/location.png"
import { Link } from "react-router-dom"
const Dastafka = ({ language }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="dastafka">
            <div className="dastafka_top">
                <div className="oplata">
                    <div className="flex gap-5">
                        <Link to={"/"}>
                            <p>{language === "RU" ? "Главная" : "Home"}</p>
                        </Link>
                        <Link to={"/dastafka"}>
                            <p>{language === "RU" ? "Доставка и оплата" : "Delivery and payment"}</p>
                        </Link>
                    </div>
                    <h2>{language === "RU" ? "Доставка и оплата" : "Delivery and payment"}</h2>
                </div>
                <div className="dastafka_wrap">
                    <p className="dastafka_text1">{language === "RU" ? "Доставка" : "Доставка"}</p>
                    <p className="dastafka_text2">
                        {
                            language === "RU"
                                ?
                                "Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель"
                                :
                                "We deliver from our warehouse in Moscow and the Moscow region using our own courier service. We deliver our products through transport companies throughout the Russian Federation, as well as throughout the CIS countries. Delivery time: 4-6 weeks"
                        }
                    </p>
                    <p className="dastafka_text3">{language === "RU" ? "Курьерская доставка" : "Courier delivery"}</p>
                    <p className="dastafka_text4">
                        {
                            language === "RU"
                                ?
                                "БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 .Заказы свыше 30 000  имеют бесплатную доставку, включительно 15 км от МКАД"
                                :
                                "We will deliver any order over 5,000 within the Moscow Ring Road for FREE. Orders over 30,000 have free delivery, including 15 km from the Moscow Ring Road"
                        }
                    </p>
                    <p className="dastafka_text5">{language === "RU" ? "Самовывоз" : "Pickup"}</p>
                    <p className="dastafka_text6">
                        {
                            language === "RU"
                                ?
                                "Любой заказ можно забрать самостоятельно по адресу:. Москва, Дмитровское шоссе д.100с2"
                                :
                                "Any order can be picked up yourself at:. Moscow, Dmitrovskoe highway, 100с2Any order can be picked up yourself at:. Moscow, Dmitrovskoe highway, 100с2"
                        }
                    </p>
                </div>
            </div>
            <a href="https://www.google.com/maps/place/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@55.580257,36.7261877,126021m/data=!3m1!1e3!4m15!1m8!3m7!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!3b1!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q!3m5!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D">
                <img className="location" src={location} alt="location" />
            </a>
        </div>
    )
}

export default memo(Dastafka)