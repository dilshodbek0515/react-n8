import "./ProductPage.scss"
import { Link, useParams } from 'react-router-dom';
import { useFetch } from "../../hook/useFetch";
import { CiHeart } from "react-icons/ci";
import { FaSquareOdnoklassniki, FaVk, FaTelegram, FaSquareWhatsapp } from "react-icons/fa6";
import { useState } from "react";
const BASE_URL = "https://672f3e4f229a881691f24b98.mockapi.io";

const ProductPage = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(p => p + 1);
    };
    const setincrement = () => {
        setCount(p => p - 1);
    };
    const { id } = useParams();
    console.log(count);

    const { data, error, loading } = useFetch(`${BASE_URL}/products/${id}`);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data found</p>;

    return (
        <div className="single">
            <img className="single_image" src={data?.url} alt="image" />
            <div className="single_right">
                <h3 className="single_title">{data.title}</h3>
                <div className="single_icons_wrapp">
                    <div className="icons_text_wrap">
                        <p>Scott</p>
                        <p>Артикул : 7655-188</p>
                        <span>В наличии</span>
                    </div>
                    <div className="icons_coll">
                        <FaSquareOdnoklassniki />
                        <FaVk />
                        <FaTelegram />
                        <FaSquareWhatsapp />
                        <FaSquareWhatsapp />
                    </div>
                </div>
                <strong>{data.price} 000 ₽ <del>{data.price2} 000 ₽</del></strong>
                <p className="single_desc">{data.description}</p>
                <div className="counter">
                    <div className="count">
                        <button
                            disabled={count === 1} onClick={() => setincrement()}>-
                        </button>
                        {count}
                        <button onClick={() => increment()}>+</button>
                    </div>
                    <button className="korzina">В корзину</button>
                    <Link to={"/heart"}><button className="heart"><CiHeart /></button></Link>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
