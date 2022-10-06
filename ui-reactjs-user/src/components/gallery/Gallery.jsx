import React from "react";
import "./gallery.scss";
export default function Gallery() {
  return (
    <div class="gallery">
      <div class="galleryItem">
        <h1 class="galleryTitle">Be Yourself!</h1>
        <img
          src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          class="galleryImg"
        />
      </div>
      <div class="galleryItem">
        <img
          src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          class="galleryImg"
        />
        <h1 class="galleryTitle">This is the First Day of Your New Life</h1>
      </div>
      <div class="galleryItem">
        <h1 class="galleryTitle">Just Do it!</h1>
        <img
          src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          class="galleryImg"
        />
      </div>
    </div>
  );
}
