<template>
  <div>
    <HeroArea />
    <ServiceArea />
    <AboutArea />
    <ResumeArea />
    <WorksArea />
    <!-- <PriceArea /> -->
    <HireArea />
    <TestimonialArea />
    <!-- <BlogArea /> -->
    <ContactArea />
  </div>
</template>

<script>
import HeroArea from "~/components/HeroArea";
import ServiceArea from "~/components/ServiceArea";
import AboutArea from "~/components/AboutArea";
import ResumeArea from "~/components/ResumeArea";
import WorksArea from "~/components/WorksArea";
import PriceArea from "~/components/PriceArea";
import HireArea from "~/components/HireArea";
import TestimonialArea from "~/components/TestimonialArea";
import BlogArea from "~/components/BlogArea";
import ContactArea from "~/components/ContactArea";

export default {
  components: {
    HeroArea,
    ServiceArea,
    AboutArea,
    ResumeArea,
    WorksArea,
    PriceArea,
    HireArea,
    TestimonialArea,
    BlogArea,
    ContactArea
  }
};
</script>
