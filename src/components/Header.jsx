import React from "react";
import '../style/Components/header.scss'
import Toggle from "./Toggle";


export default function Header(props) {
  console.log(props);
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png"
          alt="sdfsd"
        />
      </div>
      <ul className="nav">
        <li>Home</li>
        <li>Marketplace</li>
        <li className="cart_img">
            <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="Cart" />
        </li>
        <li>
          <Toggle newProps = {props.appState} ></Toggle>
        </li>
      </ul>
    </div>
  );
}
