import React from "react";
import { Link } from "gatsby";
import MessengerCustomerChat from 'react-messenger-customer-chat';

import logo from "../img/TXD-logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import zalo from "../img/social/zalo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Trang chủ
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Về chúng tối
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Sản phẩm
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Liên hệ
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    {/* <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li> */}
                    <li>
                      <a className="navbar-item" target="_blank" href="https://goo.gl/maps/aQ2nTrNXwBa4inga6">
                        Địa chỉ: 039 Lô N, Chung cư Ngô Gia Tự, P2, Q10
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" target="_blank" href="#">
                        Số điện thoại: 0906646035
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" target="_blank" href="mailto:tungxaydung.1210@gmail.com">
                        Email: tungxaydung.1210@gmail.com
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/T%C3%B9ng-x%C3%A2y-d%E1%BB%B1ng-110184210682682/"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="zalo" href="tel:0906646035">
                  <img
                    className="fas fa-lg"
                    src={zalo}
                    alt="zalo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                {/* <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <MessengerCustomerChat
        pageId={110184210682682}
        appId={937368100112461}
        htmlRef="https://www.facebook.com/T%C3%B9ng-x%C3%A2y-d%E1%BB%B1ng-110184210682682"
      />
      </footer>
    );
  }
};

export default Footer;

<!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v7.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

      <!-- Your Chat Plugin code -->
      <div class="fb-customerchat"
        attribution=setup_tool
        page_id="110184210682682"
  theme_color="#FF4400"
  logged_in_greeting="Xin chào quý khách. Em có thể giúp gì cho anh/chị ạ?"
  logged_out_greeting="Xin chào quý khách. Em có thể giúp gì cho anh/chị ạ?">
      </div>
