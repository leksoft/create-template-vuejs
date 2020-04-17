<template>
  <div id="app">
    <header>
      <!-- Header Start -->
      <div class="header-area">
        <div class="main-header  header-sticky">
          <div class="container-fluid">
            <div class="row align-items-center">
              <!-- Logo -->
              <div class="col-xl-2 col-lg-2 col-md-1">
                <div class="logo">
                  <a href="/"><img src="assets/img/logo/logo.png" alt=""/></a>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10">
                <div
                  class="menu-main d-flex align-items-center justify-content-end"
                >
                  <!-- Main-menu -->
                  <div class="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="services">Services</a></li>
                        <li><a href="portfolio">Portfolio</a></li>
                        <li>
                          <a href="#">Page</a>
                          <ul class="submenu">
                            <li><a href="blog">Blog</a></li>
                            <li>
                              <a href="blog_details">Blog Details</a>
                            </li>
                            <li><a href="elements">Element</a></li>
                            <li>
                              <a href="portfolio_details">Portfolio Details</a>
                            </li>
                          </ul>
                        </li>
                        <li><a href="contact">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div class="header-right-btn f-right d-none d-xl-block ml-20">
                    <a href="#" class="btn header-btn">Get Free Consultent</a>
                  </div>
                </div>
              </div>
              <!-- Mobile Menu -->
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header End -->
    </header>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style></style>
