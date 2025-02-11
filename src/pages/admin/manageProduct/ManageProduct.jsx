import './ManageProduct.scss'
import { useFetch } from '../../../hook/useFetch'
import Wishlist from '../../wishlist/Wishlist'
import Loading from '../../../components/loading/Loading'
import { useStateValue } from '../../../context'
const ManageProduct = () => {
  
    const [state] = useStateValue()
  const { data: products } = useFetch('products', {}, [state.reload])
  
  return (
    <div>
      <div className='mt-[-200px]'>
        {products ? (
          <Wishlist products={products} admin={true} />
        ) : (
          <p>
            <Loading />
          </p>
        )}
      </div>
    </div>
  )
}

export default ManageProduct
