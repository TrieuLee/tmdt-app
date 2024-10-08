import React from "react";
import "./gallery.scss";
export default function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryItem">
        <h1 className="galleryTitle">Hãy là Chính Mình!</h1>
        <img
          src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="galleryImg"
        />
      </div>
      <div className="galleryItem">
        <img
          src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="galleryImg"
        />
        <h1 className="galleryTitle">Biểu tượng cho một ngày mới!</h1>
      </div>
      <div className="galleryItem">
        <h1 className="galleryTitle">Cứ làm theo phong cách của bạn!</h1>
        <img
          src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="galleryImg"
        />
      </div>
    </div>
  );
}
