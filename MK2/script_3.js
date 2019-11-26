// Script 3
// Унаследуйте от класса, который вы написали в задание 2,
// новые классы Cat и Dog. Добейтесь того, что в конструктор
// этих классов было бы достаточно передать только кличку животного.
// Добавьте несколько методов в классы (действия, характерные животному)

/***************************************************************************/

class Animal {
  constructor(type, voice, name) {
    this.type = type;
    this.name = name;
    this.voice = voice;
  }

  letVoice() {
    console.log(
      `${this.name} говорит ${this.voice}! ${this.type} очень милый.`
    );
  }
}

class Cat extends Animal {
  constructor(name) {
    let type = "cat";
    let voice = "meow";
    super(type, voice, name);
  }

  washing(){
    console.log('I\'m clean');
  }

  spoilTheFurniture(){
    console.log(`${this.name} bad ${this.type}!`);
  }
}


class Dog extends Animal {
  constructor(name) {
    let type = "dog";
    let voice = "woof";
    super(type, voice, name);
  }

  guardHouse(){
    console.log(`${this.name} good ${this.type}!`);
  }

  buryBone(){
    console.log('my bone!');
  }
}


const cat = new Cat("Мурзик");
console.log(cat);
cat.spoilTheFurniture();

const dog = new Dog("Бобик");
console.log(dog);
dog.guardHouse();
