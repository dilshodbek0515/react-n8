import "./Kompany.scss"
import { memo } from "react"
import { COMPANY } from "../../static"
import { Link } from "react-router-dom"

const company = [
    COMPANY?.map((com) => (
        <div className="com_card" key={com.id}>
            <div className="img_bg">
                <img className="com_img" src={com.image} alt="img" />
            </div>
            <p className="com_title">{com.title}</p>
            <p className="com_desc">{com.description}</p>
        </div>
    ))
]
const Kompany = () => {
    return (
        <div className="company">
            <div className="company_top">
                <h2 className="company_title">Почему NORNLIGHT?</h2>
                <Link to={"/compane"}><button className="company_btn">О компании</button></Link>
            </div>
            <div className="company_bottom">
                {company}
            </div>
        </div>
    )
}

export default memo(Kompany)