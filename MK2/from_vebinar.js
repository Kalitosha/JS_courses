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
console.log('person1=', person1);
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
console.log('person2=', person2);
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
console.log('person3=', person3);
person3.sayHello(); // находим этот метод в прототипе

/////////////////////////////////////////////////////////////////////
console.log('/*******************************************************/');
/////////////////////////////////////////////////////////////////////
//ГЕТТЕРЫ, СЕТТЕРЫ И СТАТИЧЕСКИЕ ПОЛЯ

class Person_new1 {
    constructor(name, family){
        this.name = name;
        this.family = family;
    } 

    static create(...args){// принадлежит не экземпяру, а самому классу
        return new Person_new1(...args);
    }

    sayHello(){
        console.log(`Приветики от ${this.name} ${this.family}`);
        return this;
    }
    get fullName(){
        return `${this.name} ${this.family}`;
    }

    set fullName(value){
        const [name, family] = value.split(' ');

        this.name = name;
        this.family = family;

        return value;
    }
}

const person4 = new Person_new1('name4', 'family4');
person4.fullName = 'Почка4 Точка4';
console.log('person4.fullName=', person4.fullName);
console.log('person4=', person4);

// создаем человека с помощью статич метода create
const person5 = Person_new1.create('static_name5', 'static_family5'); // create() - функция, т.к .у нее нет контекста

/////////////////////////////////////////////////////////////////////
console.log('/*******************************************************/');
/////////////////////////////////////////////////////////////////////
//ЦЕПНОЙ СТИЛЬ

class Counter{
    constructor(){
        this.number = 0;
    }

    static create(){
        return new Counter;
    }

    show(){
        console.log('this.number=', this.number);
        return this;
    }

    add(n){
        this.number += n;
        return this;
    }

    inc(){
        this.number++;
        return this;
    }

    multi(n){
        this.number *= n;
        return this;
    }
}

const counter = new Counter;
console.log('counter=', counter);

counter.show();
counter.show().show();

counter.show().add(5).multi(2).inc().show(); // это пример цепного стиля

/********************************************/

const numbers = [0, 3, 4, 1, -4, 5];

numbers
    .sort((a,b) => a - b)
    .filter(x => x > 0);

/********************************************/
Counter // тут нет переменной, в которой бы хралинся counter // тут мы работаем с безымянным экземпляром класса
    .create()
    .show()
    .add(5)
    .multi(2)
    .inc()
    .show();

/////////////////////////////////////////////////////////////////////
console.log('/*******************************************************/');
/////////////////////////////////////////////////////////////////////
// НАСЛЕДОВАНИЕ 

class Dot{
    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    getR(){ // перевод в радианы
        return (this.x**2 + this.y**2)**0.5;
    }
}

class Point extends Dot{ // тут сработало это: Point.prototype.__proto__ = Dot.prototype;
    constructor(x, y, color){
        super(x, y); // вызываем суперконструктор // ОБЯЗАТЕЛЬНО
        this.color = color;

        // !!! в JS нельзя переопределить конструктор, его можно только унаследовать или расширить  
    }

    getR(){ // перевод в радианы
        super.getR();
        console.log('super.getR()=', super.getR());

        return (this.x**2 + this.y**2)**0.5 + 1;
    }

    draw(){
        console.log('x, y, color=', this.x, this.y, this.color);
    }
}

const dot = new Dot(1, 2);
const point = new Point(1, 2, 'green');

console.log('dot=', dot);
console.log('point=', point);

console.log('point.getR()=', point.getR());

/////////////////////////////////////////////////////////////////////
console.log('/*******************************************************/');
/////////////////////////////////////////////////////////////////////

class SmartArray extends Array{
    get first(){
        return this[0];
    }

    set first(value){
        this[0] = value;
    }

    toggle(value){ // если эл-т есть, то удаляет его. Если эл-та нет - добавляет
        if(this.includes(value)){
            const index = this.indexOf(value);
            this.splice(index, 1); 
        }
        else{
            this.push(value);
        }
    }
}

const smArr = new SmartArray(10, 1, 2, 3, 4, 5)
console.log('smArr=', smArr);

smArr.push(6);
console.log('smArr=', smArr);

console.log('smArr.first=', smArr.first);
smArr.first = 'яблоко';
console.log('smArr=', smArr);

console.log('');

console.log('smArr=', smArr); // есть
smArr.toggle('яблоко'); // убрали 
console.log('smArr=', smArr); // нет
smArr.toggle('яблоко'); // добавили
console.log('smArr=', smArr); // есть

/////////////////////////////////////////////////////////////////////
console.log('/*******************************************************/');
/////////////////////////////////////////////////////////////////////
/* //публичные, приватные и защищенные поля
class Pers {
    constructor(name){
        this.name = name; // это public поле
    }
}

const pers = new Pers('Aaa')
console.log('pers=', pers);
*/
/////////////////////////////////////////////////////////////////////
console.log('/*******************************************************/');
/////////////////////////////////////////////////////////////////////
//ПАТТЕРНЫ

// 1) СИНГЛТОН (1.33.04)
/* мы гарантируем, что экземпляр какого-то класса будет в единственном числе */

class Singleton{
    constructor(){      
        if (Singleton.instance){ // проверяем, существует ли уже экземпляр этого класса
            return Singleton.instance // если есть, возвращаем его
        } // если нет - создаем
        this.counter = 0;
        Singleton.instance = this;
        //return this; // всегда скрыт в конце любого конструктора
    }
}

const s1 = new Singleton;
const s2 = new Singleton;

//delete Singleton.instance // так можно сломать

console.log('s1 === s2: ', s1 === s2);
////////////////////////////////////////////////////////////////////
/*
;(function() { //самовызывающаяся ф-ция
    let instance = null;
    class Singleton{
        constructor(){      
            if (instance){ // проверяем, существует ли уже экземпляр этого класса
                return instance // если есть, возвращаем его
            } // если нет - создаем
            this.counter = 0;
            instance = this;
            //return this; // всегда скрыт в конце любого конструктора
        }
    }
    window.Singleton = Singleton; // "выкинем наружу"))
});
// в одном файле пишем export default Singleton
// в другом модуле import Singleton
*/





