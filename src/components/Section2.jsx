import React from "react";
import { useEffect } from "react";
import "./Section2.css";
import AOS from "aos";
import "aos/dist/aos.css";


function Section2() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="section2">
      <div className="left">
        <img
          src="https://developmentalphawizz.com/html/grocery/assets/img/mobile/mobile1.png"
          alt="img"
        />
      </div>
      <div className="right">
        <span>We are Foodano</span>
        <h2>The Best Trusted</h2>
        <h3>Farms in The World</h3>
        <h4>With Love & Dedication</h4>
        <p>
          using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy. Various v
        </p>
        <div className="organic">
          <div className="organic-left">
            <i className="flaticon-eco fa-4x"></i>
            <p>100% organic</p>
          </div>
          <img
            src="https://developmentalphawizz.com/html/grocery/assets/img/about/shape-1.png"
            className="lemon"
            data-aos="fade-up"
            style={{ width: "300px", height: "auto" }}
          />
          <div className="organic-right">
            <i className="flaticon-vegetables fa-4x"></i>
            <p>Natural Foods</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
