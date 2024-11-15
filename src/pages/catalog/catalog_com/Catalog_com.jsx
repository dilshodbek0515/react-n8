import "./Catalog_com.scss";
import { memo, useEffect, useState } from "react";
import Model from "../../../components/model/Model";
import { NavLink, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useStateValue } from "../../../context";


const Catalog = ({ products }) => {
    const [state, dispatch] = useStateValue()
    const [item, setItem] = useState(null)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const productItems = products?.map((produc) => (
        <div className="catalog_card" key={produc.id}>
            <div>
                <NavLink to={`/product/${produc.id}`}>
                    <h3>{produc.title}</h3>
                </NavLink>
                <p
                    className="flex items-center gap-5">От {produc.price} ₽
                    <button
                        onClick={() => dispatch({ type: "WISHLIST", payload: produc })}
                        className="text-2xl">
                        {
                            state.wishlist?.some(p => p.id === produc.id)
                                ?
                                <FaHeart />
                                :
                                <FaRegHeart />
                        }
                    </button>
                </p>
            </div>
            <img onClick={() => setItem(produc)} className="catalog_img" src={produc.url} alt="" />
        </div >
    ))
    return (
        <>
            <div className="catalog">
                <div className="catalog_collection" >
                    {productItems}
                </div>
            </div>
            <div className="catalog_bottom">
                <p className="catalog_bottom_text1">Производство светильников</p>
                <p className="catalog_bottom_text2">
                    Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br />
                    Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                </p>
            </div>

            {
                item &&
                <Model close={setItem}>
                    <div className="detail">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <div>
                                <SwiperSlide>
                                    <img className="detail_img" src={item.url} alt="detail_img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="detail_img" src={item.url} alt="detail_img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="detail_img" src={item.url} alt="detail_img" />
                                </SwiperSlide>
                            </div>
                        </Swiper>
                        <div className="detail_right">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <NavLink to={`/product/${item?.id}`}>
                                <button>See more</button>
                            </NavLink>
                        </div>
                    </div>
                </Model>
            }

        </>
    );
};

export default memo(Catalog);