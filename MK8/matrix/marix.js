module.exports = class Matrix {
  constructor(str = "") {
    const args = str
      .trim()
      .replace(/\n/g, " |") // меняем все переносы на |
      .replace(/\s+/g, " ") // меняем все пробелы на один пробел
      .split(" "); // режем в местах пробелов
    console.log(args);
    this.body = [];

    let row = [];
    for (const i of args) {
      if (i === "|") {
        this.body.push(row);
        row = [];
      } else {
        const numb = parseInt(i);
        row.push(numb);
      }
    }
    this.body.push(row);
    //console.log(this.body);
  }

  static create(...args) {
    return new Matrix(...args);
  }

  getClone() {// паттерн prototype    
    const clone = Matrix.create();
    clone.body = JSON.parse(JSON.stringify(this.body));
    return clone;
  }

  static getSum(a, b) {
    const c = a.getClone();
    for (let y = 0; y < c.body.length; y++) {
      for (let x = 0; x < c.body[y].length; x++) {
        c.body[y][x] += b.body[y][x];
      }
    }
    return c;
  }

  static getTranspose(a) {// транспонирование    
    const c = a.getClone();

    for (let y = 0; y < a.body.length; y++) {
      for (let x = 0; x < a.body[y].length; x++) {
        c.body[x][y] = a.body[y][x];
      }
    }
    return c;
  }

  static getMulti(a, b) {
    // умножение
  }

  static getDeterminal(a) {
    // определитель
  }
};
