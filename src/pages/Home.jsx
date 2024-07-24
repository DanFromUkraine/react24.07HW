import React, { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import "../style/Components/home.scss"
import { Link } from "react-router-dom";

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

  let [currentCount, increaseCount] = useState(0)
  

  return (
    <div className="newsPages">
      <button onClick={() => {
        increaseCount(currentCount + 1)
      }}>Ви натиснули кнопку {currentCount} разів</button>
      <h1>TOP news for u</h1>
      <div className="newsBox">
          {newsData.articles?.map(({urlToImage, title, description}) => {
            return <Link key={title} to={`news/` + title}>
            <div className="card" >
              <div className="img-wrapper">
                <img src={urlToImage} alt="" />
              </div>
              <div className="text-box">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
            </Link>
            
          })}
      </div>
    </div>

  );
}
