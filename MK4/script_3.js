// Организуйте класс товаров с полями price и weight.
// Напишите класс Composite для групировки и такому же просто доступу
// к полям price и weight для всей группировки разом.
// Покажите возможность друвовидной структуры.

// можно взаимодействовать с одним или с коллекцией объектов одинаково
/*
class Good {
	constructor (label, price) {
		this.label = label
		this.price = price
	}
}

class Composite {
	constructor (label) {
		this.label = label // имя коллекции
		this.items = []
	}

	add (item) {
		this.items.push(item)
	}

	get price () {
		return this.items.reduce((p, e) => p + e.price, 0)
	}
}

const products = new Composite('Продукты')

products.add(new Good('Яблоко', 12))
products.add(new Good('Малина', 20))
products.add(new Good('Молоко', 24))

console.log(`Общая цена категории "${products.label}" составила ${products.price}"`)

const basket = new Composite('Корзина')
basket.add(products)
basket.add(new Good('Машинное масло', 100))

console.log(`Общая цена категории "${basket.label}" составила ${basket.price}"`)
*/
////////////////////////////////////////////////////////////////////////

class Good {
  constructor(label, weight) {
    this.weight = weight;
    this.label = label;
  }
}

class Composite {
  constructor(label, items) {
    this.label = label; // имя коллекции
    this.items = items || [];
  }

  get weight() {
    return this.items.reduce((w, e) => w + e.weight, 0);
    /* Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата. */
  }
}

const products = new Composite("массив еды", [new Good("Яблоко", 12),  new Good("Малина", 20),  new Good("Молоко", 24)]);

console.log(`Общий вес категории "${products.label}" составил ${products.weight}"`);

