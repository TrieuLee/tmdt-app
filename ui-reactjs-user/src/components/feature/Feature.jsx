import React from "react";
import "./feature.scss";
export default function Feature() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="features">
      <div className="feature">
        <img src={PF + "icon/shipping.png"} alt="" className="featureIcon" />
        <span className="featureTitle">MIỄN PHÍ VẬN CHUYỂN</span>
        <span className="featureDesc">
          Miễn phí vận chuyển đặt hàng trong nước.
        </span>
      </div>
      <div className="feature">
        <img src={PF + "icon/return.png"} alt="" className="featureIcon" />
        <span className="featureTitle">HOẢN TRẢ TRONG 30 NGÀY</span>
        <span className="featureDesc">
          Hoàn trả lại dễ dàng trong 30 ngày .
        </span>
      </div>
      <div className="feature">
        <img src={PF + "icon/gift.png"} alt="" className="featureIcon" />
        <span className="featureTitle">THẺ QUÀ TẶNG</span>
        <span className="featureDesc">
        Mua thẻ quà tặng và sử dụng mã phiếu giảm giá dễ dàng.
        </span>
      </div>
      <div className="feature">
        <img src={PF + "icon/contact.png"} alt="" className="featureIcon" />
        <span className="featureTitle">LIÊN HỆ VỚI CHÚNG TÔI!</span>
        <span className="featureDesc">
        Giữ liên lạc qua email và hệ thống hỗ trợ.
        </span>
      </div>
    </div>
  );
}
