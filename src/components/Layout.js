import React from 'react'
import Menu from './Menu'
import { Outlet } from 'react-router'
import Aside from './Aside'

const Layout = () => {
    return (
        <div className="row g-0">
            <div className='col-xl-3 col-lg-1 col-2 border-end h-100'>
                <Menu />
            </div>
            <div className='col-xl-5 col-lg-7 col-10 border-end border-start'>
                <Outlet />
            </div>
            <div className='col-xl-3 col-lg-4 d-lg-block d-none'>
                <Aside />
            </div>
        </div>
    )
}

export default Layout