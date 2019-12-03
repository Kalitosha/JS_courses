// Напишите класс ZooBuilder для создания экземпляров класса Zoo из №1.
// Добавьте в класс ZooBuilder статический метод create. 
// Как использовать этот метод? 
// В чем преимущество использовать create над конструкцией new ZooBuilder?
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

class ZooBuilder{
  constructor() {
    this.name = 'none';
    this.animals = [];
  }
 
  setName(val){
    this.name = val;
    return this;
  }

  setAnimals(...args){
    this.animals.push(...args);
    return this;
  }

  getZoo(){
    return new Zoo(this.name, this.animals);
  }

  static create(...args) { // это для Factory
    return new ZooBuilder(...args);
  }
}

const zooBuilder = new ZooBuilder;
const zoo = zooBuilder.setName('new Zoo').setAnimals('crocodile', 'owl', 'seal').getZoo();
console.log(zoo);

// метод create() позволяет избежать создания лишней переменной
const zoo_1 = ZooBuilder.create().setName('Zoo1').setAnimals('crocodile1', 'owl1', 'seal1').getZoo();
console.log(zoo_1);




