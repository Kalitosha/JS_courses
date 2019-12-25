<template>
  <div class="post">
    <div class="post__header">
      <div class="post__user">
        <div class="user">
          <a href="#" class="user__avatar">
            <img :src="data.user.ava" alt=""/>
            <!--было src="img/avatars/01.png" -->
          </a>
          <a href="#" class="user__name">
            {{ data.user.name }} {{ data.user.surname }}
          </a>
        </div>
      </div>

      <div class="post__links">
        <a href="#" class="edit-link">
          <i class="far fa-trash-alt"></i>
          Delete
        </a>

        <a href="edit.html" class="edit-link">
          <i class="fas fa-pencil-alt"></i>
          Edit
        </a>
      </div>
    </div>

    <div class="post__img">
      <img :src="data.src" alt="Photo"/>
    </div>

    <!-- post__data  -->
    <div class="post__data">
      <div class="post__description">
        {{ data.description }}
      </div>

      <div class="post__hashtags">
        <!-- используем диррективы vue, позволяющие работать с условнвыми операторами, циклами -->
        <a href="#" v-for="tag of data.tags" v-bind:key="tag"> #{{ tag }} </a>
        <!-- v-for="tag of data.tags"  // тут запускаем цикл по всему массиву тегов 
        v-bind:key="tag" // служебная ин-фа, содержит информацию о том, какие эл-ты перерисовать, если массив изменится
        -->

        <!-- или можно так:
        <template v-for="tag of data.tags"> 
            <a href="#" v-bind:key="tag"> #{{tag}} </a>
        </template> 
         -->

        <!-- было это 
        <a href="#">#forest</a>
        <a href="#">#travel</a>
        <a href="#">#journey</a>
        <a href="#">#holiday</a> -->
      </div>
    </div>
    <!-- // post__data -->

    <!-- post__comments -->
    <div class="post__comments">
      <Comment v-for="comment of data.comments" :data="comment" v-bind:key="comment.id" ></Comment>
      <div class="post-comment">
        <a href="#" class="post-comment__avatar">
          <img src="img/avatars/01.png" alt="" />
        </a>
        <div class="post-comment__text">
          <a href="#" class="post-comment__name">John Golt</a> Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Alias cumque odio eaque autem,
          incidunt sit non a error harum atque magni, dolor necessitatibus cum!
          In eum earum nam, ipsam dolorem.
        </div>
      </div>

      <div class="post-comment">
        <a href="#" class="post-comment__avatar">
          <img src="img/avatars/01.png" alt="" />
        </a>
        <div class="post-comment__text">
          <a href="#" class="post-comment__name">John Golt</a> Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Alias cumque odio eaque autem,
          incidunt sit non a error harum atque magni, dolor necessitatibus cum!
          In eum earum nam, ipsam dolorem.
        </div>
      </div>

      <div class="post-comment">
        <a href="#" class="post-comment__avatar">
          <img src="img/avatars/01.png" alt="" />
        </a>
        <div class="post-comment__text">
          <a href="#" class="post-comment__name">John Golt</a> Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Alias cumque odio eaque autem,
          incidunt sit non a error harum atque magni, dolor necessitatibus cum!
          In eum earum nam, ipsam dolorem.
        </div>
      </div>

      <div class="post-comment">
        <a href="#" class="post-comment__avatar">
          <img src="img/avatars/01.png" alt="" />
        </a>
        <div class="post-comment__text">
          <a href="#" class="post-comment__name">John Golt</a> Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Alias cumque odio eaque autem,
          incidunt sit non a error harum atque magni, dolor necessitatibus cum!
          In eum earum nam, ipsam dolorem.
        </div>
      </div>
    </div>
    <!-- // post__comments -->

    <div class="post__comment-form">
      <div class="comment-form">
        <textarea
          class="comment-form__textarea"
          placeholder="Добавить комментарий"
        ></textarea>
        <button disabled class="comment-form__button">Опубликовать</button>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";

export default {
  props: ["data"],
  components: {
    Comment
  }
};
</script>
