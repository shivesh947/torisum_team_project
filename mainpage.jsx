// part2 shivesh
import React, { Component } from "react";
import './mainpage.css'
class Mainpage extends Component {

  render() {
    return (
      <div>
        <div className="page-footer font-small mdb-color lighten-3 pt-4">
          <div className="container">
            <div className="row" >
              <div className="col-lg-2 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="page-footer font-small mdb-color lighten-3 pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>
                  Here you can use rows and columns to organize your footer
                  content.
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              shivikatorisum.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Mainpage;
