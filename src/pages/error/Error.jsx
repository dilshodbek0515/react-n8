import "./Error.scss"
import err from "../../assets/images/404.png"
import { useNavigate } from "react-router-dom"
const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='error'>
            <img className="error_img" src={err} alt="error" />
            <p className="error_text">Похоже, ничего не нашлось :(</p>
            <button onClick={() => navigate("/")} className="error_btn1">Go Home</button>
            <button onClick={() => navigate(-1)} className="error_btn2">Go Back</button>
        </div>
    )
}

export default Error