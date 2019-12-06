// Напишите несколько классов мостов к главному классу Shop: Good, Client, Room.

// мост создает обдельный класс, объдиняющий однотипные методы (например, говорящие что-то)

/*
class Person {
	constructor (name, family) {
		this.name = name
		this.family = family

		this.speaker = new Speaker(this)
		this.walker = new Walker(this)
	}
}

class Speaker {
	constructor (person) {
		this.person = person
	}

	greeting () {
		console.log(`${this.person.name} приветствует вас!`)
	}
}

class Walker {
	constructor (person) {
		this.person = person
	}

	run () {
		console.log(`${this.person.name} побежал за мороженым!`)
	}
}

const person = new Person('Алексей', 'Данчин')

person.walker.run()
person.speaker.greeting()
*/
////////////////////////////////////////////////////////////////////////

class Shop {
  constructor(products, clientele, rooms) {
    this.products = products || [];
    this.clientele = clientele || [];
    this.rooms = rooms || [];

    this.forGood = new Good(this);
    this.forClient = new Client(this);
    this.forRoom = new Room(this);
  }
}

class Good {
  //товар
  constructor(shop) {
    this.shop = shop;
  }

  addProduct(val) {
    this.shop.products.push(val);
  }

  removeOne() {
    if (!this.shop.products) {
      this.shop.products.pop();
    } else {
      console.log("products is empty");
    }
  }
}

class Client {
  constructor(shop) {
    this.shop = shop;
  }

  addProduct(val) {
    this.shop.clientele.push(val);
  }

  removeOne() {
    if (!this.shop.clientele) {
      this.shop.clientele.pop();
    } else {
      console.log("clientele is empty");
    }
  }
}

class Room {
  constructor(shop) {
    this.shop = shop;
  }

  addProduct(val) {
    this.shop.rooms.push(val);
  }

  removeOne() {
    if (!this.shop.rooms) {
      this.shop.rooms.pop();
    } else {
      console.log("rooms is empty");
    }
  }
}

const shop = new Shop();

shop.forGood.addProduct("молоко");
console.log(shop.products);

shop.forClient.removeOne();
console.log(shop.clientele);
