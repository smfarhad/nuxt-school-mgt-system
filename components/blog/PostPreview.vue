<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="blog-item">
      <div class="image-blog">
        <img :src="post.thumb" :alt="post.name" class="img-fluid" />
      </div>
      <div class="meta-info-blog">
        <span>
          <i class="fa fa-calendar"></i>
          <a href="#">{{post.created_at | date}}</a>
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
          <NuxtLink :to="postLink">{{ post.name }}</NuxtLink>
        </h2>
      </div>
      <div class="blog-desc">
        <p>{{ post.description }}</p>
      </div>
      <div class="blog-button">
        <NuxtLink class="hover-btn-new orange" :to="postLink">
          <span>Read More</span>
        </NuxtLink>
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