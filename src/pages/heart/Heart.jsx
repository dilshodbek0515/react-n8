import React, { memo } from 'react'
import { useStateValue } from '../../context'
import Catalog_com from "../catalog/catalog_com/Catalog_com"
import { Link } from 'react-router-dom'

const Heart = ({ language }) => {
    const [state, dispatch] = useStateValue()

    return (
        <div className='mt-52'>
            {
                state.wishlist.length === 0
                    ?
                    <div className='max-w-[1400px] h-[auto] mx-auto flex items-center justify-center flex-col gap-20'>
                        <img className='w-80' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-wishlist-illustration-download-in-svg-png-gif-file-formats--online-shop-store-shopping-site-ecommerce-marketplace-states-pack-windows-interface-illustrations-9824483.png?f=webp" alt="img" />
                        <Link
                            to={"/catalog"}
                        >
                            <button
                                className='text-white border text-xl px-10 py-2 bg-gray-600 rounded-3xl hover:text-gray-600 hover:border border-gray-600 hover:bg-white'
                            >
                                {language === "RU" ? "Иди Главная" : "Go Home"}
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