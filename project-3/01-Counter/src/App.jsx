import Card from "./components/Mission";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Mission from './components/Mission'
import Product from "./components/product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Mission />} path="/Mission" />
        <Route element={<Product />} path="/Product" />
      </Routes>
    </>
  );
}

export default App;
