import React from "react";

const Footer = () => {
  return (
    <>
      <>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="left-side-footer">
                  <i className="fa fa-phone" />
                  <a href="tel:908-415-4530">Call Us: 908-415-4530</a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="middle-logo">
                  <a href="">
                    <img src="images/footer-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-right">
                <div className="right-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="newsletter">
                  <p>subscribe to our newsletter</p>
                  <input type="text" placeholder="Email Address" />
                  <button>
                    <img src="images/arrow-2.png" alt="arrow" />
                  </button>
                </div>
                <div className="col-md-12">
                  <div className="newsletter-menu">
                    <ul>
                      <li>
                        <a href="#">sell</a>
                      </li>
                      <li>
                        <a href="#">help</a>
                      </li>
                      <li>
                        <a href="#">careers</a>
                      </li>
                      <li>
                        <a href="#">about us</a>
                      </li>
                      <li>
                        <a href="#">policies</a>
                      </li>
                      <li>
                        <a href="#">blog</a>
                      </li>
                      <li>
                        <a href="#">contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    <p>Copyright © @2019 BEADZY .All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*footer end*/}
        <div className="overlay"></div>
      </>
    </>
  );
};

export default Footer;
