import "./Catalog.scss";
import Brend from "../../components/brend/Brend";
import Blog from "../../components/blog/Blog";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://672f3e4f229a881691f24b98.mockapi.io";

const Catalog = () => {
    const [products, setProducts] = useState(null)
    const [item, setItem] = useState(null)
    useEffect(() => {
        axios
            .get(`${BASE_URL}/products`)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const productItems = products?.map((produc) => (
        <div className="catalog_card" key={produc.id}>
            <div>
                <h3 onClick={() => setItem(produc)}>{produc.title}</h3>
                <p>От {produc.price} ₽</p>
            </div>
            <img className="catalog_img" src={produc.url} alt="" />
        </div>
    ))
    return (
        <>
            <div className="catalog">
                <div className="catalog_collection" >
                    {productItems}
                </div>
            </div>


            <Brend />
            <Blog />
            <div className="catalog_bottom">
                <p className="catalog_bottom_text1">Производство светильников</p>
                <p className="catalog_bottom_text2">
                    Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br />
                    Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                </p>
            </div>

            {
                item &&
                <div className="detail">

                </div>
            }
        </>
    );
};

export default Catalog;
