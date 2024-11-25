import { Outlet, Navigate } from 'react-router-dom'
import './Auth.scss'
import { useStateValue } from '../../context'

const Auth = () => {
  const [state, dispatch] = useStateValue()
  const user = state.token
  return user ? <Outlet /> : <Navigate replace to={'/login'} />
}

export default Auth
