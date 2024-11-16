import React, { memo, useEffect } from 'react'
import Tovar_p from "../../components/tovar/Tovar"
const Tovar_page = () => {
    useEffect(() => {
        scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Tovar_p />
        </div>
    )
}

export default memo(Tovar_page)