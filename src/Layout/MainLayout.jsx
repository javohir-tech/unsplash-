import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../Components'

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
