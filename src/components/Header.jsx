import React, { useEffect, useState } from "react";
import '../style/Components/header.scss'
import Toggle from "./Toggle";
import Navigation from "./Navigation";


export default function Header(props) {
  // console.log(props);
  let [current, changeCurrent] = useState(false)
  const imgs = ["https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png", "https://static.vecteezy.com/system/resources/thumbnails/008/530/693/small_2x/white-cat-transparent-png.png"];
  
  console.log("header", props);

  return (
    <div className="header" >
      <div className="logo">
        <img
          src={imgs[Number(current)]}
          alt="sdfsd"
          className="my_img"
        />
      </div>

      <Navigation style={
        props.styles
      }  />
      
      <li>
          <Toggle newProps = {props.appState} changeCurrent={changeCurrent}></Toggle>
      </li>
    </div>
  );
}
