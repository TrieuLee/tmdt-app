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
              AIR FORCE <br /> PHIÊN BẢN
              <br /> MỚI
            </div>
            <h2 className="sliderPrice">99$</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">MUA NGAY!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src={PF + "img/jordan.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="sliderTitle">
              AIR JORDAN <br /> 1 HIGH OG
              <br /> 
            </div>
            <h2 className="sliderPrice">79$</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">MUA NGAY!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src={PF + "img/blazer.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="sliderTitle">
              BLAZER <br /> PHIÊN BẢN
              <br /> MỚI
            </div>
            <h2 className="sliderPrice">3.299.000Đ</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">MUA NGAY!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src={PF + "img/crater.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="sliderTitle">
              CRATER <br /> PHIÊN BẢN
              <br /> MỚI
            </div>
            <h2 className="sliderPrice">3.459.000Đ</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">MUA NGAY!</button>
            </a>
          </div>
          <div className="sliderItem">
            <img src={PF + "img/hippie.png"} alt="" className="sliderImg" />
            <div className="sliderBg"></div>
            <div className="serTitle">
              HIPPIE <br /> PHIÊN BẢN
              <br /> MỚI
            </div>
            <h2 className="sliderPrice">2.459.000Đ</h2>
            <a href="#product" className="sliderLink">
              <button className="buyButton">MUA NGAY!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
