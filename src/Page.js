export default class Page{
    constructor(container){
        this.fragment = document.createDocumentFragment();
        this.fragment.append(...container.map(x=>x.render())); //append принимает перечень(через запятую), а map возвращает массив
    }
}