// Создайте класс Ball с простым интерфейсом.
// Создайте от 3-х классов оберток в качестве декораторов к классу Ball.
// Покажите как изменяется поведение экземпляра в каждой обертке и во всех обертках сразу.

// Декоратор: изменяет или дополняет функционал обекта, переданного конструктору
// т.к. получается объект внутри объекта, то срабатывают одноименные методы по цепочке
/*
class Person {
	constructor (name, family) {
		this.name = name
		this.family = family
	}

	greeting () {
		return `Всем привет. Я ${this.name} ${this.family}.`
	}
}

class Arab {
	constructor (person) {
		this.person = person
	}

	greeting () {
		return this.person.greeting().split('').reverse().join('')
	}
}

class Evil {
	constructor (person) {
		this.person = person
	}

	greeting () {
		return this.person.greeting().toUpperCase().replace(/\./g, '!')
	}
}

let person = new Person('Алексей', 'Данчин')
console.log(person.greeting()) // Всем привет. Я Алексей Данчин.

person = new Evil(person)
console.log(person.greeting()) // ВСЕМ ПРИВЕТ! Я АЛЕКСЕЙ ДАНЧИН!

person = new Arab(person)
console.log(person.greeting()) // !НИЧНАД ЙЕСКЕЛА Я !ТЕВИРП МЕСВ
*/
////////////////////////////////////////////////////////////////////////

class Ball{
	constructor(size, color, weight){
		this.size = size;
		this.color = color;
		this.weight = weight;
		this.jumps = 1,3; 
	}

	// !!! метод rebound() отбязательно должен возвращать значение !!! 
	rebound(){ //отскок
		//console.log('Ball');
		return (this.jumps * this.weight*0.3 + this.size).toFixed() * 1; // тут 15
		//return parseInt(this.jumps * this.weight*0.3 + this.size, 10); // тут 14
	}
}

class Ball1{
	constructor(ball){
		this.ball = ball;	
	}

	rebound(){ //отскок
		//console.log('Ball_1');
		return this.ball.rebound() + 1;
	}
}


class Ball2{
	constructor(ball){
		this.ball = ball;	
	}

	rebound(){ //отскок
		//console.log('Ball_2');
		return this.ball.rebound() * 10;
	}
}

class Ball3{
	constructor(ball){
		this.ball = ball;	
	}

	rebound(){ //отскок
		//console.log('Ball_3');
		return this.ball.rebound() * 0.1;
	}
}

let ball = new Ball(10, 'Синий', 15); 
console.log(ball.rebound()); // 15

ball = new Ball1(ball);
console.log(ball.rebound()); // 16

ball = new Ball2(ball);
console.log(ball.rebound()); // 160

ball = new Ball3(ball);
console.log(ball.rebound()); // 16
