import Component from "../Component";
import htmlTemplate from "./index.html";

export default class Comment extends Component {
  constructor(originalArgs = {}) {
    super("commentPlace");
    this.comments = [];
  }

  add(comment) {
    this.comments.push(comment);
  }

  render() {
    const element = super.render();
    element.append(...this.comments.map(x => x.render()));
    return element;
  }

  getHtmlTemplate() {
    return htmlTemplate;
  }
}
