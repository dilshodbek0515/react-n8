import { memo } from "react"
import "./Model.scss"

const Model = ({ children, close }) => {
    return (
        <div className="model">
            <div
                onClick={() => close(false)}
                className="model_owerlay"
            >

            </div>
            <div className="model_content">
                {
                    children
                }
            </div>
        </div>
    )
}

export default memo(Model)