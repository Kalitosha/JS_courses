let obj_test = { // создаем объект
    a: 5,
    method(){
        console.log(this);
    }
}

obj_test.method()

let link = obj_test; // link и obj_test ссылаются на один объект
/*******************************************************/
console.log('/*******************************************************/');
/*******************************************************/

//document.querySelectorAll('*'); // выведет nodelist
//// раньше чтобы работать с ним как с массивом надо было обернуть его в Array.from(document.querySelectorAll('*'))
//// но теперь можно заимствовать контекст (заимствовать метод)
//Array.prototype.filter.apply.call( document.querySelectorAll('*'), function(){console.log("prototype");} ); // заимствуем у массива метод filter()

function f(){ // проверяет присутствует ли пятерка в списке аргументов
    if([].includes.call(arguments, 5)) { // тут мы у массива заимствуем метод includes() и вызываем этот метод с привязкой контекста arguments
        /*arguments - в любой ф-ции содержит список аргументов этой ф-ции*/
        console.log('есть 5!');
    }
}
f(1, 2, 3, 4, 5, 6);

//сейчас это делается чуть проще, с использованием spread (троеточия)
/*function f1(...args){ // в args записан массив всех входных данных
    if(args.call(5)) {
        console.log('есть 5!');
    }
}
f1(1, 2, 3, 4, 5, 6);*/

/*******************************************************/
console.log('/*******************************************************/');
/*******************************************************/
console.log(' obj1: ');

const obj1 = {
    a: 5,
    b: true,
    person: {},
    __proto__: { // в __proto__ ищутся данные, которые не были найдены в свойствах объекта
        c: 'вот он я, тип-прототип',
        __proto__: {
            d: 'работает',
            method(){
                console.log('метод из прототипа прототипа', this);
            }
        }
    }
}
console.log('a=', obj1.a);
console.log('b=', obj1.b);
console.log('c=', obj1.c); // явился-появился

console.log('obj1=', obj1); // 'с' таки нет, и __proto__ тоже нет

console.log('d=', obj1.d);

console.log('obj1.method()=', obj1.method());
console.log('obj1.__proto__.method()=', obj1.__proto__.method());

console.log('obj1.method.call(obj1)=', obj1.method.call(obj1));
/****************************************/
console.log(' obj2: ');
/****************************************/

const prototype = { // prototype - так принято называть внешний прото // в нем обычно хранятся все общие методы объектов
    c: 'вот он я, тип-прототип',
    __proto__: {
        d: 'd работает',
        method(){
            console.log('метод из прототипа прототипа', this);
        }
    }
}

const obj2 = {
    a: 5,
    b: true,
    person: {},
    __proto__: prototype
}

const obj3 = {
    a: 100,
    b: false,
    person: {},
    __proto__: prototype
}

console.log('obj2.method()=', obj2.method());
console.log('obj3.method()=', obj3.method());

obj2.c = 'что-то еще'; // тут мы добавляем новое свойство, которое никак не связано с прото
console.log('obj2.c', obj2.c);
console.log('obj3.c', obj3.c);

/*******************************************************/
console.log('/*******************************************************/');
/*******************************************************/

const PersonPrototype = {
    sayHello(){
        console.log(`Приветики от ${this.name} ${this.family}`);
    }
}

function Person (name, family) { // просто возвращает новый объект// прото делает нового человека
    return {
        name, family, 
        __proto__: PersonPrototype
    }
}

//создаем людей
const person1 = Person('name1', 'family1');
console.log('person1', person1);
person1.sayHello(); // находим этот метод в прототипе

/////////////////////////////////////////////////////////////////////
//в/старом/виде//////////////////////////////////////////////////////

function Person_old(name, family) { // *эта ф-я называлась конструктором
    //const this = () // подразумевалось автоматически и не писалось // автоматически создается контекст
    this.name = name
    this.family = family

    this.__proto__ = Person_old.prototype // подразумевалось автоматически и не писалось // автоматически задается контекст
    //return this; // подразумевалось автоматически и не писалось
}

Person_old.prototype.sayHello = function sayHello() {    
    console.log(`Приветики от ${this.name} ${this.family}`);
}

//создаем людей
const person2 = new Person_old('name2', 'family2');
console.log('person2', person2);
person2.sayHello(); // находим этот метод в прототипе

/////////////////////////////////////////////////////////////////////
//в/новом/виде////////////////////////////////////////////////////////

class Person_new {
    constructor(name, family){
        this.name = name
        this.family = family
    }

    sayHello(){
        console.log(`Приветики от ${this.name} ${this.family}`);
    }
}

//создаем людей
const person3 = new Person_new('name3', 'family3');
console.log('person3', person3);
person3.sayHello(); // находим этот метод в прототипе