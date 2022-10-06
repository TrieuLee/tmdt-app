import React from "react";
import "./feature.scss";
export default function Feature() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="features">
      <div className="feature">
        <img src={PF + "icon/shipping.png"} alt="" className="featureIcon" />
        <span className="featureTitle">FREE SHIPPING</span>
        <span className="featureDesc">
          Free worldwide shipping on all orders.
        </span>
      </div>
      <div className="feature">
        <img src={PF + "icon/return.png"} alt="" className="featureIcon" />
        <span className="featureTitle">30 DAYS RETURN</span>
        <span className="featureDesc">
          No question return and easy refund in 14 days.
        </span>
      </div>
      <div className="feature">
        <img src={PF + "icon/gift.png"} alt="" className="featureIcon" />
        <span className="featureTitle">GIFT CARDS</span>
        <span className="featureDesc">
          Buy gift cards and use coupon codes easily.
        </span>
      </div>
      <div className="feature">
        <img src={PF + "icon/contact.png"} alt="" className="featureIcon" />
        <span className="featureTitle">CONTACT US!</span>
        <span className="featureDesc">
          Keep in touch via email and support system.
        </span>
      </div>
    </div>
  );
}
