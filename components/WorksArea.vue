<template>
  <!-- Start Works Area -->
  <section class="works-area section-padding sky-blue" id="works">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>My Projects</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row mb-4">
        <div class="col-xs-12">
          <div class="filters">
            <ul>
              <li class="active" data-filter=".all">All</li>
              <li data-filter=".web-site">Web Site</li>
              <li data-filter=".mobile-apps">Mobile Apps</li>
              <li data-filter=".desktop-app">Desktop App</li>
              <li data-filter=".open-source">Open Source</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="filters-content">
        <div class="row grid">
          <!-- start single work item -->
          <div
            v-for="(project, i) in portfolio"
            :key="i"
            :class="`single-work col-lg-4 col-md-6 col-sm-12 all ${project.filter}`"
          >
            <div class="position-relative">
              <div class="thumb">
                <img class="image img-fluid" :src="`assets/img/works/${project.image}`" alt="work" />
              </div>
              <a class="overlay transition" :href="project.url" target="_blanks"></a>
              <div class="short-info transition">
                <h4>{{ project.type }}</h4>
                <div class="cat">{{ project.title }}</div>
              </div>
            </div>
          </div>
          <!-- end single work item -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Works Area -->
</template>

<script>
import portfolio from "~/json/portfolio.json";

export default {
  name: "WorksArea",
  data() {
    return {
      portfolio
    };
  }
};
</script>
