console.log("start from index.js");

import Application from "./Application";

import Header from "./components/Header";
import Container from "./components/Container";
import Post from "./components/Post";
import Comment from "./components/Comment";

const app = new Application({
  el: document.querySelector("#app")
}); // создаем приложение

const header = new Header();
const container = new Container();

container.add(
  new Post({
    user: {
      name: "Алексей",
      surname: "Данчин",
      image: "img/avatars/01.png"
    },

    content: {
      image: "img/posts/man-in-forest.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fugiat, aliquam! In fugit id sint, nam repellendus possimus sit itaque aspernatur modi facere earum mollitia veritatis officia quo iste nisi.",
      tags: ["#forest", "#travel", "#journey", "#holiday"]
    },
    
    comment: new Comment({
        user: { name: "John", surname: "Golt", image: "img/avatars/01.png" },
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque odio eaque autem, incidunt sit non a error harum atque magni, dolor necessitatibus cum! In eum earum nam, ipsam dolorem."
    })
    
    
    // comments: [
    //   {
    //     user: { name: "John", surname: "Golt", image: "img/avatars/01.png" },
    //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque odio eaque autem, incidunt sit non a error harum atque magni, dolor necessitatibus cum! In eum earum nam, ipsam dolorem."
    //   }
    // ]
  })
);


app.router.add("/", [header, container]);

app.update(); // обновляем все приложеие целиком
console.log(app);
