import './Catalog_com.scss'
import { memo, useEffect, useState } from 'react'
import Model from '../../../components/model/Model'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { useStateValue } from '../../../context'
import { FiTrash2 } from 'react-icons/fi'
const Catalog = ({ products, admin }) => {
  const [state, dispatch] = useStateValue()
  const [item, setItem] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const productItems = products?.map(produc => (
    <div className='catalog_card' key={produc.id}>
      <div>
        <NavLink to={`/product/${produc.id}`}>
          <h3>{produc.title}</h3>
        </NavLink>
        <p className='flex items-center gap-5'>
          {produc.price} ₽
          {admin ? (
            <FiTrash2
              className='text-3xl cursor-pointer'
              onClick={() => dispatch({ type: 'REMOVE_CART', payload: produc })}
            />
          ) : (
            <>
              <button
                onClick={() => dispatch({ type: 'WISHLIST', payload: produc })}
                className='text-2xl'
              >
                {state.wishlist?.some(p => p.id === produc.id) ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>
              <button
                onClick={() => dispatch({ type: 'ADD_CART', payload: produc })}
              >
                <IoCartOutline className='text-3xl' />
              </button>
            </>
          )}
        </p>
      </div>
      <img
        onClick={() => setItem(produc)}
        className='catalog_img'
        src={produc.url}
        alt=''
      />
    </div>
  ))

  return (
    <>
      <div className='catalog'>
        <div className='catalog_collection'>{productItems}</div>
      </div>
      {item && (
        <Model close={setItem}>
          <div className='detail'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className='mySwiper'
            >
              <SwiperSlide className='slide'>
                <img className='detail_img' src={item.url} alt='detail_img' />
              </SwiperSlide>
            </Swiper>
            <div className='detail_right'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <NavLink to={`/product/${item?.id}`}>
                <button>See more</button>
              </NavLink>
            </div>
          </div>
        </Model>
      )}
    </>
  )
}

export default memo(Catalog)
