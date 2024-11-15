import React, { memo } from 'react'
import Catalog_brend from "./catalog_brend/Catalog_brend"
import Catalog_blog from "./catalog_blog/Catalog_blog"
import Wishlist from '../wishlist/Wishlist'
const Catalog = () => {
    return (
        <div>
            <Wishlist />
            <Catalog_brend />
            <Catalog_blog />
        </div>
    )
}

export default memo(Catalog)