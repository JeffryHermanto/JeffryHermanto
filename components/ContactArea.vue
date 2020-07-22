<template>
  <!-- Start Contact Area -->
  <section class="contact-area section-padding" id="contact">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row">
        <div class="col-lg-3 col-md-4 mb-5 mb-lg-0">
          <div class="contact-left">
            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-envelope-letter"></i>
              </div>
              <div class="media-body">
                <h4>Email</h4>
                <span>jeffryhermanto@gmail.com</span>
              </div>
            </div>

            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-screen-smartphone"></i>
              </div>
              <div class="media-body">
                <h4>Phone</h4>
                <span>+62 821 7777 1078</span>
              </div>
            </div>

            <!-- <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-social-skype"></i>
              </div>
              <div class="media-body">
                <h4>Skype</h4>
                <span>Yuor Skype</span>
              </div>
            </div>-->
          </div>
        </div>
        <div class="col-lg-7 offset-lg-2 col-md-8">
          <form id="contact-form" class="row contact-form" action="#" method="POST">
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <input
                  v-model="subject"
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="Enter the discussion title"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <textarea
                  v-model="message"
                  name="message"
                  id="message"
                  class="form-control"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="button-field">
                <button type="submit" class="btn radius-btn" @click="sendEmail">Send Message now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Area -->
</template>

<script>
export default {
  name: "ContactArea",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    sendEmail: function() {
      window.open(
        `mailto:jeffryhermanto@gmail.com?subject=${this.subject}&body=${this.message}`
      );
    }
  }
};
</script>
