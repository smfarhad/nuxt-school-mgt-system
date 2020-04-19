<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="blog-item">
      <div class="image-blog">
        <img :src="post.thumb" :alt="post.name" class="img-fluid" />
      </div>
      <div class="meta-info-blog">
        <span>
          <i class="fa fa-calendar"></i>
          <a href="#">May 11, 2015</a>
        </span>
        <span>
          <i class="fa fa-tag"></i>
          <a href="#">News</a>
        </span>
        <span>
          <i class="fa fa-comments"></i>
          <a href="#">12 Comments</a>
        </span>
      </div>
      <div class="blog-title">
        <h2>
          <nuxt-link :to="postLink">{{ post.name }} {{ post.id }}</nuxt-link>
        </h2>
      </div>
      <div class="blog-desc">
        <p>{{ post.description }} {{ post.id }}</p>
      </div>
      <div class="blog-button">
        <nuxt-link class="hover-btn-new orange" :to="postLink">
          <span>Read More</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["postDetals"],
  data() {
    return {
      post: this.postDetals
    };
  },
  computed: {
    postLink() {
      return "/blog/" + this.postDetals.id;
    }
  }
};
</script>
<style>
</style>