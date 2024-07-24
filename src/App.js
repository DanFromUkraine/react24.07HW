import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Contacts from "./pages/Contacts";
import { style_data } from "./utils/style_data";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NewsDetails from "./pages/NewsDetails";

console.log(style_data);

function App() {
  const [appState, setAppState] = useState(false);
  console.log(appState);

  let my_style;

  if (appState) {
    my_style = style_data.dark;
    console.log(my_style);
  } else {
    my_style = style_data.light;
  }
  console.log(my_style);
  return (
    <div className="App" style={my_style}>

      <Routes>
        <Route path="/" element={<Layout appState={setAppState} styles={my_style}/>}>
          <Route index element={<Home />} />
          <Route path="price" element={<Price />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/news/:title" element={<NewsDetails/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
