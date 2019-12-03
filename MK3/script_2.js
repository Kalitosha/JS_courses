// Напишите класс UserStatic реализующий паттерн Singleton. 
// Как реализовать этот паттерн в рамках ES6 и в рамках браузера.

// В РАМКАХ БРАУЗЕРА
;(function() { //самовызывающаяся ф-ция
    let instance = null;
    class UserStatic{
        constructor(){      
            if (instance){ // проверяем, существует ли уже экземпляр этого класса
                return instance // если есть, возвращаем его
            } // если нет - создаем
            this.value = 0;
            instance = this;
            //return this; // всегда скрыт в конце любого конструктора
        }
    }
    window.UserStatic = UserStatic; // "выкинем наружу"))
})();

const s1 = new UserStatic();
const s2 = new UserStatic();

console.log('s1 === s2: ', s1 === s2);

/*************************************************/
// В РАМКАХ ES6

let instance = null 
class UserStatic{
    constructor(){      
        if (instance){ // проверяем, существует ли уже экземпляр этого класса
            return instance // если есть, возвращаем его
        } // если нет - создаем
        this.value = 0;
        instance = this;
        //return this; // всегда скрыт в конце любого конструктора
    }
}

export default UserStatic;
// в другом модуле надо написать:
// import UserStatic;
//
// const s1 = new UserStatic();
// const s2 = new UserStatic();

// console.log('s1 === s2: ', s1 === s2);

