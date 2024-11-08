import "./Brend.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import brend1 from "../../assets/images/brend1.png"
import brend2 from "../../assets/images/brend2.png"
import brend3 from "../../assets/images/brend3.png"
import brend4 from "../../assets/images/brend4.png"
const Brend = () => {
    return (
        <div className="brend">
            <div className="brend_top">
                <h2 className="brend_text">Только проверенные бренды</h2>
                <div className="arrow_wrap">
                    <button className="arrow"><BsArrowLeft /></button>
                    <button className="arrow"><BsArrowRight /></button>
                </div>
            </div>
            <div className="brend_bottom">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={brend1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brend2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brend3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brend4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brend1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brend2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brend3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={brend4} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Brend