import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation(props) {
    console.log("nav", props);
  return (
    <ul className="nav" >
        <li> 
          <NavLink to= "/" style={{color: props.style.color}}>
            Home
          </NavLink> 
        </li>
        <li>
          <NavLink to= "/price" style={{color: props.style.color}}>
            Price
          </NavLink> 
          </li>
        <li>
          <NavLink to= "/contacts" style={{color: props.style.color}}>
            Contacts
          </NavLink> 
          </li>
        <li className="cart_img">
            <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="Cart" />
        </li>
      </ul>
  )
}
