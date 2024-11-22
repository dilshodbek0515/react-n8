import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Admin = () => {
    return (
        <div className='flex'>
            <div className='w-72 h-[100vh] bg-slate-600'>
                <NavLink to={"/admin"}>Admin</NavLink>
                <NavLink className="block" to={"/admin/createProduct"}>CreateProduct</NavLink>
                <NavLink className="block" to={"/admin/manageProduct"}>ManageProduct</NavLink>
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div >
    )
}

export default memo(Admin)