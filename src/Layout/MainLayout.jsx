import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../Pages/Nav'
import Footer from '../Pages/Footer'

const MainLayout = () => {
  return (
    <>
    <header>
        <Nav/>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default MainLayout
