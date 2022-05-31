import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer className="footer text-white bg-primary">
          <div className="container">
              <footer className="py-5">
                  <div className="row">
                      <div className="col-3">
                        <h4>SYAIFUL STYLE</h4>
                      </div>

                      <div className="col-2">
                          <h5>Section</h5>
                          <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-white">About</a></li>
                            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-white">Services</a></li>
                            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-white">Contact</a></li>
                          </ul>
                      </div>                     
                      <div className="col-2">
                          <h5>Section</h5>
                          <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-white">About</a></li>
                            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-white">Services</a></li>
                            <li className="nav-item mb-2"><a to="#" className="nav-link p-0 text-white">Contact</a></li>
                          </ul>
                      </div>                     
                     
                      <div className="col-4 offset-1">
                          <form>
                              <h5>Subscribe to our newsletter</h5>
                              <p>Monthly digest of whats new and exciting from us.</p>
                              <div className="d-flex w-100 gap-2">
                                  <label htmlFor="newsletter1" className="visually-hidden">Email Address</label>
                                  <input id="newsletter1" type="text" className="form-control" placeholder="Email Address" />
                                  <button className="btn btn-primary rounded-pill px-4" type="button">Subscribe</button>
                              </div>
                          </form>
                      </div>
                  </div>

                  <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                      <p>Copyright 2022, STYLE-Project. All rights reserved.</p>
                      <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-light" to="#"><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li className="ms-3"><a className="link-light" to="#"><i className="fa fa-instagram fa-2x"></i></a></li>
                        <li className="ms-3"><a className="link-light" to="#"><i className="fa fa-linkedin fa-2x"></i></a></li>
                      </ul>
                  </div>
              </footer>
          </div>
        </footer>
      </div>
    );
}

export default Footer;
