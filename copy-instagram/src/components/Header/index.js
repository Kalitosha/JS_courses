// controller

import Component from '../Component';
import htmlTemplate from './index.html';

export default class Header extends Component{
    constructor(){
        super('header');
    }
    
    getHtmlTemplate(){ // переопределяем ф-ю // должна возвращаться строка с html кодом хедера
        return htmlTemplate; // или можно было прописать require прям тут 
    }
}