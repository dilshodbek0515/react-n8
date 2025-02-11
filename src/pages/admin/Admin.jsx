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
      <div className='w-72 h-[100vh] bg-slate-600 flex flex-col items-center p-10 gap-5'>
        <NavLink
          className='block text-xl text-white'
          to={'/admin/createProduct'}
        >
          CreateProduct
        </NavLink>
        <NavLink
          className='block text-xl text-white'
          to={'/admin/manageProduct'}
        >
          ManageProduct
        </NavLink>
        <button
          className='w-full h-10 bg-slate-800 rounded-lg border text-white hover:bg-transparent hover:text-slate-800 hover:border border-slate-700 duration-500'
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(Admin)
