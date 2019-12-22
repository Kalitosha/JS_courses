import Component from "../Component";
import htmlTemplate from "./index.html";

export default class Comment extends Component {
  constructor(originalArgs = {}) {
    super("comment");

    const args = {
      comments: [],
      ...originalArgs // тут мы сливаем данные с данными по умолчанию
    };

    this.comments = args.comments.map(x => ({
      user: {
        name: x.user.name,
        surname: x.user.surname,
        image: x.user.image
      },

      content: x.content
    }));
  }

  add(component) {
    this.comments.push(component);
  }

  render() {
    const element = super.render();
    element.append(...this.comments.map(x => x.render())); // добавляем комменты в элемент
    return element;
  }

  getHtmlTemplate() {
    // переопределяем ф-ю // должна возвращаться строка с html кодом
    console.log(htmlTemplate);
    return htmlTemplate      
      .replace(/{%user.name%}/g, this.comments.user.name) // заменяем шаблоны // флаг g замена всех вхождений
      .replace(/{%user.surname%}/g, this.comments.user.surname)
      .replace(/{%user.image%}/g, this.comments.user.image)
      .replace(/{%user.content%}/g, this.comments.content);
  }
}
