import React from "react";
import "./footer.scss";
export default function Footer() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <footer className="footer">
      <div class="footerLeft">
        <div class="footerMenu">
          <h1 class="fMenuTitle">About Us</h1>
          <ul class="fList">
            <li class="fListItem">Company</li>
            <li class="fListItem">Contact</li>
            <li class="fListItem">Careers</li>
            <li class="fListItem">Affiliates</li>
            <li class="fListItem">Stores</li>
          </ul>
        </div>
        <div class="footerMenu">
          <h1 class="fMenuTitle">Useful Links</h1>
          <ul class="fList">
            <li class="fListItem">Support</li>
            <li class="fListItem">Refund</li>
            <li class="fListItem">FAQ</li>
            <li class="fListItem">Feedback</li>
            <li class="fListItem">Stories</li>
          </ul>
        </div>
        <div class="footerMenu">
          <h1 class="fMenuTitle">Products</h1>
          <ul class="fList">
            <li class="fListItem">Air Force</li>
            <li class="fListItem">Air Jordan</li>
            <li class="fListItem">Blazer</li>
            <li class="fListItem">Crater</li>
            <li class="fListItem">Hippie</li>
          </ul>
        </div>
      </div>
      <div class="footerRight">
        <div class="footerRightMenu">
          <h1 class="fMenuTitle">Subscribe to our newsletter</h1>
          <div class="fMail">
            <input type="text" placeholder="your@email.com" class="fInput" />
            <button class="fButton">Join!</button>
          </div>
        </div>
        <div class="footerRightMenu">
          <h1 class="fMenuTitle">Follow Us</h1>
          <div class="fIcons">
            <img src={PF + "icon/facebook.png"} alt="" class="fIcon" />
            <img src={PF + "icon/twitter.png"} alt="" class="fIcon" />
            <img src={PF + "icon/instagram.png"} alt="" class="fIcon" />
            <img src={PF + "icon/whatsapp.png"} alt="" class="fIcon" />
          </div>
        </div>
        <div class="footerRightMenu">
          <span class="copyright">@Lama Dev. All rights reserved. 2022.</span>
        </div>
      </div>
    </footer>
  );
}
