import { memo, useEffect } from "react"
import "./Compane.scss"
import Brend from "../../components/brend/Brend"
import Blog from "../../components/blog/Blog"
import { Link } from "react-router-dom"
const Compane = () => {
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
                                <p className="glav_compo">Главная</p>
                            </Link>
                            <Link to={"/compane"}>
                                <p className="compo">О компании</p>
                            </Link>
                        </div>
                        <h2 className="compane_logo">О компании</h2>
                        <div className="compane_card_wrap">
                            <div className="compane_card">
                                <h3 className="compane_card_text">170+</h3>
                                <p className="compane_card_text_two">Товаров</p>
                            </div>
                            <div className="compane_card">
                                <h3 className="compane_card_text">1000+</h3>
                                <p className="compane_card_text_two">Довольных покупателей</p>
                            </div>
                            <div className="compane_card">
                                <h3 className="compane_card_text">170+</h3>
                                <p className="compane_card_text_two">Товаров</p>
                            </div>
                        </div>
                    </div>
                    <div className="compane_right">
                        <p className="compane_right_text">Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                        <p className="compane_right_text">Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                        <p className="compane_right_text">Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                        <p className="compane_right_text">Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
                </div >
            </div>
            <Brend />
            <Blog />
        </>
    )
}

export default memo(Compane)