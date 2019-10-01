<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
import axios from "axios";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  computed: {
    loadedPost() {
      return this.$store.getters.getPostById(this.$route.params.postId);
    }
  },
  methods: {
    onSubmit(editPost) {
      const post = {
        ...editPost,
        id: this.$route.params.postId
      };
      this.$store.dispatch("editPost", post).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>