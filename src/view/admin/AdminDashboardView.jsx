import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'

function AdminDashboardView() {
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col overflow-hidden'>

            {/* header */}
            <Header  isLogin={''}/>

            {/* main */}
            <main className='flex-1 h-full flex flex-col'>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default AdminDashboardView