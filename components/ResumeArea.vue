<template>
  <!-- Resume Area Start -->
  <section class="resume-area section-padding" id="resume">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Resume</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block">
          <!-- Start Resume Nav -->
          <nav id="navi">
            <ul>
              <li>
                <a href="#page-1">Education</a>
              </li>
              <li>
                <a href="#page-2">Experience</a>
              </li>
              <li>
                <a href="#page-3">Skills</a>
              </li>
              <li>
                <a href="#page-4">Awards</a>
              </li>
            </ul>
          </nav>
          <!-- End Resume Nav -->
        </div>
        <div class="col-lg-9 col-md-12">
          <!-- Start Education -->
          <div id="page-1" class="page one">
            <h3 class="heading">Education</h3>
            <!-- Start Education Item-->
            <div
              v-for="(education, i) in educations"
              :key="i"
              class="resume-wrap transition d-flex"
            >
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-graduation"></span>
              </div>
              <div class="text pl-3">
                <span class="date">{{ education.date }}</span>
                <h4>{{ education.title }}</h4>
                <span class="position">{{ education.organization }}</span>
                <p>{{ education.description }}</p>
              </div>
            </div>
            <!-- End Education Item-->
          </div>
          <!-- End Education -->

          <!-- Start Experience -->
          <div id="page-2" class="page two">
            <h3 class="heading">Experience</h3>
            <!-- Start Experience Item -->
            <div
              v-for="(experience, i) in experiences"
              :key="i"
              class="resume-wrap transition d-flex"
            >
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                <span class="date">{{ experience.date }}</span>
                <h4>{{ experience.position }}</h4>
                <span class="position">{{ experience.organization }}</span>
                <p>{{ experience.description }}</p>
              </div>
            </div>
            <!-- End Experience Item -->
          </div>
          <!-- End Experience -->

          <!-- Start Skills -->
          <div id="page-3" class="page three">
            <h3 class="heading">Skills</h3>
            <div class="row">
              <!-- Start Skill Item -->
              <div v-for="(skill, i) in skills" :key="i" class="col-md-6">
                <div class="progress-wrap">
                  <h5>{{ skill.name }}</h5>
                  <div class="progress">
                    <div class="progress-bar" :style="`width:${skill.level}`">
                      <span>{{ skill.level }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Skill Item -->
            </div>
          </div>
          <!-- End Skills -->

          <!-- Start Awards -->
          <div id="page-4" class="page four">
            <h3 class="heading">Awards</h3>
            <!-- Start Awards Item -->
            <div v-for="(award, i) in awards" :key="i" class="resume-wrap transition d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-3">
                <span class="date">{{ award.date }}</span>
                <h4>{{ award.name }}</h4>
                <span class="position">{{ award.organization }}</span>
                <p>{{ award.description }}</p>
              </div>
            </div>
            <!-- End Awards Item -->
          </div>
          <!-- End Awards -->
        </div>
      </div>
    </div>
  </section>
  <!-- Resume Area End -->
</template>

<script>
import educations from "~/jsons/educations.json";
import experiences from "~/jsons/experiences.json";
import skills from "~/jsons/skills.json";
import awards from "~/jsons/awards.json";

export default {
  name: "ResumeArea",
  data() {
    return {
      educations,
      experiences,
      skills,
      awards,
    };
  },
};
</script>
