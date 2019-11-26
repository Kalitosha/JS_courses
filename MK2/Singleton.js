let instance = null;

//module.exports = class Singleton{ // это по-старому
export default class Singleton{
    constructor(){      
        if (instance){ // проверяем, существует ли уже экземпляр этого класса
            return instance // если есть, возвращаем его
        } // если нет - создаем
        
        instance = this;
        this.counter = 0;
    }
} 