import { Link } from "react-router-dom";
import { useStateValue } from "../../context"
import "./Cart.scss"
import { memo, useRef } from "react"
import { IoTrashOutline } from "react-icons/io5";
const BOT_TOKEN = "7663778517:AAHLTijMCfFznDWG_1RuAK8YxoRBhYsWPe4"
const CHAT_ID = 6891591255
const USER_ID = 6891591255


//https://api.telegram.org/bot7663778517:AAHLTijMCfFznDWG_1RuAK8YxoRBhYsWPe4/getUpdates

//https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Cart = ({ language }) => {
    const [state, dispatch] = useStateValue()

    const name = useRef(null)
    const tel = useRef(null)
    const email = useRef(null)
    const adres = useRef(null)
    const coment = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        let text = ""
        text += `Name: ${name.current.value} %0A`
        text += `Tel: ${tel.current.value} %0A`
        text += `Email: ${email.current.value} %0A%0A`
        text += `Manzil: ${adres.current.value} %0A`
        text += `Coment: ${coment.current.value} %0A%0A`

        state?.cart.forEach((pro) => {
            text += `Title: ${pro.title} %0A`
            text += `Amount: ${pro.amount} %0A`
            text += `Price: ${pro.price} %0A%0A`
        })

        text += `Total: ${state.cart?.reduce((sum, item) => sum + item.price * item.amount, 0).brm()}$`
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        const api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()

        dispatch({ type: "CLEAR_CART" })
    }
    return (
        <div className="Cart_wrapper">
            {
                state.cart.length
                    ?
                    <div className="cart_large_wrap">
                        {
                            state?.cart?.map((carts) => (
                                <div className="cart" key={carts.id}>
                                    <img src={carts.url} alt="image" />
                                    <div className="t_p">
                                        <h3 className="w-32">{carts.title}</h3>
                                        <strong>{carts.price} ₽ * {carts.amount} = {(carts.price * carts.amount).brm()} ₽</strong>
                                    </div>
                                    <p className="cart_description">{carts.description}</p>
                                    <p className="hard_code">{language === "RU" ? "RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS" : "RAD-COMBO-50/ХХХ/230/ХХХ/ХХХ/Сч/КСС"}</p>
                                    <div className="flex justify-between items-center c_t">
                                        <div className="cart_count">
                                            <button disabled={carts.amount <= 1} className="minus" onClick={() => dispatch({ type: "DECREMENT_CART", payload: carts })}>-</button>
                                            <span>{carts.amount}</span>
                                            <button disabled={carts.stock <= carts.amount} className="plus" onClick={() => dispatch({ type: "ADD_CART", payload: carts })}>+</button>
                                        </div>
                                        <IoTrashOutline onClick={() => dispatch({ type: "REMOVE_CART", payload: carts })} className="text-3xl text-red-700 trash" />
                                    </div>
                                </div>
                            ))
                        }
                        <div className="register">
                            <h3 className="resgistr_title">Оформление</h3>
                            <form onSubmit={handleSubmit} action="" className="register_form">
                                <div className="register_top_inp">
                                    <input ref={name} type="text" className="regestr_input" placeholder="ФИО" required />
                                    <input ref={tel} type="number" className="regestr_input" placeholder="Tелефон" required />
                                    <input ref={email} type="email" className="regestr_input" placeholder="Электронная почта" required />
                                </div>
                                <h3 className="register_dastafka">Доставка</h3>
                                <input ref={adres} type="text" className="adres_input" placeholder="Адрес доставки" required />
                                <textarea ref={coment} name="" id="" className="textarea" placeholder="Комментарий"></textarea>
                                <button className="reg_btn">Купить</button>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="closed_cart flex items-center justify-center flex-col">
                        <img className="w-[400px] h-[400px]" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="img" />
                        <Link to={"/catalog"}><button className="cart_go">{language === "RU" ? "Иди Главная" : "Go Home"}</button></Link>
                    </div>
            }
        </div>
    )
}

export default memo(Cart)

