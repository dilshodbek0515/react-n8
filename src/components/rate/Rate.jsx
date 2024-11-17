import "./Rate.scss"
import { memo } from "react"
const Rate = ({ language }) => {
    return (
        <div className="rate">
            <p className="rate_text">{language === "RU" ? "Производство светильников" : "Production of lamps"}</p>
            <p className="rate_large_text">
                {
                    language === "RU"
                        ?
                        "Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br />Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!"
                        :
                        "By purchasing lighting fixtures from our online store, you receive an excellent balance of price and quality. We deliver throughout Russia so that every customer can enjoy the wonderful light and convenience of online shopping. Contact us today and transform your home into an oasis of warmth and light with NORNLIGHT!"
                }
            </p>
        </div>
    )
}

export default memo(Rate)