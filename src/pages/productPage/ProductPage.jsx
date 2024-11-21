import "./ProductPage.scss"
import { useParams } from 'react-router-dom';
import { useFetch } from "../../hook/useFetch";
import { FaSquareOdnoklassniki, FaVk, FaTelegram, FaSquareWhatsapp, FaRegHeart, FaHeart } from "react-icons/fa6";
import { useStateValue } from "../../context"
const BASE_URL = "https://672f3e4f229a881691f24b98.mockapi.io";

const ProductPage = () => {

    const { id } = useParams();
    const [state, dispatch] = useStateValue()
    let amount = state?.cart?.find(item => item.id === id)?.amount

    const decrement = (data) => {
        if (amount > 1) {
            dispatch({ type: "DECREMENT_CART", payload: data })
        } else {
            dispatch({ type: "REMOVE_CART", payload: data })
        }
    }


    const { data, error, loading } = useFetch(`${BASE_URL}/products/${id}`);
    if (loading) return <p>Hello</p>;
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
                    {
                        state?.cart?.some(item => item.id === id)
                            ?
                            <div className="count">
                                <button onClick={() => decrement(data)}>-</button>
                                <span>
                                    {
                                        amount
                                    }
                                </span>
                                <button onClick={() => dispatch({ type: "ADD_CART", payload: data })}>+</button>
                            </div>
                            :
                            <div onClick={() => dispatch({ type: "ADD_CART", payload: data })}>
                                <button className="korzina">В корзину</button>
                            </div>
                    }

                    <button
                        onClick={() => dispatch({ type: "WISHLIST", payload: data })} className="heart">
                        {
                            state.wishlist?.some(item => item.id === id)
                                ?
                                <FaHeart />
                                :
                                <FaRegHeart />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
