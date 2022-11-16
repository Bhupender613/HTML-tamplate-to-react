import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Header = () => {
  const [find, setfind] = useState("");
  const [value, setvalue] = useState("");
  const [data, setdata] = useState("");
  const [classdata, setclassdata] = useState("");
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setdata(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setfind(res.data));
  }, []);

  const handleEnter = (e) => {
    let value = e.target.value;

    if (value !== "") {
      let result = find.filter((e) => e.title.includes(value));
      setclassdata("scarchresult");
      setvalue(result);
    } else {
      setvalue("");
      setclassdata("");
    }
  };

  return (
    <>
      <>
        <div className="sidebar">
          <div className="sidebar-cross">
            <img src="images/cross.png" alt="cross" />
          </div>
          <div className="search-sidebar">
            <form action="/action_page.php">
              <label htmlFor="fname">search</label>
              <br />
              <input type="text" id="fname" name="fname" />
              <i className="fa fa-search" />
            </form>
          </div>
          <div className="menu menu-hide">
            <ul>
              <li>
                <a href="#">beads</a>
              </li>
              <li>
                <a href="#">swarovski</a>
              </li>
              <li>
                <a href="#">jewelery components</a>
              </li>
              <li>
                <a href="#">jewelery findings</a>
              </li>
              <li>
                <a href="#">charms</a>
              </li>
              <li>
                <a href="#">clay</a>
              </li>
              <li>
                <a href="#">rhinestones</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-product">
            <h2 className="product-heading">product categories</h2>
            <ul>
              <li className="active">
                <a href="#">
                  jewellery<span>(3)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  dolor sit amet<span>(24)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  consecteture<span>(13)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  adipiscing<span>(9)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  eiusmod tempr<span>(7)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  incididunt ut<span>(13)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  labore dolore<span>(11)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  magna aliqua<span>(5)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  tenim ad minim<span>(2)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  veniam quis<span>(16)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  nostrud<span>(17)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="filter">
            <h2 className="product-heading">
              filter by <br />
              price
            </h2>
            <form className="multi-range-field my-5 pb-5">
              <input id="multi" className="multi-range" type="range" />
            </form>
            <label>
              <a href="">Filter</a>
            </label>
            <span>$10 - $150</span>
          </div>
          <div className="viewed-sidebar">
            <h2 className="product-heading">recently viewed items</h2>
            <div className="kkk">
              <div className="viewed-sidebar-jewellery">
                <label>
                  <img src="images/earings.png" alt="listing" />
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
                  <img src="images/bengles.png" alt="listing" />
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
                  <img src="images/necklace.png" alt="listing" />
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
        {/*sidebar-end*/}
        <div className="main">
          {/*Header start*/}
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="left-side">
                    <form>
                      <label>
                        <i className="fa fa-dollar" />
                      </label>
                      <select>
                        <option>Currency</option>
                        <option>currency</option>
                        <option>currency</option>
                        <option>currency</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="col-6 text-right">
                  <div className="right-side">
                    <ul>
                      <li>
                        <a href="#">Register</a>
                      </li>
                      <span />
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-lower">
              <div className="container hide">
                <div className="row">
                  <div className="col-6">
                    <div className="logo next-logo">
                      <a href="#">
                        <img src="images/logo.png" alt="beadzy" />
                      </a>
                    </div>
                  </div>
                  <div className="col-6 text-right">
                    <div className="social-icons next-logo">
                      <ul>
                        <li>
                          <img
                            className="toggle"
                            src="images/menu-toggle.png"
                          />
                        </li>
                        <li>
                          <img src="images/heart.png" alt="cart" />
                        </li>
                        <li>
                          <img src="images/cart.png" alt="cart" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="logo">
                      <a href="#">
                        <img src="images/logo.png" alt="beadzy" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="beadzy-form">
                      <form>
                        <input
                          type="text"
                          onKeyUp={handleEnter}
                          placeholder="What are you shopping for"
                        />
                        <button>
                          <i className="fa fa-search" />
                        </button>
                      </form>
                      <ul className={classdata}>
                        {value &&
                          value.map((item, index) => (
                            <>
                              <li key={index}>
                                <img src={item.image} width="30px" />
                                {item.title}
                              </li>
                            </>
                          ))}
                      </ul>
                    </div>
                    <div className="sell-section">
                      <a href="#">sell on beadzy</a>
                    </div>
                  </div>
                  <div className="col-md-2 text-right">
                    <div className="social-icons">
                      <ul>
                        <li>
                          <img src="images/heart.png" alt="cart" />
                        </li>
                        <li>
                          <img src="images/cart.png" alt="cart" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Mennu start*/}
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="menu">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/List">List</Link>
                      </li>
                      {data &&
                        data.map((item, index) => (
                          <li key={index}>
                            <Link to={`/Category?id=${item}`}>{item}</Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*Mennu end*/}
          </header>
        </div>
      </>
    </>
  );
};

export default Header;
