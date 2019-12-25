// точка входа
<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <div class="header__row">
          <a href="index.html" class="header__logo">
            <i class="fab fa-dev"></i>
          </a>

          <div class="header__search">
            <div class="search">
              <input type="text" placeholder="Поиск" />
              <div class="search__cancel search__cancel--active">
                <i class="fas fa-times-circle"></i>
              </div>
            </div>
          </div>

          <div class="header__links">
            <a href="#" class="header__link">
              <i class="fas fa-user"></i>
            </a>
            <a href="#" class="header__link">
              <i class="fas fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <post v-for="post of posts" :data="post" v-bind:key="post.id"></post>
    </div>
    
  </div>
</template>

<script>
import Post from "@/components/Post";
import fakeData from "@/fakeData.json";

export default {
  // тут говорим, что будем использовать эти компоненты
  name: "app",
  components: {
    Post
  },

  data() {
    // это данные поста
    return {
      posts: fakeData.posts
    };
  }
};
</script>
