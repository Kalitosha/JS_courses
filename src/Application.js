import Router from './Router';

export default class Application{
    constructor(args = {}){ // сюда в качестве аргумента передается точка монтированиея приложения
        this.root = args.el;

        this.router = new Router;
    }

    update(){ // обновляет все приложение
        this.router.update(); // обновили
        this.root.innerHTML = ''; // очистили
        this.root.append(this.router.page.fragment); // добавили новую страницу
    }
}