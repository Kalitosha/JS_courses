import Page from './Page';

export default class Pouter{
    constructor(){
        this.routes = [];
        this.route = null; // текуший роут
        this.page = null;
    }

    add(path, container){ // добавляем пути для роутеринга
        this.routes.push({
            path, container
        })
    }

    update(){ // обновляет все приложение
        //console.log(location.pathname); // location - объект, кот хранит служебную ин-фу об адресной строке

        for (const route of this.routes){ // ищем нужный роут
            if (route.path.match(location.path)){ // если путь совпадает
                //console.log(route);
                this.route = route;
                this.page = new Page(route.container) // Page - внешний вид нашей страницы
            }
        } 
    }
}