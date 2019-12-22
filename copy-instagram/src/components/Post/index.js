import Component from "../Component";
import htmlTemplate from "./index.html";

export default class Post extends Component {
  constructor(originalArgs = {}) {
    super("post");

    const args = {
      user: {
        name: "NoName",
        surname: "NoSurname",
        image: "Oops"
      },

      content: {
        image: "Oops",
        description: "",
        tags: []
      },

      comments: [],
      ...originalArgs // тут мы сливаем данные с данными по умолчанию
    };

    this.user = {
      name: args.user.name,
      surname: args.user.surname,
      image: args.user.image
    };

    this.content = {
      image: args.content.image,
      description: args.content.description,
      tags: args.content.tags.slice()
    };

    //this.commentsPlace = commentsPlace;

    this.comments = args.comments.map(x => ({
      user: {
        name: x.user.name,
        surname: x.user.surname,
        image: x.user.image
      },

      content: x.content
    }));
  }

  // add(commentsPlace) {
  //   this.commentsPlace.push(commentsPlace);
  // }
  
  getHtmlTemplate() { // переопределяем ф-ю // должна возвращаться строка с html кодом
    return htmlTemplate // или можно было прописать require прям тут
      .replace(/{%user.name%}/g, this.user.name) // заменяем шаблоны // флаг g замена всех вхождений
      .replace(/{%user.surname%}/g, this.user.surname)
      .replace(/{%user.image%}/g, this.user.image)

      .replace(/{%content.image%}/g, this.content.image)
      .replace(/{%content.description%}/g, this.content.description)
      .replace(/{%content.tags%}/g, ...this.content.tags);      
  }
}

// иммутабельность - неизменяемым (англ. immutable) называется объект, состояние которого не может быть изменено после создания.
// Результатом любой модификации такого объекта всегда будет новый объект, при этом старый объект не изменится

// мы не создаем доп ссылок на объекты, пришебшие извне, вместо этого мы создаем свои объекты и клонируем в них все данные
// это делается для того, чтобы изменения были независимы друг от друга
