<template>
  <div>
    <!-- <div class="all-title-box">
      <div class="container text-center">
        <h1>
          Blog
          <span class="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span>
        </h1>
      </div>
    </div>-->

    <div id="overviews" class="section wb">
      <div class="container">
        <!-- <div class="section-title row text-center">
          <div class="col-md-8 offset-md-2">
            <p
              class="lead"
            >Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
          </div>
        </div>-->
        <!-- end title -->

        <hr class="invis" />

        <div class="row">
          <PostPreview
            v-for="(postDetals, index) in loadedPosts"
            :postDetals="postDetals"
            :key="index"
          />
        </div>
        <!-- end row -->
        <hr class="hr3" />
      </div>
      <!-- end container -->
    </div>
    <!-- end section -->
  </div>
</template>

<script>
import PostPreview from "@/components/blog/PostPreview";
export default {
  head: {
    title: "School Blog Page"
  },
  components: {
    PostPreview
  },
  data() {
    return {
      posts: this.loadedPosts
    };
  },
  created() {
    this.$store.dispatch("setPosts", this.loadedPosts);
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  methods: {},
  layout: "Frontend"
};
</script>
