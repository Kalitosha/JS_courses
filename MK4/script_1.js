// Напишите класс адаптер для localStorage.
// Реализуйте в адаптере интерфейс с методами: set, get, includes и clear.
////////////////////////////////////////////////////////////////////////////
// Адаптер : принимает в качестве аргумента какой-то объект и позволяет переименовать синтаксически
//           сложные названия методов и переиспользовать их
/* 
class Database {
	constructor () {
		this.users = []
	}

	static create (...args) { // метод - фабрика
		return new Database(...args)
	}

	saveNewUserData (user) {
		this.users.push(
			JSON.parse(JSON.stringify(user))
		)
	}

	findOneUserByOwnId (userId) {
		for (const user of this.users) {
			if (user.id === userId) {
				return user
			}
		}
	}
}

class Adapter {
	constructor (db) {
		this.db = db
	}

	add (user) {
		this.db.saveNewUserData(user)
	}

	find (userId) {
		return this.db.findOneUserByOwnId(userId)
	}
}

const db = new Adapter(Database.create())

db.add({
	id: 1,
	name: "Алексей",
	family: "Данчин"
})

console.log(
	db.find(1) // { id: 1, name: 'Алексей', family: 'Данчин' }
)
*/
////////////////////////////////////////////////////////////////////////


class localStorage{
  constructor(){
    this.data = []
  }

  static create (...args) { // метод - фабрика
		return new localStorage(...args)
	}

  longNameOfTheValueSettingMethod(val){
    this.data.push(val);
  }

  getLongNameOfTheValueGettingMethod(){
    return this.data;
  }

  methodShowsTheContainedElements(){
    console.log(this.data);
    return this;
  }

  methodCleansUpStorage(){
    this.data = [];
    return this;
  }

}

class adapterLocalStorage{
  constructor(lStorage){ 
    this.lStorage = lStorage;
  }
  
  set setValue(val){
    this.lStorage.longNameOfTheValueSettingMethod(val);
  }

  get getValue(){
    return this.lStorage.getLongNameOfTheValueGettingMethod();
  }

  includes(){
    return this.lStorage.methodShowsTheContainedElements();
  }

  clear(){
    this.lStorage.methodCleansUpStorage();
  }
}


const ls = new adapterLocalStorage(localStorage.create());

ls.setValue = ({ 1: "value1"});
ls.setValue = ({ 2: "value2"});
ls.getValue;
ls.includes();
ls.clear();
ls.includes();
