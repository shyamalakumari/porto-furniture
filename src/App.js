import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar"
import Navbarr from "./components/navbar2";
import Banner from "./components/banner";
import Products from "./components/products";
import Banner2 from "./components/banner2";
import Banner3 from "./components/banner3";
// import Banner5 from "./components/banner5";
// import Banner6 from "./components/banner6";
import Banner7 from "./components/banner7";

import Footer  from "./components/footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Navbarr/>
    <Banner/>
  < Banner2/>
    <Products/>
    <Banner3 />
    {/* <Banner5 /> */}
    {/* <Banner6/> */}
    <Banner7/>
    <Footer/>
    </div>
  );
}

export default App;
