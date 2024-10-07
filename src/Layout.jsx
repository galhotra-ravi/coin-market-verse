import React from 'react'
import Nav from './Components/Header/Nav'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout