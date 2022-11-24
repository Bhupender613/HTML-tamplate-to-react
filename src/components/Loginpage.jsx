import React, { useState, useContext } from "react";
import Context from "./Createcontextdata";

const Loginpage = () => {
  let value = useContext(Context);
  const [form, setform] = useState([]);
  const [usererror, setusererror] = useState("");
  const [passerror, setpasserror] = useState("");

  const handleonChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleonSubmit = () => {
    let email = form.email;
    let password = form.password;
    const user = JSON.parse(localStorage.getItem("user"));
    user.map((user, index) => {
      if (user.email !== email) {
        setusererror(<div class="invalid">Email not match</div>);
      } else if (user.password !== password) {
        setpasserror(<div class="invalid">password not match</div>);
      } else {
        value.setuser(user.firstname + " " + user.lastname);
        setpasserror("");
        setusererror("");
      }
    });
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
                <h1>Login</h1>
                <div className="tab-content">
                  <div id="home" className="container tab-pane active">
                    <br />

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleonChange}
                          />
                        </div>
                        {usererror}
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="password"
                            onChange={handleonChange}
                          />
                        </div>
                        {passerror}
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleonSubmit}
                      >
                        Submit
                      </button>
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

export default Loginpage;
