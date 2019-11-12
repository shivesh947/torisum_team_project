import React, { Component } from "react";
import "./registrationform.css";

class Registrationform extends Component {
  render() {
    return (
      <div id="formpackage">
        <div id="Registrationform">
          <div className="container">
            <center>
              <h1>Registration</h1>
            </center>
            <form action="/action_page.php">
              <div className="row">
                <div className="col-25">
                  <label >Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Contact number</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="lname"
                    name=""
                    placeholder="Contact number"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label >Email Address</label>
                </div>
                <div className="col-75">
                  <input
                    type="Email"
                    id="lname"
                    name=""
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Address</label>
                </div>
                <div className="col-75">
                  <div className="row-75">
                    <input
                      className="col-25"
                      type="text"
                      defaultValue=""
                      placeholder="Street"
                      name=""
                      style={{width:"25%" ,marginLeft:"5px"}}
                    />
                    <input
                      className="col-25"
                      type="text"
                      defaultValue=""
                      placeholder="City"
                      name=""
                      style={{width:"25%", marginLeft:"5px"}}
                    />
                    <input
                      className="col-25"
                      type="text"
                      defaultValue=""
                      placeholder="pin code"
                      name=""
                      style={{width:"25%", marginLeft:"5px"}}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label >Full Address</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="subject"
                    name=""
                    placeholder="Full Address"
                  />
                </div>
              </div>
              <div className="row">
                <center>
                  <input type="submit" defaultValue="Submit" style={{width:"80vw"}} />
                </center>
              </div>
            </form>
            <center>
              <p>Powered by Indian tourisum</p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
export default Registrationform;
