import React, { memo } from 'react'
import { useStateValue } from '../../context'
import Catalog_com from "../catalog/catalog_com/Catalog_com"
import { Link } from 'react-router-dom'

const Heart = () => {
    const [state, dispatch] = useStateValue()

    return (
        <div>
            {
                state.wishlist.length === 0
                    ?
                    <div className='max-w-[1400px] h-[auto] mx-auto flex items-center justify-center flex-col gap-20'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEmhD7q6VJTPvvSEpcc3pQlF1esGAGw7kyA&s" alt="img" />
                        <Link
                            to={"/catalog"}
                        >
                            <button
                                className='text-white border text-3xl px-10 py-2 bg-gray-600 rounded-3xl hover:text-gray-600 hover:border border-gray-600 hover:bg-white'
                            >
                                Go Home
                            </button>
                        </Link>
                    </div>
                    :
                    <Catalog_com products={state.wishlist} />
            }
        </div>
    )
}

export default memo(Heart)