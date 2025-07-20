import React from 'react'
import Header from './components/Header/Header'
import Footer  from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
