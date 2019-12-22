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

app.router.add("/", [header, container]);

app.update(); // обновляем все приложеие целиком
console.log(app);
