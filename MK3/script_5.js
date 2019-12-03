// Напишите 2 класса, реализующие паттерн Abstract Factory на примере
// спортивных мероприятий. Интерфейс для этих классов:
/*
interface SportEvent {
    getSportsman();
    getEvent();
}
*/

// паттерн заключется в создании нескольких классов с одинаковыми методами
// объединяет взаимосвязанные сущности, т.е. у нас появится доступ из одной фабрики ко всем методам
//
//признаки абстрактной фабрики: есть коллекция методов 
//и она сгруппирована по опр признакам


// " Абстрактная фабрика объявляет список создающих методов, 
// которые клиентский код может использовать для получения тех
// или иных разновидностей элементов интерфейса. 
// Конкретные фабрики относятся к различным операционным системам 
// и создают элементы, совместимые с этой системой. "

/* // код с урока
class Candy { // Конкретная фабрика
  constructor() {
    this.type = "Candy";
  }
}
class Soda { // Конкретная фабрика
  constructor() {
    this.type = "Soda";
  }
}
class Barbecue { // Конкретная фабрика
  constructor() {
    this.type = "Barbecue";
  }
}
class Wine { // Конкретная фабрика
  constructor() {
    this.type = "Wine";
  }
}

class ChildrensHolidayFactory { // Абстрактные продукты
  makeFood() {
    return new Candy();
  }

  makeDrink() {
    return new Soda();
  }
}

class AdultsHolidayFactory { // Абстрактные продукты
  makeFood() {
    return new Barbecue();
  }

  makeDrink() {
    return new Wine();
  }
}

function makeHolidayFun(food, drink) {
  console.log("еда= ", food.type, "напиток= ", drink.type);
}

{ // Детский праздник
  const factory = new ChildrensHolidayFactory(); // Абстрактная фабрика

  const food = factory.makeFood();
  const drink = factory.makeDrink();

  makeHolidayFun(food, drink);
}

{ // Взрослый праздник
  const factory = new AdultsHolidayFactory(); // Абстрактная фабрика

  const food = factory.makeFood();
  const drink = factory.makeDrink();

  makeHolidayFun(food, drink);
}
*/
/* ***************************************** */
/*
class Bootstrap{
  getButton(){
    const el = document.createElement('div');
    el.className = 'button button-default';
    return el;
  }
}

class Material {
  getButton(){
    const el = document.createElement('div'); // это фабрика
    el.className = 'btn mx-auto';
    return el;
  }  
}
*/