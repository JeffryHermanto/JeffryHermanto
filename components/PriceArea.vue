<template>
  <!-- Start Price Area -->
  <section class="price-area section-padding" id="price">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Price Table</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <!-- start single pricing item -->
          <div class="pricing-item text-center">
            <h4 class="title">Standard</h4>
            <span class="amount">$10</span>
            <span class="month">per month</span>
            <div class="icon"><i class="fa fa-calendar"></i></div>
            <ul class="pricing-content">
              <li>50GB Disk Space</li>
              <li>50 Email Accounts</li>
              <li>50GB Monthly Bandwidth</li>
              <li>10 Subdomains</li>
              <li>15 Domains</li>
            </ul>
            <a class="btn radius-btn" href="#">sign up</a>
          </div>
          <!-- end single pricing item-->
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <!-- start single pricing item -->
          <div class="pricing-item middle text-center">
            <h4 class="title">Business</h4>
            <span class="amount">$20</span>
            <span class="month">per month</span>
            <div class="icon"><i class="fa fa-calendar"></i></div>
            <ul class="pricing-content">
              <li>60GB Disk Space</li>
              <li>60 Email Accounts</li>
              <li>60GB Monthly Bandwidth</li>
              <li>15 Subdomains</li>
              <li>20 Domains</li>
            </ul>
            <a class="btn radius-btn" href="#">sign up</a>
            <div class="pricing-shape">
              <img
                class="shape1"
                src="assets/img/price-shape1.png"
                alt="price shape"
              />
              <img
                class="shape2"
                src="assets/img/price-shape2.png"
                alt="price shape"
              />
            </div>
          </div>
          <!-- end single pricing item-->
        </div>
        <div class="col-lg-4 col-md-6">
          <!-- start single pricing item -->
          <div class="pricing-item text-center">
            <h4 class="title">Premium</h4>
            <span class="amount">$30</span>
            <span class="month">per month</span>
            <div class="icon"><i class="fa fa-calendar"></i></div>
            <ul class="pricing-content">
              <li>70GB Disk Space</li>
              <li>70 Email Accounts</li>
              <li>70GB Monthly Bandwidth</li>
              <li>20 Subdomains</li>
              <li>25 Domains</li>
            </ul>
            <a class="btn radius-btn" href="#">sign up</a>
          </div>
          <!-- end single pricing item-->
        </div>
      </div>
    </div>
  </section>
  <!-- End Price Area -->
</template>

<script>
export default {
  name: "PriceArea"
};
</script>
