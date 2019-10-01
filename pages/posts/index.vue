<template>
  <div class="post-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";

export default {
  components: {
    PostList
  },
  data() {
    return {
      loadedPosts: []
    };
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              thumbnail:
                "https://www.fool.com.au/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg",
              title: "Hello there!",
              previewText: "This is my first post!"
            },
            {
              id: "2",
              thumbnail:
                "https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg",
              title: "Post title 2",
              previewText: "This is second post!"
            },
            {
              id: "3",
              thumbnail:
                "https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg",
              title: "Post title 3",
              previewText: "This is third post!"
            }
          ]
        });
      }, 1500);
    })
      .then(data => data)
      .catch(() => context.error(new Error()));
  }
};
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>