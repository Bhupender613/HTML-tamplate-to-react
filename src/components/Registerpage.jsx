import React, { useState } from "react";

const Registerpage = () => {
  const [form, setform] = useState([]);

  const handleOnChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let a;
    if (localStorage.getItem("user") === null) {
      a = [];
    } else {
      a = JSON.parse(localStorage.getItem("user"));
    }
    a.push(form);
    console.log(a);

    localStorage.setItem("user", JSON.stringify(a));
  };
  return (
    <>
      {/*register main section start*/}
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="register-images-section">
                <img src="images/register-banner.png" alt="register" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="register-form">
                <h1>Register</h1>
                <div className="tab-content">
                  <div id="home" className="container tab-pane active">
                    <br />
                    <form onSubmit={handlesubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              value={form.firstname}
                              onChange={handleOnChange}
                              placeholder="First Name"
                              name="firstname"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              value={form.lastname}
                              onChange={handleOnChange}
                              placeholder="Last Name"
                              name="lastname"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              value={form.email}
                              onChange={handleOnChange}
                              placeholder="Enter email"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              value={form.phone}
                              onChange={handleOnChange}
                              placeholder="Phone"
                              name="phone"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              value={form.password}
                              onChange={handleOnChange}
                              placeholder="Enter password"
                              name="password"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              value={form.password2}
                              onChange={handleOnChange}
                              placeholder="Confirm Password"
                              name="password2"
                            />
                          </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div id="menu1" className="container tab-pane fade">
                    <br />
                    <div id="home" className="container tab-pane active">
                      <br />
                      <form action="/action_page.php">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="First Name"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="pwd"
                                placeholder="Last Name"
                                name="pswd"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Phone"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control"
                                id="pwd"
                                placeholder="Enter password"
                                name="pswd"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control"
                                id="pwd"
                                placeholder="Confirm Password"
                                name="pswd"
                              />
                            </div>
                          </div>
                          <div className="form-group form-check">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                              />{" "}
                              <label>
                                I have read and agree to the Privacy Policy.
                              </label>
                            </label>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerpage;
