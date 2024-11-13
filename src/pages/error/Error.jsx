import "./Error.scss"
import { memo, useEffect } from "react"
import err from "../../assets/images/404.png"
import { useNavigate } from "react-router-dom"
const Error = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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

export default memo(Error)