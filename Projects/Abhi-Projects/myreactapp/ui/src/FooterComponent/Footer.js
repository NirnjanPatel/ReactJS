import './Footer.css';
import React, { useEffect, useState } from 'react';



function Footer() {

  const [footer, setFooter] = useState();
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("role") == "admin" || localStorage.getItem("role") == "user") {
        setFooter(
          <div class="copyright">
            <div class="container">
              <p>Copyright © RoomRent.com, All Right Reserved. <a href="https://html.design/">Designed By Abhishek
                Dangi
              </a>
              </p>
            </div>
          </div>
        )
      }
      else {
        setFooter(
          <div>
            <div class="footer ">
              <div class="container">
                <div class="row">

                  <div class="col-md-12">
                    <form class="news">
                      <input class="newslatter" placeholder="Email" type="text" name=" Email" />
                      <button class="submit">Subscribe</button>
                    </form>
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                    <div class="row">
                      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 ">
                        <div class="address">
                          <h3>office Contact</h3>
                          <ul class="loca">
                            <li>
                              <a href="#"><img src="icon/loc.png" alt="#" /></a>X Street
                              <br />India
                            </li>
                            <li>
                              <a href="#"><img src="icon/email.png" alt="#" /></a>info@gmail.com
                            </li>
                            <li>
                              <a href="#"><img src="icon/call.png" alt="#" /></a> 000 000 0000
                            </li>
                          </ul>
                          <ul class="social_link">
                            <li><a href="#"><img src="icon/fb.png" /></a></li>
                            <li><a href="#"><img src="icon/tw.png" /></a></li>
                            <li><a href="#"><img src="icon/lin(2).png" /></a></li>
                            <li><a href="#"><img src="icon/instagram.png" /></a></li>
                          </ul>

                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="address">
                          <h3>Service Areas</h3>
                          <ul class="Menu_footer">
                            <li class="active"> <a href="#">Search Property</a> </li>
                            <li><a href="#">Brokrage Free</a> </li>
                            <li><a href="#">Search Best</a> </li>
                            <li><a href="#">Different Locations</a> </li>
                            <li><a href="#">Propery Comparison</a> </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="address">
                          <h3>Useful Pages</h3>
                          <ul class="Links_footer">
                            <li class="active"><a href="#">About Us</a> </li>
                            <li><a href="#">Contact Us</a> </li>
                            <li><a href="#">Our Team </a> </li>
                            <li><a href="#"> Testimonial</a> </li>
                            <li><a href="#">Leadership</a> </li>
                          </ul>
                        </div>
                      </div>

                      <div class="col-lg-3 col-md-6 col-sm-6 ">
                        <div class="address">
                          <h3>Newsletter</h3>
                          <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare
                            velit non vulpu</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div class="copyright">
                <div class="container">
                  <p>Copyright © RoomRent.com, All Right Reserved. <a href="https://html.design/">Designed By Abhishek
                    Dangi
                  </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }, 2000);
  }, [])

  return (
    <div>
      {footer}
    </div>
  );
}

export default Footer;