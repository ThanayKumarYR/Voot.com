import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import foocss from "../assets/css/components/Footer.module.css";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import appstore from "../assets/images/appstore.svg";
import googleplay from "../assets/images/googleplay.svg";
import firetv from "../assets/images/firetv.png";
import Logo from "./Logo";
const Footer = () => {
  const handleshow = (id) => {
    document.getElementById(id).checked = true;
  };
  return (
    <div className={foocss.footer}>
      <div className={foocss.footerTop}>
        <div className={foocss.fooLinks}>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div>
            <ul>
              <h3 onClick={() => handleshow("pageradio")}>
                <span>Key Pages</span>
                <input type="radio" name="show" id="pageradio" />
              </h3>
              <li>
                <NavLink to="/">My Voot</NavLink>
              </li>
              <li>
                <NavLink to="/Premium">Premium</NavLink>
              </li>
              <li>
                <NavLink to="/Sports">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/Shows">Shows</NavLink>
              </li>
              <li>
                <NavLink to="/Movies">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/Kids">Kids</NavLink>
              </li>
              <li>
                <NavLink to="/Channels">Channels</NavLink>
              </li>
            </ul>
            <ul>
              <h3 onClick={() => handleshow("legalradio")}>
                <span>Legal</span>
                <input type="radio" name="show" id="legalradio" />
              </h3>
              <li>
                <a href="https://help.voot.com/about-us" target="__blank" >About Us</a>
              </li>
              <li>
                <a href="https://help.voot.com/terms-of-use" target="__blank" >Terms of Use</a>
              </li>
              <li>
                <a href="https://help.voot.com/privacy-policy" target="__blank" >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://help.voot.com/content-complaints" target="__blank" >
                  Content Complaints
                </a>
              </li>
            </ul>
            <ul>
              <h3 onClick={() => handleshow("supportradio")}>
                <span>Support</span>
                <input type="radio" name="show" id="supportradio" />
              </h3>
              <li>
                <a href="https://help.voot.com/" target="__blank" >FAQs</a>
              </li>
              <li>
                <a href="https://help.voot.com/hc/en-us#contactUs" target="__blank" >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={foocss.fooDownloads}>
          <h3>Download</h3>
          <p>Download our mobile app for your tablet and mobile!</p>
          <div>
            <a href="https://itunes.apple.com/in/app/voot/id1011777157?mt=8" target="__blank" >
              <img src={appstore} alt="appstore" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.tv.v18.viola" target="__blank" >
              <img src={googleplay} alt="googleplay" />
            </a>
            <a href="http://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Dmobile-apps&field-keywords=voot%20tv" target="__blank" >
              <img src={firetv} alt="firetvF" />
            </a>
          </div>
        </div>
      </div>
      <div className={foocss.footerBottom}>
        <div>
          <a href="https://www.facebook.com/voot/" target="__blank" >
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com/justvoot" target="__blank" >
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/channel/UCFHhFwEdsLs2wuvh1YdChHw" target="__blank" >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <p>Viacom 18 Media Pvt. Ltd @ 2022. All Rights Reserved</p>
      </div>
      <Outlet/>
    </div>
  );
};

export default Footer;
