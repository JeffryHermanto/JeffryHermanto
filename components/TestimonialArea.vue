<template>
  <!-- Start Testimonial Area -->
  <section class="testimonial-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-12">
          <!-- start testimonial carousel -->
          <div class="test-slider">
            <!-- start testimonial item -->
            <div v-for="(author, i) in authors" :key="i" class="test-item">
              <p>{{ author.testimony }}</p>
              <div class="author-info">
                <img :src="`assets/img/testimonial/${author.image}`" alt="client" />
                <h4>{{ author.name }}</h4>
                <div class="position">
                  {{ author.position }}
                  <span>
                    <a :href="author.url" target="_blank">{{ author.company }}</a>
                  </span>
                </div>
              </div>
            </div>
            <!-- end testimonial item -->
          </div>
          <!-- end testimonial carousel -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial Area -->
</template>

<script>
import authors from "~/json/authors.json";

export default {
  name: "TestimonialArea",
  data() {
    return {
      authors,
    };
  },
};
</script>
