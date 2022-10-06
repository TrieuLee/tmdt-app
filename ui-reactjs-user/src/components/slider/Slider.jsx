import React from "react";
import "./slider.scss";
export default function Slider() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className="slider">
        <div className="sliderWrapper">
          <div className="sliderItem">
            <img src={PF + "img/air.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="sliderTitle">
              AIR FORCE <br /> NEW
              <br /> SEASON
            </div>
            <h2 className="sliderPrice">$119</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src={PF + "img/jordan.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="sliderTitle">
              AIR JORDAN <br /> NEW
              <br /> SEASON
            </div>
            <h2 className="sliderPrice">$149</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src={PF + "img/blazer.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="sliderTitle">
              BLAZER <br /> NEW
              <br /> SEASON
            </div>
            <h2 className="sliderPrice">$129</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src={PF + "img/crater.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="sliderTitle">
              CRATER <br /> NEW
              <br /> SEASON
            </div>
            <h2 className="sliderPrice">$139</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src={PF + "img/hippie.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="sliderTitle">
              HIPPIE <br /> NEW
              <br /> SEASON
            </div>
            <h2 className="sliderPrice">$99</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">BUY NOW!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
