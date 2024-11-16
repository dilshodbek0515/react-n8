import { Link } from "react-router-dom";
import { useStateValue } from "../../context"
import "./Cart.scss"
import { memo } from "react"
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
    const [state, dispatch] = useStateValue()
    console.log(state);

    return (
        <>
            <div className="Cart_wrapper">

                {
                    state.cart.length
                        ?
                        state?.cart?.map((carts) => (
                            <div className="cart" key={carts.id}>
                                <img src={carts.url} alt="image" />
                                <div className="t_p">
                                    <h3 className="w-32">{carts.title}</h3>
                                    <strong>{carts.price} ₽ * {carts.amount} = {(carts.price * carts.amount).brm()} ₽</strong>
                                </div>
                                <p className="cart_description">{carts.description}</p>
                                <p className="hard_code">RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
                                <div className="cart_count">
                                    <button disabled={carts.amount <= 1} className="minus" onClick={() => dispatch({ type: "DECREMENT_CART", payload: carts })}>-</button>
                                    <span>{carts.amount}</span>
                                    <button disabled={carts.stock <= carts.amount} className="plus" onClick={() => dispatch({ type: "ADD_CART", payload: carts })}>+</button>
                                </div>
                                <IoTrashOutline onClick={() => dispatch({ type: "REMOVE_CART", payload: carts })} className="text-3xl mt-[60px] text-red-700" />
                            </div>
                        ))
                        :
                        <div className="closed_cart flex items-center justify-center flex-col">
                            <img className="w-[400px] h-[400px]" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="img" />
                            <Link to={"/catalog"}><button className="cart_go">Go Home</button></Link>
                        </div>
                }
            </div>
        </>

    )
}

export default memo(Cart)

