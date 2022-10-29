import React from "react";
import "./footer.scss";
export default function Footer() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <footer className="footer">
      <div className="footerLeft">
        <div className="footerMenu">
          <h1 className="fMenuTitle">Về chúng tôi</h1>
          <ul className="fList">
            <li className="fListItem">Công ty</li>
            <li className="fListItem">Liên hệ</li>
            <li className="fListItem">Sự nghiệp</li>
            <li className="fListItem">Chi nhánh</li>
            <li className="fListItem">Cửa hàng</li>
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Liên kết người dùng</h1>
          <ul className="fList">
            <li className="fListItem">Hỗ trợ</li>
            <li className="fListItem">Hoàn tiền</li>
            <li className="fListItem">Đặt câu hỏi</li>
            <li className="fListItem">Thông tin phản hồi</li>
            <li className="fListItem">Cửa hàng</li>
          </ul>
        </div>
        <div className="footerMenu">
          <h1 className="fMenuTitle">Sản phẩm</h1>
          <ul className="fList">
            <li className="fListItem">Air Force</li>
            <li className="fListItem">Air Jordan</li>
            <li className="fListItem">Blazer</li>
            <li className="fListItem">Crater</li>
            <li className="fListItem">Hippie</li>
          </ul>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Đăng ký Email để nhận ưu đãi sớm nhất</h1>
          <div className="fMail">
            <input type="text" placeholder="@email.com" className="fInput" />
            <button className="fButton">Tham gia!</button>
          </div>
        </div>
        <div className="footerRightMenu">
          <h1 className="fMenuTitle">Theo dõi chúng tôi</h1>
          <div className="fIcons">
            <img src={PF + "icon/facebook.png"} alt="" className="fIcon" />
            <img src={PF + "icon/twitter.png"} alt="" className="fIcon" />
            <img src={PF + "icon/instagram.png"} alt="" className="fIcon" />
            <img src={PF + "icon/whatsapp.png"} alt="" className="fIcon" />
          </div>
        </div>
        <div className="footerRightMenu">
          <span className="copyright">Lương Trần Thiên Phúc - 19DH110031</span>
        </div>
        <div className="footerRightMenu">
          <span className="copyright">Huỳnh Anh Kiệt - 19DH110891</span>
        </div>
        <div className="footerRightMenu">
          <span className="copyright">Lê Hải Triều - 19DH111098</span>
        </div>
      </div>
    </footer>
  );
}
