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
                <span>Freelancer.</span>
                <span>Musician.</span>
              </div>
              <span class="LR-C" id="typed" style="white-space:pre;"></span>
            </div>
            <p>Experienced mobile app & website developer who has a track record of success creating apps & websites that are both well-received & commercially viable. Skilled with working as a team & incorporating input into projects. Ability to always look for ways to improve upon an already existing app to keep people downloading it & enjoying it. Strong eye for detail & tenacity to never quit on something until it is absolutely perfect.</p>
            <a
              href="assets/pdf/CV_Jeffry_Hermanto.pdf"
              target="_blank"
              class="btn radius-btn"
            >Download CV</a>
          </div>
          <!-- End Hero Caption -->
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Hero Right Image -->
          <div class="hero-img">
            <img src="assets/img/welcome-area/hero_right.png" alt="Hero image" />
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
