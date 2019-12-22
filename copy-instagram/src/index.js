console.log("start from index.js");

import Application from "./Application";

import Header from "./components/Header";
import Container from "./components/Container";
import Post from "./components/Post";
import CommentsPlace from "./components/CommentsPlace";
import Comment from "./components/Comment";

import store from "./fakeData.json";

const app = new Application({
  el: document.querySelector("#app")
}); // создаем приложение

const header = new Header();
const container = new Container();

for (const post of store.posts) {
  container.add(new Post(post));
}

console.log(container);
/*
for(let i = 0;  i < store.posts.length; i++){
  for(const comment of store.posts[i].comments){
    console.log(container.components[i].commentsPlace);
    console.log(comment);
    
    //  container.components[i].commentsPlace.add(new Comment(comment))
  }
}*/
/*
  for (const comment of post.comments){
    for (const component of container.components){
      console.log(component.CommentsPlace);
      //component.CommentsPlace.add(new Comment(comment));
    }
    //console.log(container.components);
    //container.components.CommentPlace.add(new Comment(comment))
  }
*/

app.router.add("/", [header, container]);

app.update(); // обновляем все приложеие целиком
console.log(app);
