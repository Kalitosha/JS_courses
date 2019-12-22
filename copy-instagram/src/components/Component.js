// render 
export default class Component{ // отвечает за состояние компонента страницы
    constructor(type){
        this.type = type;
    }

    // суперкласс с основной логикой // далее будет реализован factory method
    render(){ //превращаем строку в DOM структуру
        const divElement = document.createElement('div');
        //divElement.innerHTML = this.htmlTemplate; // абстрактное поле // это связано с абстр. фабрикой
        divElement.innerHTML = this.getHtmlTemplate(); // абстрактный метод // будет реализован в дочерних элементах
        return divElement.firstElementChild;
    }
}