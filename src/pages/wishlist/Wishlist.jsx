import './Wishlist.scss'
import Catalog_com from '../catalog/catalog_com/Catalog_com'
import axios from 'axios'
import { memo, useEffect, useState } from 'react'
const BASE_URL = 'https://672f3e4f229a881691f24b98.mockapi.io'

const Wishlist = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <Catalog_com products={products} />
    </div>
  )
}

export default memo(Wishlist)
