import { memo, useEffect } from "react"
import "./Compane.scss"
import Brend from "../../components/brend/Brend"
import Blog from "../../components/blog/Blog"
import { Link } from "react-router-dom"
const Compane = ({ language }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="o_com">
                <div className="compane">
                    <div className="compane_left">
                        <div className="links_wrap">
                            <Link to={"/"}>
                                <p className="glav_compo">{language === "RU" ? "Главная" : "Home"}</p>
                            </Link>
                            <Link to={"/compane"}>
                                <p className="compo">{language === "RU" ? "О компании" : "About"}</p>
                            </Link>
                        </div>
                        <h2 className="compane_logo">{language === "RU" ? "О компании" : "About"}</h2>
                        <div className="compane_card_wrap">
                            <div className="compane_card">
                                <h3 className="compane_card_text">170+</h3>
                                <p className="compane_card_text_two">{language === "RU" ? "Товаров" : "Products"}</p>
                            </div>
                            <div className="compane_card">
                                <h3 className="compane_card_text">1000+</h3>
                                <p className="compane_card_text_two">{language === "RU" ? "Довольных покупателей" : "Satisfied customers"}</p>
                            </div>
                            <div className="compane_card">
                                <h3 className="compane_card_text">170+</h3>
                                <p className="compane_card_text_two">{language === "Ru" ? "Товаров" : "Products"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="compane_right">
                        <p className="compane_right_text">
                            {
                                language === "RU"
                                    ?
                                    "Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют."
                                    :
                                    "The NORNLIGHT online store offers a wide range of lamps to illuminate your home or office. Here you will find a variety of lamp models, from modern and stylish to classic and elegant. We offer high-quality and reliable lamps from the best manufacturers that will give you comfort and coziness."
                            }
                        </p>
                        <p className="compane_right_text">
                            {
                                language === "RU"
                                    ?
                                    "Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!"
                                    :
                                    "By purchasing lamps in our online store, you get excellent value for money. We deliver throughout Russia so that every customer can enjoy the beautiful light and the convenience of buying online. Contact us today and turn your home into an oasis of warmth and light with NORNLIGHT!"
                            }
                        </p>
                        <p className="compane_right_text">
                            {
                                language === "RU"
                                    ?
                                    "Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют."
                                    :
                                    "The NORNLIGHT online store offers a wide range of lamps to illuminate your home or office. Here you will find a variety of lamp models, from modern and stylish to classic and elegant. We offer high-quality and reliable lamps from the best manufacturers that will give you comfort and coziness."
                            }
                        </p>
                        <p className="compane_right_text">
                            {
                                language === "RU"
                                    ?
                                    "Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!"
                                    :
                                    "By purchasing lamps in our online store, you get excellent value for money. We deliver throughout Russia so that every customer can enjoy the beautiful light and the convenience of buying online. Contact us today and turn your home into an oasis of warmth and light with NORNLIGHT!"
                            }
                        </p>
                    </div>
                </div >
            </div>
            <Brend />
            <Blog />
        </>
    )
}

export default memo(Compane)