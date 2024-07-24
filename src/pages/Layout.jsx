import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Layout(props) {
    console.log(props);
  return (
    <>
        <Header appState={props.appState} styles={props.styles}/>
        <Outlet/>
        <Footer/>
    </>
  )
}
