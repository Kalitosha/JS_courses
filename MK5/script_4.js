// Реализуйте паттерн Command в отрисовки изображения на canvas.
/*
const ADD_PERSON = 0b00
const GET_PERSON = 0b01
const REMOVE_PERSON = 0b10
const CLEAR_LIST = 0b11

class Person {
	constructor (name, family) {
		this.id = Person.idCounter++
		this.name = name
		this.family = family
	}
}

Person.idCounter = 1

class System {
	constructor () {
		this.persons = []
	}

	dispatch (data) {
		if (data.code === ADD_PERSON) {
			this.persons.push(new Person(data.name, data.family))
			return true
		}

		if (data.code === GET_PERSON) {
			for (const person of this.persons) {
				if (person.id === data.id) {
					return person
				}
			}
		}

		if (data.code === REMOVE_PERSON) {
			this.persons = this.persons.filter(x => x.id !== data.id)
			return true
		}

		if (data.code === CLEAR_LIST) {
			this.persons = []
			return true
		}
	}
}

const system = new System

const command1 = {
	code: ADD_PERSON,
	name: 'Алексей',
	family: 'Данчин'
}

system.dispatch(command1)

console.log(system.persons) // [ Person { id: 1, name: 'Алексей', family: 'Данчин' } ]

const person = system.dispatch({
	code: GET_PERSON,
	id: 1
})

console.log(person) // Person { id: 1, name: 'Алексей', family: 'Данчин' }

system.dispatch({
	code: CLEAR_LIST
})

console.log(system.persons) // []
*/
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
const ADD_BACKGROUND = 0b00;
const RED_SQUARE = 0b01;
const BLUE_CIRCLE = 0b10;
const PINK_RECTANGLE = 0b11;

class Canvas {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

class Painter {
  constructor(id) {
    this.canvas = new Canvas(id);
  }

  choiceOptions(data) {
    if (data.code === ADD_BACKGROUND) {
      this.canvas.ctx.fillStyle = "#93cae3";
      this.canvas.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      return true;
    }
    if (data.code === RED_SQUARE) {
      this.canvas.ctx.fillStyle = "red";
      this.canvas.ctx.fillRect(data.x, data.y, 50, 50);
      return true;
    }
    if (data.code === BLUE_CIRCLE) {
      this.canvas.ctx.fillStyle = "blue";
      this.canvas.ctx.strokeStyle = "blue";
      this.canvas.ctx.arc(data.x, data.y, 40, 0, 360);
      this.canvas.ctx.fill();
      return true;
    }
    if (data.code === PINK_RECTANGLE) {
      this.canvas.ctx.fillStyle = "pink";
      this.canvas.ctx.fillRect(data.x, data.y, 80, 170);
      return true;
    }
  }
}

const painter = new Painter("myCanvas"); // сделали красильщика

painter.choiceOptions({ code: ADD_BACKGROUND });

const command_1 = {
  code: RED_SQUARE,
  x: 90,
  y: 150
};
painter.choiceOptions(command_1);

painter.choiceOptions({
  code: BLUE_CIRCLE,
  x: 330,
  y: 150
});

painter.choiceOptions({
	code: PINK_RECTANGLE,
	x: 500,
	y: 150
  });

