import React from "react";

const Aside = () => {
  return (
    <div>
      <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
        id="sidenav-main"
      >
        <hr class="horizontal light mt-0 mb-2" />
        <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link text-white active bg-gradient-primary"
                href="../pages/tables.html"
              >
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">dashboard</i>
                </div>
                <span class="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li class="nav-item mt-3">
              <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Account pages
              </h6>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="../pages/profile.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">person</i>
                </div>
                <span class="nav-link-text ms-1">Profile</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="sidenav-footer position-absolute w-100 bottom-0">
          <div class="mx-3">
            <a
              class="btn bg-gradient-primary mt-4 w-100"
              href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
              type="button"
            >
              Logout
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
