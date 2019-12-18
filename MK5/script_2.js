//Напишите класс, работа методов которого зависит от внутреннего состояния (паттерн State).
// Например создайте класс Basket с возможностью добавления товаров.

/*
const basket = new Basket

basket.add(new Good('Йогурт', 120.05))
console.log(basket.cost) // 120

basket.accuracy = 'cents'
console.log(basket.cost) // 120.05
*/
//////////////////////////////////////////////////////////
/*
class Person {
	constructor (name, family, age) {
		this.name = name
		this.family = family
		this.age = age

		this.state = 'normal'
	}

	greeting () {
		if (this.state === 'normal') {
			console.log(`Добрый день. Я ${this.name} ${this.family}.`)
		}

		else if (this.state === 'angry') {
			console.log(`ЧТО ${this.name.toUpperCase()}?! Я УЖЕ ${this.age} ${this.name.toUpperCase()}!`)
		}
	}
}

const person = new Person('Алексей', 'Данчин', 27)

person.greeting() // Добрый день. Я Алексей Данчин.

person.state = 'angry'

person.greeting() // ЧТО АЛЕКСЕЙ?! Я УЖЕ 27 АЛЕКСЕЙ!
*/
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

class Product{
	constructor(name, price){
		this.name = name;
		this.price = price;
	}
}

class Basket{
	constructor(){
		this.products = [];
		this.cost = 0;
		this.accuracy = 'rubles';
	}
	
	addProduct(product){
		// console.log(product);
		// if (this.accuracy === 'rubles') {
		// 	product.price = Math.round(product.price);
		// 	console.log(`rubles: ${product.price}`);
		// }
		// else if (this.accuracy === 'kopecks') {			
		// 	console.log(`kopecks: ${product.price}`);
		// }		
		this.products.push(product);
		this.cost += product.price;
	}

	get getCost(){
		if(this.accuracy === 'rubles'){
			console.log(`'rubles'= ${Math.round(this.cost)}`);
			return parseInt(this.cost);
		}
		else if(this.accuracy === 'kopecks'){
			console.log(`'kopecks'= ${(this.cost)}`);
			return this.cost;
		}		
	}
}

const basket = new Basket;

basket.addProduct(new Product('Йогурт', 120.05));
basket.getCost; // 120

basket.accuracy = 'kopecks'; // or rubles
basket.getCost; // 120.05

