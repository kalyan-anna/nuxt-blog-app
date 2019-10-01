<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
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
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>