// Напишите класс Zoo с использованием полей, методов, геттеров, сеттеров.
// Реализуйте и прокомментируйте на уровне класса интерфейсы Prototype и паттерт Factory.

class Zoo {
  constructor(name, animals) {
    this.name = name;
    this.animals = animals;
  }
  static create(...args) { // это для Factory
    return new Zoo(...args);
  }

  get getName(){
    return `The name of Zoo is ${this.name}`;
  }
  
  set setName(val){
    this.name = val;
  }

  addAnimals(...args){
    this.animals.push(...args);
  }

  clone () { // это для Prototype
		const copy = new Zoo;
    copy.name = this.name;
    copy.animals = this.animals;
		return copy;
	}
}

// Фабричный способ создание объекта
const zoo_1 = Zoo.create("Wonderful world", ['koala', 'panda', 'cockatoo'])
console.log('zoo_1=', zoo_1);

const zoo_2 = zoo_1.clone(); // это для Prototype
console.log('zoo_2=', zoo_2);

console.log('zoo_1 === zoo_2=', zoo_1 === zoo_2);

// паттерн Factory создает объекты при помощи статического метода. Удобно при цепном стиле программирования.
// паттерн Prototype создает новый объект, копируя данные из объекта-прототипа