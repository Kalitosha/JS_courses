import Component from "../Component";
import htmlTemplate from "./index.html";

export default class Comment extends Component {
  constructor(originalArgs = {}) {
    super("comment");

    const args = {
      user: {
        name: '',
        surname: '',
        image: ''
      },

      content: '',
      ...originalArgs // тут мы сливаем данные с данными по умолчанию
    };


      this.user = {
        name: args.user.name,
        surname: args.user.surname,
        image: args.user.image
      }

      this.content = args.content
  }

  getHtmlTemplate() {
    console.log(htmlTemplate);
    return htmlTemplate      
      .replace(/{%comment.name%}/g, this.user.name) // заменяем шаблоны // флаг g замена всех вхождений
      .replace(/{%comment.surname%}/g, this.user.surname)
      .replace(/{%comment.image%}/g, this.user.image)
      .replace(/{%comment.content%}/g, this.content);
  }
}
