// controller

import Component from '../Component';
import htmlTemplate from './index.html';

export default class Container extends Component{
    constructor(){
        super('container');
        this.components = [];
    }

    add(component){ // по-хорошему, надо бло добавить проверку существования компонента в коллекции компонентов
        this.components.push(component);

    }

    render(){
        const element = super.render();
        element.append(...this.components.map(x=>x.render())); // добавляем components(посты) в элемент
        return element;
    }
    
    getHtmlTemplate(){ // переопределяем ф-ю // должна возвращаться строка с html кодом         
        return htmlTemplate; // или можно было прописать require прям тут 
    }
}