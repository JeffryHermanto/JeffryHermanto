<template>
  <!-- Header Start -->
  <header>
    <div class="header-area header-transparrent">
      <div class="main-header header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-2 col-md-2">
              <div class="logo">
                <a href="index.html">
                  <img src="assets/img/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-10">
              <!-- Main-menu -->
              <div class="main-menu float-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li class="nav-item">
                      <a class="nav-link transition active" href="#body">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link transition" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link transition" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link transition" href="#resume">Resume</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link transition" href="#works">Works</a>
                    </li>
                    <!-- <li class="nav-item">
                      <a class="nav-link transition" href="#blog">Blog</a>
                      <ul class="submenu transition">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Blog Details</a></li>
                      </ul>
                    </li>-->
                    <li class="nav-item">
                      <a class="nav-link transition" href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
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
  </header>
  <!-- Header End -->
</template>

<script>
export default {
  name: "Header"
};
</script>
