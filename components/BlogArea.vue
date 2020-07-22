<template>
  <!-- Start Blog Area -->
  <section class="blog-area section-padding sky-blue" id="blog">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Latest Blog</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row latest_blog_inner">
        <div class="col-lg-6 col-md-12">
          <div class="blog-left mb-5 mb-lg-0">
            <div class="blog-items">
              <div class="blog-slider owl-carousel">
                <div class="item">
                  <img
                    src="https://via.placeholder.com/370x220"
                    alt="blog image"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://via.placeholder.com/370x220"
                    alt="blog image"
                  />
                </div>
              </div>
            </div>
            <div class="blog-text">
              <div class="blog-text-inner">
                <div class="blog-date">
                  <a href="#"><i class="icon-calendar"></i>12 July 2016</a>
                  <a href="#"><i class="icon-heart"></i>235</a>
                  <a href="#">25 Comment</a>
                </div>

                <h4>Work For Success</h4>
                <p>
                  Lorem ipsum dolor sit amet, to consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna to
                  liqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="blog-right">
            <div class="media">
              <div class="media-left">
                <img
                  src="https://via.placeholder.com/138x133"
                  alt="blog image"
                />
              </div>
              <div class="media-body">
                <h4>On UI Design Post</h4>
                <a href="#">
                  <small><i class="icon-calendar"></i>16 JUNE 2016</small>
                </a>
                <p>
                  It is a long established fact that a reader will be
                  dis-tracted by the readable content.
                </p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <img
                  src="https://via.placeholder.com/138x133"
                  alt="blog image"
                />
              </div>
              <div class="media-body">
                <h4>On Graphics Design Post</h4>
                <a href="#">
                  <small><i class="icon-calendar"></i>16 JUNE 2016</small>
                </a>
                <p>
                  It is a long established fact that a reader will be
                  dis-tracted by the readable content.
                </p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <img
                  src="https://via.placeholder.com/138x133"
                  alt="blog image"
                />
              </div>
              <div class="media-body">
                <h4>On Development Post</h4>
                <a href="#">
                  <small><i class="icon-calendar"></i>16 JUNE 2016</small>
                </a>
                <p>
                  It is a long established fact that a reader will be
                  dis-tracted by the readable content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Blog Area -->
</template>

<script>
export default {
  name: "BlogArea"
};
</script>
