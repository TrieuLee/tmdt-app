import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { runFireworks } from "../../style/utils";
import { BsBagCheckFill } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";

import "./COS.scss";

export default function CheckOutSuccess() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    runFireworks();
  });
  const handleClear = () => {
    const myItem = localStorage.getItem("user", user);
    localStorage.clear();

    localStorage.setItem("user", myItem);
    navigate(`/`);
    window.location.reload();
  };
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Cảm ơn bạn đã lựa chọn sản phẩm của .sneaker</h2>
        <p className="email-msg">Hóa đơn sẽ được gửi vào Email của bạn.</p>
        <p className="description">
          Nếu bạn có thắc mắc về sản phẩm của chúng tôi, liên hệ vào
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <button
          onClick={handleClear}
          type="button"
          width="300px"
          className="btn"
        >
          Tiếp tục mua sắm
        </button>
      </div>
    </div>
  );
}
