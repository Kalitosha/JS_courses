// Script 4
// Напишите класс Manager для которого такое использование будет возможным
/*
Manager.create()
    .init(5)
    .log() // 5
    .add(100)
    .log() // 105
    .multi(1.5)
    .log() // 157,5
    .init(10)
    .log() // 10
    .add(113)
    .reverse()
    .log() // 321
*/
/***************************************************************************/

class Manager {
  constructor() {
    this.number = 0;
  }

  static create() {
    return new Manager();
  }

  init(number) {
    this.number = number;
    return this;
  }

  log() {
    console.log(this);
    return this;
  }

  add(number) {
    this.number += number;
    return this;
  }

  multi(number) {
    this.number *= number;
    return this;
  }

  reverse() {
    this.number = this.number.toString().split('').reverse().join('') * 1;
    return this;
  }
}

Manager
  .create()
  .init(5)
  .log() // 5
  .add(100)
  .log() // 105
  .multi(1.5)
  .log() // 157,5
  .init(10)
  .log() // 10
  .add(113)
  .reverse()
  .log(); // 321
 
