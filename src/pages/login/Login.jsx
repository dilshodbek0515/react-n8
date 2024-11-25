import { useRef } from 'react'
import './Login.scss'
import axios from 'axios'
import { useStateValue } from '../../context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, dispatch] = useStateValue()
  const navigate = useNavigate()

  const username = useRef(null)
  const password = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    let user = {
      username: username.current.value,
      password: password.current.value
    }

    axios
      .post('https://dummyjson.com/auth/login', user)
      .then(res => {
        dispatch({ type: 'ADD_TOKEN', payload: res.data.accessToken })
        navigate('/admin/createProduct')
      })
      .catch(err => alert('username or password is incorret'))
      .finally()
  }
  return (
    <div className='login_container'>
      <form onSubmit={handleSubmit} action='' className='login_forma'>
        <input ref={username} type='text' placeholder='username' />
        <input ref={password} type='password' placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
