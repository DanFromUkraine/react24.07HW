import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { style_data } from './utils/style_data';

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
    <div className="App" style={
      my_style
    }>        
      <Header appState={setAppState} />
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
