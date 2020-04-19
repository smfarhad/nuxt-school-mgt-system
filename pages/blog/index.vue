<template>
  <div>
    <div class="all-title-box">
      <div class="container text-center">
        <h1>
          Blog
          <span class="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span>
        </h1>
      </div>
    </div>

    <div id="overviews" class="section wb">
      <div class="container">
        <div class="section-title row text-center">
          <div class="col-md-8 offset-md-2">
            <p
              class="lead"
            >Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
          </div>
        </div>
        <!-- end title -->

        <hr class="invis" />

        <div class="row">
          <PostPreview v-for="(postDetals, index) in posts" :postDetals="postDetals" :key="index" />
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
  components: {
    PostPreview
  },
  data() {
    return {
      posts: this.allPosts()
    };
  },
  methods: {
    allPosts() {
      const posts = [
        {
          id: 1,
          name: "Post Title ",
          thumb: "/images/blog_1.jpg",
          description: this.description()
        },
        {
          id: 2,
          name: "Post Title ",
          thumb: "/images/blog_2.jpg",
          description: this.description()
        },
        {
          id: 3,
          name: "Post Title ",
          thumb: "/images/blog_3.jpg",
          description: this.description()
        },
        {
          id: 4,
          name: "Post Title ",
          thumb: "/images/blog_3.jpg",
          description: this.description()
        },
        {
          id: 5,
          name: "Post Title ",
          thumb: "/images/blog_4.jpg",
          description: this.description()
        },
        {
          id: 6,
          name: "Post Title ",
          thumb: "/images/blog_5.jpg",
          description: this.description()
        }
      ];
      return posts;
    },
    description() {
      const description =
        "As mentioned above, this layout is special, since you should not include inside its template." +
        "You must see this layout as a component displayed when an error occurs (404, 500, etc.). Similar" +
        " to other page components, you can set a custom layout for the error page as well in the usual way." +
        "The default error page source code is available on GitHub.You can customize the error page by adding" +
        "a layouts/error.vue file";
      return description;
    }
  },
  layout: "Frontend"
};
</script>
