import { useState } from "react"
import Model from "../../components/model/Model"
import "./Service.scss"

const Service = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="min-h-screen">

            <h2 onClick={() => setShow(true)}>Owerlay</h2>
            {
                show &&
                <Model close={setShow}>
                    <div>
                        <h2 onClick={() => setShow(false)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, dolore!</h2>
                    </div>
                </Model >
            }
        </div>
    )
}

export default Service