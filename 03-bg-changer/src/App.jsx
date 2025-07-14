import React, { useState } from "react";
import "./App.css";

function App() {
  let [color, setcolor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-full">
        <button className="outline-none px-4 py-1 rounded-3xl  text-white shadow-sm" onClick={()=>setcolor("red")} style={{backgroundColor: "red"}}>Red</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-white shadow-sm"onClick={()=>setcolor("Green")} style={{backgroundColor: "Green"}}>Green</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-white shadow-sm" onClick={()=>setcolor("blue")} style={{backgroundColor: "Blue"}}>Blue</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-white shadow-sm" onClick={()=>setcolor("Orange")} style={{backgroundColor: "orange"}}>Orange</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-white shadow-sm" onClick={()=>setcolor("grey")} style={{backgroundColor: "grey"}}>grey</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-black shadow-sm" onClick={()=>setcolor("yellow")} style={{backgroundColor: "yellow"}}>yellow</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-white shadow-sm" onClick={()=>setcolor("pink")} style={{backgroundColor: "pink"}}>pink</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-white shadow-sm" onClick={()=>setcolor("purple")} style={{backgroundColor: "purple"}}>purple</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-black shadow-sm" onClick={()=>setcolor("lavender")} style={{backgroundColor: "lavender"}}>lavender</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-black shadow-sm" onClick={()=>setcolor("white")} style={{backgroundColor: "white"}}>white</button>
        <button className="outline-none px-4 py-1 rounded-3xl  text-white shadow-sm" onClick={()=>setcolor("black")} style={{backgroundColor: "black"}}>black</button>
      </div></div>
    </>
  );
}

export default App;
