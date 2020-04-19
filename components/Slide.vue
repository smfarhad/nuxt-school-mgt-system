<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="rgba(76, 175, 80, 0.3)"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div class="carousel-inner" role="listbox">
        <b-carousel-slide background="rgba(76, 175, 80, 0.3)" img-src="/images/slider-01.jpg">
          <div id="home" class="first-section">
            <div class="dtab">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 col-sm-12 text-right">
                    <div class="big-tagline">
                      <h2>
                        <strong>SmartEDU</strong> education College
                      </h2>
                      <p
                        class="lead"
                      >With Landigoo responsive landing page template, you can promote your all hosting, domain and email services.</p>
                      <a href="#" class="hover-btn-new">
                        <span>Contact Us</span>
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="#"
                        class="hover-btn-new"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- end row -->
              </div>
              <!-- end container -->
            </div>
          </div>
          <!-- end section -->
        </b-carousel-slide>
        <b-carousel-slide background="rgba(76, 175, 80, 0.3)" img-src="/images/slider-02.jpg">
          <div id="home" class="first-section" style>
            <div class="dtab">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 col-sm-12 text-left">
                    <div class="big-tagline">
                      <h2 data-animation="animated zoomInRight">
                        SmartEDU
                        <strong>education school</strong>
                      </h2>
                      <p
                        class="lead"
                        data-animation="animated fadeInLeft"
                      >With Landigoo responsive landing page template, you can promote your all hosting, domain and email services.</p>
                      <a href="#" class="hover-btn-new">
                        <span>Contact Us</span>
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="#"
                        class="hover-btn-new"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- end row -->
              </div>
              <!-- end container -->
            </div>
          </div>
          <!-- end section -->
        </b-carousel-slide>
        <b-carousel-slide background="rgba(76, 175, 80, 0.3)" img-src="images/slider-03.jpg">
          <div id="home" class="first-section" style>
            <div class="dtab">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 col-sm-12 text-center">
                    <div class="big-tagline">
                      <h2 data-animation="animated zoomInRight">
                        <strong>VPS Servers</strong> Company
                      </h2>
                      <p class="lead" data-animation="animated fadeInLeft">
                        1 IP included with each server
                        Your Choice of any OS (CentOS, Windows, Debian, Fedora)
                        FREE Reboots
                      </p>
                      <a href="#" class="hover-btn-new">
                        <span>Contact Us</span>
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="#"
                        class="hover-btn-new"
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- end row -->
              </div>
              <!-- end container -->
            </div>
          </div>
          <!-- end section -->
        </b-carousel-slide>
        <!-- Left Control -->
        <a
          class="new-effect carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="fa fa-angle-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <!-- Right Control -->
        <a
          class="new-effect carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="fa fa-angle-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style>
.carousel-control-prev,
.carousel-control-next {
  top: 50%;
  background: #eea412;
  width: 5%;
  height: 50px;
}
b-carousel-slide .img {
  opacity: 0.5;
}
</style>