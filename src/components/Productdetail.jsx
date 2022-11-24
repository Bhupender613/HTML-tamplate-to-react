import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Context from "./Createcontextdata";
import axios from "axios";

const Productdetail = () => {
  let set = useContext(Context);

  const navigate = useNavigate();
  let [data, setdata] = useState("");
  let [error, seterror] = useState("");
  useEffect(() => {
    axios
      .get(set.url)
      .then((res) => setdata(res.data))
      .catch((error) => seterror(error));
  }, [set.url]);

  if (error === "") {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-detail">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/List">Products</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      {data.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <>
              <div className="col-md-5">
                <div className="detail-slider">
                  <div className="swiper-container gallery-top">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src={data.image} />
                      </div>
                    </div>
                    {/* Add Arrows */}
                    <div className="swiper-button-next swiper-button-white" />
                    <div className="swiper-button-prev swiper-button-white" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="detail-wishlist">
                  <i className="fa fa-heart" />
                  <a href="#">Add to Wishlist</a>
                  <h2 className="heading">{data.title}</h2>
                  <b>${data.price}</b>

                  <div className="detail-form">
                    <form>
                      <select>
                        <option>Select color</option>
                        <option>currency</option>
                        <option>currency</option>
                        <option>currency</option>
                      </select>
                    </form>
                    <button>-</button>
                    <input type="text" placeholder={1} />
                    <button>+</button>
                    <button className="cart-list">
                      <i className="fa fa-shopping-cart" /> Add to cart
                    </button>
                  </div>
                  {/* <a href="#">{data.rating} Reviews / Write a review</a> */}
                  <div className="details-icons">
                    <ul>
                      <li>SHARE:</li>
                      <li>
                        <i className="fa fa-facebook-f" />
                      </li>
                      <li>
                        <i className="fa fa-twitter" />
                      </li>
                      <li>
                        <i className="fa fa-youtube" />
                      </li>
                      <li>
                        <i className="fa fa-instagram" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>

            <div className="col-md-3 watch-lens-box">
              <div className="viewed-sidebar detail-lens-box">
                <h2 className="product-heading">recently viewed items</h2>
                <div className="kkk">
                  <div className="viewed-sidebar-jewellery">
                    <label>
                      <img src="images/detail-1.png" alt="listing" />
                    </label>
                  </div>
                  <div className="viewed-sidebar-prices">
                    <label>
                      lorem ipsu dolor
                      <label>
                        <b>$24.00</b>
                      </label>
                    </label>
                  </div>
                </div>
                <div className="kkk">
                  <div className="viewed-sidebar-jewellery">
                    <label>
                      <img src="images/detail-2.png" alt="listing" />
                    </label>
                  </div>
                  <div className="viewed-sidebar-prices">
                    <label>
                      lorem ipsu dolor
                      <label>
                        <b>$24.00</b>
                      </label>
                    </label>
                  </div>
                </div>
                <div className="kkk">
                  <div className="viewed-sidebar-jewellery">
                    <label>
                      <img src="images/detail-3.png" alt="listing" />
                    </label>
                  </div>
                  <div className="viewed-sidebar-prices">
                    <label>
                      lorem ipsu dolor
                      <label>
                        <b>$24.00</b>
                      </label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*banner silder section end*/}
        {/*tabbing start*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#home">
                    DESCRIPITION
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div id="home" className="container tab-pane active">
                  <br />
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*tabbing end*/}
        {/*footer slider start*/}
        <div className="detail-footer-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading">Related Product</h2>
                <div className="footer-slider">
                  <ul>
                    <li>
                      <img src="images/footer-watch-1.png" />
                      <h6>Lorem ipsum dolor</h6>
                      <p>
                        Consectetur adip iscing elit sed do eiusmod tempor inci
                      </p>
                      <b>$58.00</b>
                    </li>
                    <li>
                      <img src="images/footer-watch-2.png" />
                      <h6>Lorem ipsum dolor</h6>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit{" "}
                      </p>
                      <b>$90.00</b>
                    </li>
                    <li>
                      <img src="images/footer-watch-3.png" />
                      <h6>Lorem ipsum dolor</h6>
                      <p>Volup tatem accusa ntium doloremque laudantiu</p>
                      <b>$59.00</b>
                    </li>
                    <li>
                      <img src="images/footer-watch-4.png" />
                      <h6>Lorem ipsum dolor</h6>
                      <p>
                        Consectetur adip iscing elit sed do eiusmod tempor inci
                      </p>
                      <b>$123.00</b>
                    </li>
                    <li>
                      <img src="images/footer-watch.png" />
                      <h6>Lorem ipsum dolor</h6>
                      <p>voluptatem accusa ntium dolorem que laudantium tot</p>
                      <b>$99.00</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    navigate("/List");
  }
};

export default Productdetail;
