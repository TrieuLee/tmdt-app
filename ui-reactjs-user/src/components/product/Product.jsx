import React from "react";
import "./product.scss";
export default function Product() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="product">
      <img src={PF + "img/air.png"} alt="" className="productImg" />
      <div className="productDetails">
        <h1 className="productTitle">AIR FORCE</h1>
        <h2 className="productPrice">99$</h2>
        <p className="productDesc">
        Hãy để tinh thần nổi loạn của bạn tỏa sáng trong Air Force 1 Mid '07 LX. 
        Các lớp phủ da tổng hợp sắc nét, các điểm nhấn táo bạo và lượng đèn flash hoàn hảo 
        cho phép trang phục dạo phố này có một chút lợi thế. Các chi tiết biểu cảm 
        trên đế lót thêm một gợi ý về thái độ, trong khi phần đệm, cổ áo cắt ở giữa
        và phần đóng móc và vòng cổ điển mang lại sự thoải mái cho trái bóng b-ball di sản.
        </p>
        <div className="colors">
          <div className="color"></div>
          <div className="color"></div>
        </div>
        <div className="sizes">
          <div className="size">42</div>
          <div className="size">43</div>
          <div className="size">44</div>
        </div>
        <button className="productButton">MUA NGAY!</button>
      </div>
    </div>
  );
}
