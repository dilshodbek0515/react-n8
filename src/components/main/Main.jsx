import { memo } from 'react'
import "./Main.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import karusel from "../../assets/images/karusel.png"
import "swiper/css";
import { memo } from "react"
const Main = () => {
    return (
        <div className='main'>
            <Swiper className="mySwiper">
                <SwiperSlide className='slide'>
                    <p className="main_title">Скидка 15%на  все подвесные светильники до 5 февраля</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <p className="main_title">Скидка 15%на  все подвесные светильники до 5 февраля</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <p className="main_title">Скидка 15%на  все подвесные светильники до 5 февраля</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <p className="main_title">Скидка 15%на  все подвесные светильники до 5 февраля</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <p className="main_title">Скидка 15%на  все подвесные светильники до 5 февраля</p>
                    <img className="main_img" src={karusel} alt="img" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default memo(Main)