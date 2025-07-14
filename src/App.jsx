import React from "react";
import Header from "../../project-3/src/components/Header";
import Section2 from "../../project-3/src/components/Section2";
import Footer from "./components/Footer";
import "./App.css";
import Section5 from "./components/Section5";
import SwiperBanner from "./components/Swiperbanner";
import GrocerySteps from "./components/GrocerySteps";



const App = () => {
  return (
    <>
      <Header />
      <Section2 />
      <SwiperBanner/>
      <GrocerySteps/>
      <Section5 />
      <Footer/>
    </>
  );
};

export default App;
