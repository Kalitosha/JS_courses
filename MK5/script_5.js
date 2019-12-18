//Реализуйте Chain Of Responsibility паттерн для класса фильтрации данных.
// Организуйте фильтрацию по типу данных: password, email, name.

//////////////////////////////////////////////////////////
// последовательный вызов функций // аналогично структуре односвязный список
// этот паттерн используетс в express.js и в koa.js
/*
class Country {
  constructor(label, cost, buff) {
    this.label = label;
    this.cost = cost;
    this.buff = buff;
    this.next = null;
  }
}

class TravelAgency {
  constructor() {
    this.first = null;
  }

  get last() {
    if (this.first === null) {
      return null;
    }

    let current = this.first;

    while (current.next !== null) {
      current = current.next;
    }

    return current;
  }

  add(country) {
    if (this.first === null) {
      this.first = country;
    } else {
      this.last.next = country;
    }
  }

  buyTicket(money) {
    let current = this.first;

    while (current) {
      if (current.cost <= money && current.buff > 0) {
        current.buff--;
        return current;
      }

      current = current.next;
    }
  }
}

const ta = new TravelAgency();

ta.add(new Country("Австралия", 15000, 3));
ta.add(new Country("Норвегия", 10000, 2));
ta.add(new Country("Польша", 18000, 4));

console.log(ta.buyTicket(15000)); // Country { label: 'Австралия', cost: 15000, buff: 2 }
console.log(ta.buyTicket(11000)); // Country { label: 'Норвегия', cost: 10000, buff: 1 }
*/
//////////////////////////////////////////////////////////

class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;

    this.next = null; // это по сути ссылка на след эл-т
  }
}

class Filter {
  constructor() {
    this.first = null; // это ссылка на первый эл-т
  }

  get last() {
    if (this.first === null) {
      return null;
    }
    let current = this.first;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  add(user) {
    if (this.first === null) {
      this.first = user;
    } else {
      this.last.next = user;
    }
  }

  search(userName) {
    let current = this.first;

    while (current) {
      if (current.name === userName) {
        return current;
      }
      current = current.next;
    }
    return 'совпадений не найдено';
  }
}

const filter = new Filter();

filter.add(new User('Name1', 'password1', 'email1'));
filter.add(new User('Name2', 'password2', 'email2'));
filter.add(new User('Name3', 'password3', 'email3'));

console.log(filter.search('Name2'));
console.log(filter.search('Name444')); 