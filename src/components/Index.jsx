import React from "react";

const Index = () => {
  return (
    <>
      <>
        <div className="container main-banner">
          <div className="row no-margin">
            <div className="col-md-4 boxes box-1">
              <div className="banner-box-text">
                <h2>lorem ipsum dolor sit amet cnsecteture</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
                </p>
                <a href="#">
                  shop now <img src="images/arrow.png" alt="listing" />
                </a>
              </div>
            </div>
            <div className="col-md-4 boxes box-2">
              <div className="banner-box-text">
                <h2>handcrafted jewellery</h2>
                <p>lorem ipsum dolor sit amet.</p>
                <a href="#">
                  open your online store{" "}
                  <img src="images/arrow.png" alt="listing" />
                </a>
              </div>
            </div>
            <div className="col-md-4 boxes box-3">
              <div className="banner-box-text">
                <h2>lorem ipsum dolor sit amet cnsecteture</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.
                </p>
                <a href="#">
                  shop now <img src="images/arrow.png" alt="beadzy" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*banner end*/}
        {/*best seller start*/}
        <div className="best-seller-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading">Best sellers</h2>
              </div>
              <div className="col-md-12">
                <div className="best-seller">
                  {/* Swiper */}
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="slider-section">
                          <img src="images/best-seller-1.png" alt="beadzy" />
                          <h6>Melissa Cooper</h6>
                          <p>Total Product: 21</p>
                          <p>
                            <i className="fa fa-map-marker" />
                            United State
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section">
                          <img src="images/best-seller-2.png" alt="beadzy" />
                          <h6>Fred Rodriguez</h6>
                          <p>Total Product: 21</p>
                          <p>
                            <i className="fa fa-map-marker" />
                            United State
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section">
                          <img src="images/best-seller-3.png" alt="beadzy" />
                          <h6>Elly Banguet</h6>
                          <p>Total Product: 21</p>
                          <p>
                            <i className="fa fa-map-marker" />
                            United State
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section">
                          <img src="images/best-seller-4.png" alt="beadzy" />
                          <h6>Martin Sati</h6>
                          <p>Total Product: 21</p>
                          <p>
                            <i className="fa fa-map-marker" />
                            United State
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section">
                          <img src="images/best-seller-5.png" alt="beadzy" />
                          <h6>Shrey Torqon</h6>
                          <p>Total Product: 21</p>
                          <p>
                            <i className="fa fa-map-marker" />
                            United State
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next swiper-button-next1" />
                  <div className="swiper-button-prev swiper-button-prev1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*best seller end*/}
        {/*Open your store start*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="open-your-store-bg">
                <div className="open-your-store-text">
                  <h2>Open your store</h2>
                  <p>
                    Lorem Ipsum sit amet consecteture adipiscing elit sed do
                    eiusmod temor incididunt ut labore et dolore manga aliqua
                    tenimax
                  </p>
                  <a href="#">
                    get started with us{" "}
                    <img src="images/arrow.png" alt="beadzy" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Open your store end*/}
        {/*secound slider start*/}
        <div className="free-pattern-slider">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading">free patterns</h2>
              </div>
              <div className="col-md-12">
                <div className="free-pattern">
                  <div className="swiper-container free-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <img src="images/free-1.png" alt="beadzy" />
                          <p>rhinestones</p>
                          <b>$58.00</b>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <img src="images/free-2.png" alt="beadzy" />
                          <p>Charms</p>
                          <b>$90.00</b>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <img src="images/free-3.png" alt="beadzy" />
                          <p>Chains</p>
                          <b>$59.00</b>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <img src="images/free-4.png" alt="beadzy" />
                          <p>Finished Earings</p>
                          <b>$123.00</b>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <img src="images/free-5.png" alt="beadzy" />
                          <p>Books &amp; Videos</p>
                          <b>$99.00</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next swiper-button-next2" />
                  <div className="swiper-button-prev swiper-button-prev2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*secound slider end*/}
        {/*Third slider start*/}
        <div className="top-categories-slider">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading">top categories</h2>
              </div>
              <div className="col-md-12">
                <div className="top-silder">
                  <div className="swiper-container free-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <div className="top-categories">
                            <img src="images/top-1.png" alt="beadzy" />
                            <span>QUICK VIEW</span>
                          </div>
                          <p>jewellery</p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <div className="top-categories">
                            <img src="images/top-2.png" alt="beadzy" />
                            <span>QUICK VIEW</span>
                          </div>
                          <p>clothing</p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <div className="top-categories">
                            <img src="images/top-3.png" alt="beadzy" />
                            <span>QUICK VIEW</span>
                          </div>
                          <p>crafts</p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <div className="top-categories">
                            <img src="images/top-4.png" alt="beadzy" />
                            <span>QUICK VIEW</span>
                          </div>
                          <p>toys</p>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="slider-section free-border">
                          <div className="top-categories">
                            <img src="images/top-5.png" alt="beadzy" />
                            <span>QUICK VIEW</span>
                          </div>
                          <p>home &amp; livings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next swiper-button-next3" />
                <div className="swiper-button-prev swiper-button-prev3" />
              </div>
            </div>
          </div>
        </div>
        {/*Third slider end*/}
        {/*community section start*/}
        <div className="community-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading color">
                  Join our community of over 25,000 designer
                </h2>
              </div>
              <div className="col-md-4">
                <div className="join-box">
                  <h4>gain visibility</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="join-box">
                  <h4>support independent creators</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="join-box">
                  <h4>sell now</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <a href="" className="main-button">
                  open your shop <img src="images/arrow.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*community section end*/}
        {/*coustomer love start*/}
        <div className="coustomer-love-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading">coustomer love</h2>
              </div>
              <div className="col-md-12">
                {/* Swiper */}
                <div className="swiper-container lover-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="coustomer-love">
                        <img src="images/love.png" alt="beadzy" />
                        <p>
                          I'am so happy l've found this lovely brand. As sooon
                          as I started wearing Wanderlust Life I pretty much
                          stopped wearing any of my other jewellery! I lovethat
                          my Spinel necklace has been everywhere with me, from
                          surfing trips surfing trips to yoga classer. It's
                          great to be able to wear something whilst being
                          active. Thank you Wanderlust Life!
                        </p>
                        <label>
                          Ashley,<span>New York</span>
                        </label>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="coustomer-love">
                        <img src="images/love.png" alt="beadzy" />
                        <p>
                          I'am so happy l've found this lovely brand. As sooon
                          as I started wearing Wanderlust Life I pretty much
                          stopped wearing any of my other jewellery! I lovethat
                          my Spinel necklace has been everywhere with me, from
                          surfing trips surfing trips to yoga classer. It's
                          great to be able to wear something whilst being
                          active. Thank you Wanderlust Life!
                        </p>
                        <label>
                          Ashley,<span>New York</span>
                        </label>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="coustomer-love">
                        <img src="images/love.png" alt="beadzy" />
                        <p>
                          I'am so happy l've found this lovely brand. As sooon
                          as I started wearing Wanderlust Life I pretty much
                          stopped wearing any of my other jewellery! I lovethat
                          my Spinel necklace has been everywhere with me, from
                          surfing trips surfing trips to yoga classer. It's
                          great to be able to wear something whilst being
                          active. Thank you Wanderlust Life!
                        </p>
                        <label>
                          Ashley,<span>New York</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Add Pagination */}
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*coustomer love end*/}
        {/*Brand section start*/}
        <div className="brand-border">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="brand-list">
                  <ul>
                    <li>
                      <img src="images/brand-1.png" alt="brand" />
                    </li>
                    <li>
                      <img src="images/brand-2.png" alt="brand" />
                    </li>
                    <li>
                      <img src="images/brand-3.png" alt="brand" />
                    </li>
                    <li>
                      <img src="images/brand-4.png" alt="brand" />
                    </li>
                    <li>
                      <img src="images/brand-5.png" alt="brand" />
                    </li>
                    <li>
                      <img src="images/brand-6.png" alt="brand" />
                    </li>
                    <li>
                      <img src="images/brand-7.png" alt="brand" />
                    </li>
                    <li>
                      <img src="images/brand-8.png" alt="brand" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Index;
