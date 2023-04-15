<template>
  <!-- Welcome Area Start -->
  <section class="hero-area sky-blue d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start Hero Caption -->
          <div class="hero-caption">
            <span class="subheading">Hey! I am</span>
            <h1>Jeffry Hermanto</h1>
            <div>
              I'm a
              <div id="typed-strings">
                <!-- Animated Text Writer -->
                <span>Software Engineer.</span>
                <span>Web Developer.</span>
                <span>Mobile Developer.</span>
              </div>
              <span class="LR-C" id="typed" style="white-space: pre"></span>
            </div>
            <p>
              I have a passion for creating clean, beautiful, interactive,
              minimalistic, responsive, and user friendly UI. Developed by
              clean, modular, scalable, and functional code.
            </p>
            <a
              href="assets/pdf/CV_Jeffry_Hermanto.pdf"
              target="_blank"
              class="btn radius-btn"
              >Download CV</a
            >
          </div>
          <!-- End Hero Caption -->
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Hero Right Image -->
          <div class="hero-img">
            <img
              src="assets/img/welcome-area/hero_right.png"
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Animated Shape -->
    <div class="hero-shape custom-animation">
      <img src="assets/img/hero/hero-shape.png" alt="animation shape" />
    </div>
  </section>
  <!-- Welcome Area End -->
</template>

<script>
export default {
  name: "HeroArea"
};
</script>
