import React from "react";
import foocss from "../assets/css/components/Footer.module.css";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import appstore from "../assets/images/appstore.svg"
import googleplay from "../assets/images/googleplay.svg"
import firetv from "../assets/images/firetv.png"
import Logo from "./Logo";
const Footer = () => {
  const handleshow = (id)=>{
    document.getElementById(id).checked = true;
  }
  return (
    <div className={foocss.footer}>
      <div className={foocss.footerTop}>
        <div className={foocss.fooLinks}>
          <Logo />
          <div>
            <ul>
              <h3 onClick={()=>handleshow("pageradio")}><span>Key Pages</span><input type="radio" name="show" id="pageradio"/></h3>
              <li>My Voot</li>
              <li>Premium</li>
              <li>Sports</li>
              <li>Shows</li>
              <li>Movies</li>
              <li>Kids</li>
              <li>Channels</li>
            </ul>
            <ul>
              <h3 onClick={()=>handleshow("legalradio")}><span>Legal</span><input type="radio" name="show" id="legalradio"/></h3>
              <li>About Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Content Complaints</li>
            </ul>
            <ul>
              <h3 onClick={()=>handleshow("supportradio")}><span>Support</span><input type="radio" name="show" id="supportradio"/></h3>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={foocss.fooDownloads}>
          <h3>Download</h3>
          <p>Download our mobile app for your tablet and mobile!</p>
          <div>
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
            <img src={firetv} alt="firetvF" />
          </div>
        </div>
      </div>
      <div className={foocss.footerBottom}>
        <div>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
        <p>Viacom 18 Media Pvt. Ltd @ 2022. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
