import React, { memo } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    const storage = JSON.parse(localStorage.getItem('storage'))
    delete storage.token
    localStorage.setItem('storage', JSON.stringify(storage))
    navigate('/')
  }
  return (
    <div className='flex'>
      <div className='w-72 h-[100vh] bg-slate-600'>
        <NavLink to={'/admin'}>Admin</NavLink>
        <NavLink className='block' to={'/admin/createProduct'}>
          CreateProduct
        </NavLink>
        <NavLink className='block' to={'/admin/manageProduct'}>
          ManageProduct
        </NavLink>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(Admin)
