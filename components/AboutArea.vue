<template>
  <!-- About Area Start -->
  <section class="about-area section-padding sky-blue" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Start About Area Image -->
          <div class="img-about">
            <img class="img-fluid" src="assets/img/about-area/about.jpg" alt="about me" />
          </div>
          <!-- End About Area Image -->
        </div>

        <div class="col-lg-6 col-md-12">
          <!-- Start About Detail -->
          <div class="about-details">
            <div class="section-title mb-50">
              <h2>About Me</h2>
            </div>
            <p>
              I’m a Software Engineer. I have a passion for creating clean,
              beautiful, interactive, minimalistic, responsive, and user friendly
              UI. Developed by clean, modular, scalable, and functional code.
            </p>
            <ul class="about-info mt-4">
              <li>
                <span>Name:</span>
                <span>Jeffry Hermanto</span>
              </li>
              <li>
                <span>Date of birth:</span>
                <span>October 23, 1978</span>
              </li>
              <li>
                <span>Country:</span>
                <span>Indonesia</span>
              </li>
              <li>
                <span>Email:</span>
                <span>jeffryhermanto@gmail.com</span>
              </li>
              <li>
                <span>Phone:</span>
                <span>+62 821 7777 1078</span>
              </li>
            </ul>
            <div class="download-btn mt-5">
              <a
                href="assets/pdf/CV_Jeffry_Hermanto.pdf"
                target="_blank"
                class="btn radius-btn"
              >Download CV</a>
            </div>
          </div>
          <!-- End About Detail -->
        </div>
      </div>
    </div>
  </section>
  <!-- About Area End -->
</template>

<script>
export default {
  name: "AboutArea"
};
</script>
