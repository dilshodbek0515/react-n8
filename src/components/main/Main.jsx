import "./Main.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import karusel from "../../assets/images/karusel.png"
import "swiper/css";
import { memo } from "react"
const Main = ({ language }) => {
    return (
        <div className='main'>
            <Swiper className="mySwiper">
                <SwiperSlide className='slide'>
                    <p className="main_title">{language === "RU" ? "Скидка 15%на  все подвесные светильники до 5 февраля" : "15% discount on all pendant lamps until February 5"}</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <p className="main_title">{language === "RU" ? "Скидка 15%на  все подвесные светильники до 5 февраля" : "15% discount on all pendant lamps until February 5"}</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <p className="main_title">{language === "RU" ? "Скидка 15%на  все подвесные светильники до 5 февраля" : "15% discount on all pendant lamps until February 5"}</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <p className="main_title">{language === "RU" ? "Скидка 15%на  все подвесные светильники до 5 февраля" : "15% discount on all pendant lamps until February 5"}</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <p className="main_title">{language === "RU" ? "Скидка 15%на  все подвесные светильники до 5 февраля" : "15% discount on all pendant lamps until February 5"}</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default memo(Main)