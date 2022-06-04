import React from "react";
import Plugin from './Plugin';

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div>
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
          <hr className="horizontal light mt-0 mb-2" />
          <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white active bg-gradient-primary" href="../pages/tables.html">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">dashboard</i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </a>
              </li>
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                  Account pages
                </h6>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="../pages/profile.html">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">person</i>
                  </div>
                  <span className="nav-link-text ms-1">Profile</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidenav-footer position-absolute w-100 bottom-0">
            <div className="mx-3">
              <a className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">Logout</a>
            </div>
          </div>
        </aside>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
          {/* Navbar */}
          <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                  <li className="breadcrumb-item text-sm">
                    <a className="opacity-5 text-dark" href="javascript:;">Pages</a>
                  </li>
                  <li className="breadcrumb-item text-sm text-dark active" aria-current="page">
                    Tables
                  </li>
                </ol>
                <h6 className="font-weight-bolder mb-0">Tables</h6>
              </nav>
              <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group input-group-outline">
                    <label className="form-label">Type here...</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <ul className="navbar-nav justify-content-end">
                  <li className="nav-item d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body font-weight-bold px-0">
                      <i className="fa fa-user me-sm-1" />
                      <span className="d-sm-inline d-none">Profile</span>
                    </a>
                  </li>
                  <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                      <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-12">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">Authors table</h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Author
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Function
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Status
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Employed
                            </th>
                            <th className="text-secondary opacity-7" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">John Michael</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    john@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">Manager</p>
                              <p className="text-xs text-secondary mb-0">
                                Organization
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">Online</span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                            </td>
                            <td className="align-middle">
                              <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img src="../assets/img/team-3.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user2" />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    alexa@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Programator
                              </p>
                              <p className="text-xs text-secondary mb-0">Developer</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">11/01/19</span>
                            </td>
                            <td className="align-middle">
                              <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Edit
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">
                        Projects table
                      </h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center justify-content-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Project
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Budget
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Status
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                              Completion
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img src="../assets/img/small-logos/logo-asana.svg" className="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Asana</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">$2,500</p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">working</span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">60%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button className="btn btn-link text-secondary mb-0">
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img src="../assets/img/small-logos/github.svg" className="avatar avatar-sm rounded-circle me-2" alt="invision" />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Github</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">$5,000</p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">done</span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">100%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img src="../assets/img/small-logos/logo-atlassian.svg" className="avatar avatar-sm rounded-circle me-2" alt="jira" />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Atlassian</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">$3,400</p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">canceled</span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">30%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={30} style={{width: '30%'}} />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img src="../assets/img/small-logos/bootstrap.svg" className="avatar avatar-sm rounded-circle me-2" alt="webdev" />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Bootstrap</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">$14,000</p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">working</span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">80%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={80} style={{width: '80%'}} />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img src="../assets/img/small-logos/logo-slack.svg" className="avatar avatar-sm rounded-circle me-2" alt="slack" />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Slack</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">$1,000</p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">canceled</span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">0%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={0} style={{width: '0%'}} />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img src="../assets/img/small-logos/devto.svg" className="avatar avatar-sm rounded-circle me-2" alt="xd" />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Devto</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">$2,300</p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">done</span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">100%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Plugin />
      </div>

      </div>
    </div>
  );
};

export default Dashboard;
