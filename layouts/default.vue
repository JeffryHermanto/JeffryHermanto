<template>
  <div>
    <!-- Start Preloader Area -->
    <div class="preloader-area">
      <div class="loader">
        <div class="loader-inner"></div>
        <div class="loader-inner"></div>
        <div class="loader-inner"></div>
        <div class="loader-inner"></div>
        <div class="loader-inner"></div>
        <div class="loader-inner"></div>
        <div class="loader-inner"></div>
        <div class="loader-inner"></div>
      </div>
    </div>
    <!-- End Preloader Area -->
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: "Jeffry Hermanto",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Software Engineer Clients LOVE to HIRE"
        }
      ]
    };
  },
  mounted() {
    /** ------- Pre Loader **/
    $(window).on("load", function() {
      $(".preloader-area")
        .delay(200)
        .fadeOut(500);
    });

    $("body").scrollspy({ target: "#navigation", spy: "scroll", offset: 300 });

    /* ================================================= */
    /*	slick Nav
     /* ================================================= */

    /* mobile_menu */

    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
        closeOnClick: true
      });
    }

    /* Smooth Scrolling Using Navigation Menu */

    $('.nav-link[href*="#"]').on("click", function(e) {
      $("html,body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 70
        },
        500
      );
      e.preventDefault();
    });

    /*  Custom Sticky Menu  */

    $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    /* ================================================= */
    /*	Works Area Filter js
     /* ================================================= */

    $(window).on("load", function() {
      $(".filters ul li").on("click", function() {
        $(".filters ul li").removeClass("active");
        $(this).addClass("active");

        var data = $(this).attr("data-filter");
        $grid.isotope({
          filter: data
        });
      });

      if (document.getElementById("works")) {
        var $grid = $(".grid").isotope({
          itemSelector: ".all",
          percentPosition: true,
          masonry: {
            columnWidth: ".all"
          }
        });
      }

      /* ================================================= */
      /*	Testimonial Slider
         /* ================================================= */

      $(".test-slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      });
    });

    /* ================================================= */
    /*	Blog Slider
     /* ================================================= */

    function blog_slider() {
      if ($(".blog-slider").length) {
        $(".blog-slider").owlCarousel({
          loop: true,
          margin: 0,
          items: 1,
          nav: true,
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          navContainer: ".blog-text-inner",
          navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
          ],
          responsiveClass: true
        });
      }
    }
    blog_slider();

    /* ================================================= */
    /*    sildeBar scroll
     /* ================================================= */
    $.scrollUp({
      scrollName: "scrollUp",
      topDistance: "300",
      topSpeed: 300,
      animation: "fade",
      animationInSpeed: 200,
      animationOutSpeed: 200,
      scrollText: '<i class="icon-arrow-up"></i>',
      activeOverlay: false
    });

    /**
     * =======================================
     * typed.js customize
     * =======================================
     */

    $("#typed").typed({
      stringsElement: $("#typed-strings"),
      typeSpeed: 100,
      backDelay: 1000,
      loop: true,
      contentType: "html", // or text
      // defaults to false for infinite loop
      loopCount: false,
      callback: function() {
        foo();
      },
      resetCallback: function() {
        newTyped();
      }
    });

    $(".reset").click(function() {
      "use strict";
      $("#typed").typed("reset");
    });

    function newTyped() {
      "use strict" /* A new typed object */;
    }

    function foo() {
      "use strict";
      console.log("Cobra");
    }

    // Resume Navigation

    (function() {
      //variable that will hold the href attr of the links in the menu
      var sections = [];
      //variable that stores the id of the section
      var id = false;
      //variable for the selection of the anchors in the navbar
      var $navbara = $("#navi a");

      $navbara.on("click", function(e) {
        //prevent the page from refreshing
        e.preventDefault();
        //set the top offset animation and speed
        $("html, body").animate(
          {
            scrollTop: $($(this).attr("href")).offset().top - 180
          },
          500
        );
        //hash($(this).attr("href"));
      });

      //select all the anchors in the navbar one after another
      $navbara.each(function() {
        // and adds them in the sections variable
        sections.push($($(this).attr("href")));
      });
      $(window).on("scroll", function(e) {
        // scrollTop retains the value of the scroll top with the reference at the middle of the page
        var scrollTop = $(this).scrollTop() + $(window).height() / 2;
        //cycle through the values in sections array
        for (var i in sections) {
          var section = sections[i];
          //if scrollTop variable is bigger than the top offset of a section in the sections array then
          if (scrollTop > section.offset().top) {
            var scrolled_id = section.attr("id");
          }
        }
        if (scrolled_id !== id) {
          id = scrolled_id;
          $($navbara).removeClass("current");
          $('#navi a[href="#' + id + '"]').addClass("current");
        }
      });
    })();
  }
};
</script>
