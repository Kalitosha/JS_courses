// Script 1
// Задание: Перепишите класс в классическом виде.
/*
const AnimalPrototype = {
  letVoice() {
    console.log(
      `${this.name} говорит ${this.voice}! ${this.type} очень милый.`
    );
  }
};

function Animal(type, voice, name) {
  return {
    type,
    name,
    voice,
    __proto__: AnimalPrototype
  };
}

const animal = Animal("кот", "мяу", "Мурзик");

animal.letVoice();
*/
/**********************************************************/

function Animal(type, voice, name) {
  this.type = type;
  this.name = name;
  this.voice = voice;
}

Animal.prototype.letVoice = function letVoice() {
  console.log
  (`${this.name} говорит ${this.voice}! ${this.type} очень милый.`);
};

const animal = new Animal("кот", "мяу", "Мурзик");
animal.letVoice();
