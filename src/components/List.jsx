import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Context from "./Createcontextdata";

const List = () => {
  let set = useContext(Context);

  const navigate = useNavigate();
  const [data, setdata] = useState("");
  const [next, setnext] = useState(10);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${next}`)
      .then((res) => setdata(res.data));
  }, [next]);

  const productid = (e, id) => {
    set.seturl(`https://fakestoreapi.com/products/${id}`);
    navigate(`/Productdetail?id=${id}`);
  };

  const handlenextpage = () => {
    setnext(2 * 10);
  };
  console.log(data.length);
  return (
    <>
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="listing-banner">
                <div className="banner-text">
                  <h2 className="heading">jewellery collection</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugait.
                  </p>
                </div>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link to="/List">Products</Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-3">
              <div className="listing-filter">
                <label>
                  <i className="fa fa-sliders" /> Filter
                </label>
              </div>
            </div>
            <div className="col-9 text-right">
              <div className="listing-filter-results">
                <span>Showing on 1-18 of 25 results</span>
                <form>
                  <select>
                    <option>Default shorting</option>
                    <option>currency</option>
                    <option>currency</option>
                    <option>currency</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*banner end*/}
        {/*jewellery boxes start*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jewellery-boxes">
                <div className="jewellery-boxes-section">
                  <ul>
                    {data &&
                      data.map((item, index) => (
                        <>
                          <li>
                            <div
                              className="product-image"
                              onClick={(e) => productid(e, item.id)}
                            >
                              <img src={item.image} alt="beadzy" />
                              <div className="product-image-hover">
                                <img src={item.image} alt="beadzy" />
                                <h5>{item.title}</h5>

                                <p>Total Product:{item.rating.count} </p>

                                <span>
                                  <a>
                                    <i className="fa fa-shopping-cart" /> ADD TO
                                    CART
                                  </a>
                                  <i className="fa fa-heart-o" />
                                </span>
                              </div>
                            </div>
                            <h6>{item.title.slice(0, 10)}</h6>
                            <p>{item.description.slice(0, 40)}</p>
                            <b>${item.price}</b>
                          </li>
                        </>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*jewellery boxes end*/}
        {/*pagination section start*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pagination-section">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" onClick={handlenextpage}>
                        2
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default List;
