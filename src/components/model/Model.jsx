import { memo, useEffect } from "react"
import "./Model.scss"

const Model = ({ children, close }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])
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