<template>
  <div class="post-comment">
    <a href="#" class="post-comment__avatar">
      <img :src="data.user.ava" alt="" />
    </a>
    <div class="post-comment__text">
      <a href="#" class="post-comment__name"> {{data.user.name}} {{data.user.surname}} </a> 
      {{data.content}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
};
</script>
