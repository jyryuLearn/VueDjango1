<template>
  <v-app id="inspire">
    <MainMenu />

    <v-main>
      <PostList />
    </v-main>

    <v-footer app>
      <span>Copyright &copy; 2022 by shkim</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: { MainMenu, PostList },

  data: () => ({
  }),
};
</script>