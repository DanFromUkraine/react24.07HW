import React, { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import "../style/Components/home.scss"

export default function Home() {
  const [newsData, setNewsData] = useState([]);
  console.log(newsData);
  const fetchData = () => {
    getData("Cats").then((res) => {
      console.log("res" , res);
      setNewsData(res);
    });
  };

  useEffect(() => { fetchData()}, []);

  return (
    <div className="newsPages">
      <button>Ви натиснули кнопку 0 разів</button>
      <h1>TOP news for u</h1>
      <div className="newsBox">
          {newsData.articles?.map(({urlToImage, title, description}) => {
            return <div className="card" key={title}>
              <div className="img-wrapper">
                <img src={urlToImage} alt="" />
              </div>
              <div className="text-box">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          })}
      </div>
    </div>

  );
}
